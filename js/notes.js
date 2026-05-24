// notes.js

const urlParams = new URLSearchParams(window.location.search);
const sem = urlParams.get("sem") || "1";
const subject = urlParams.get("subject") || "physics";
const note = urlParams.get("note") || "unit1";
const lang = localStorage.getItem("lang") || "en";

// elements
const contentEl = document.getElementById("content");
const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");
const retryBtn = document.getElementById("retry");
const unlockModal = document.getElementById("unlockModal");
const overlay = document.getElementById("overlay");
const tocEl = document.getElementById("toc");
const progressEl = document.getElementById("progress");
const langToggle = document.getElementById("langToggle");
const titleEl = document.querySelector("[data-note-title]");

// construct file path
function getFilePath() {
  const suffix = lang === "hi" ? "-hi" : "-en";
  return `/notes/sem${sem}/${subject}/${note}${suffix}.md`;
}

// parse frontmatter / generate title from content
function extractTitle(raw) {
  const titleMatch = raw.match(/^(# *)?(.*)$/m);
  return titleMatch ? titleMatch[2].trim() : `${subject} – Unit ${note}`;
}

// render TOC from headings
function buildToc() {
  const headings = contentEl.querySelectorAll("h2, h3");
  if (headings.length === 0) {
    tocEl.innerHTML = "";
    return;
  }

  const ol = document.createElement("ol");
  Array.from(headings).forEach((h) => {
    const id = h.textContent.trim().toLowerCase().replace(/\s+/g, "-");
    h.id = id;
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${id}`;
    a.textContent = h.textContent;
    li.appendChild(a);
    ol.appendChild(li);
  });
  tocEl.innerHTML = "";
  tocEl.appendChild(ol);
}

// scroll-linked progress bar
function updateProgress() {
  const total = document.body.scrollHeight - window.innerHeight;
  const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
  progressEl.style.width = `${Math.min(progress, 100)}%`;
}

window.addEventListener("scroll", updateProgress);
updateProgress();

// load markdown with preview lock
async function loadMarkdown() {
  loadingEl.style.display = "block";
  errorEl.style.display = "none";

  const filePath = getFilePath();

  try {
    const res = await fetch(filePath);
    if (!res.ok) throw new Error("File not found");

    const raw = await res.text();
    const title = extractTitle(raw);
    titleEl.textContent = title;

    const html = marked.parse(raw);
    contentEl.innerHTML = html;

    // 30% preview lock
    const key = `unlocked:${sem}:${subject}:${note}`;
    const isUnlocked = localStorage.getItem(key) === "true";

    if (!isUnlocked) {
      const words = html.split(/\s+/);
      const cutoff = Math.ceil(words.length * 0.3);
      const visible = words.slice(0, cutoff).join(" ");
      const remaining = words.slice(cutoff).join(" ");
      contentEl.innerHTML = `${marked.parse(visible)}<div class="preview-blur">${marked.parse(remaining)}</div>`;
      contentEl.style.position = "relative";
      contentEl.classList.add("partially-blurred");

      // show unlock modal
      unlockModal.style.display = "block";
      overlay.style.display = "block";
    } else {
      // already unlocked
      buildToc();
    }
  } catch (err) {
    console.error("Load error:", err);
    loadingEl.style.display = "none";
    errorEl.style.display = "block";
  } finally {
    loadingEl.style.display = "none";
  }
}

// unlock form handler
document.getElementById("unlockForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const mobile = e.target.mobile.value;

  overlay.style.display = "none";
  unlockModal.style.display = "none";

  loadingEl.style.display = "block";

  const key = `unlocked:${sem}:${subject}:${note}`;

  try {
    await saveLead(name, mobile, sem, subject, note);
    localStorage.setItem(key, "true");
  } catch (err) {
    console.error("Save lead error:", err);
  }

  // re-render full content
  const filePath = getFilePath();
  const res = await fetch(filePath);
  const raw = await res.text();
  const html = marked.parse(raw);
  contentEl.innerHTML = html;
  contentEl.classList.remove("partially-blurred");
  contentEl.style.position = "";

  buildToc();
  loadingEl.style.display = "none";
});

// language toggle
langToggle.addEventListener("click", () => {
  const newLang = langToggle.dataset.lang === "en" ? "hi" : "en";
  localStorage.setItem("lang", newLang);
  langToggle.dataset.lang = newLang;
  langToggle.textContent = newLang === "hi" ? "EN" : "HI";
  loadMarkdown();
});

// retry button
retryBtn.addEventListener("click", loadMarkdown);

// initial load
document.addEventListener("DOMContentLoaded", async () => {
  await loadMarkdown();
});

// copy code block
contentEl.addEventListener("click", (e) => {
  if (e.target.matches(".code-copy")) {
    const code = e.target.nextElementSibling.textContent;
    navigator.clipboard.writeText(code);
    e.target.textContent = "Copied!";
    setTimeout(() => (e.target.textContent = "Copy"), 2000);
  }
});
