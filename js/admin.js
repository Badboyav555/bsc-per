// admin.js – admin UI wiring

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector(".admin-nav");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.addEventListener("click", (e) => {
    if (e.target.matches("[data-tab]")) {
      e.preventDefault();
      const tab = e.target.dataset.tab;
      panes.forEach((p) => (p.style.display = "none"));
      document.getElementById(`${tab}Tab`).style.display = "block";
    }
  });

  // generate markdown file structure
  document.getElementById("noteForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const sem = fd.get("sem");
    const subject = fd.get("subject").toLowerCase();
    const unit = fd.get("unit");
    const content = fd.get("content");

    const url = `/notes/sem${sem}/${subject}/unit${unit}-en.md`;
    console.log("Would write:", { url, content });
    alert(`Markdown file generated at:\n${url}\n(On disk, not in browser FS)`);
  });

  // fetch leads (stub; you handle CSV export in your environment)
  const loadLeads = async () => {
    const { data, error } = await supabase.from("leads").select("*");

    if (error) {
      console.error(error);
      return;
    }

    const tbody = document.querySelector("#leadsTable tbody");
    tbody.innerHTML = data
      .map(
        (l) => `
        <tr>
          <td>${l.name}</td>
          <td>${l.mobile}</td>
          <td>${l.semester}</td>
          <td>${l.subject}</td>
          <td>${l.note_title}</td>
          <td>${new Date(l.created_at).toLocaleDateString()}</td>
          <td style="text-align:center;">
            <button class="btn" data-id="${l.id}">🗑</button>
          </td>
        </tr>
      `
      )
      .join("");

    // delete handler
    tbody.querySelectorAll("[data-id]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = btn.parentElement.parentElement.querySelector("[data-id]").dataset.id;
        await supabase.from("leads").delete().eq("id", id);
        btn.closest("tr").remove();
      });
    });
  };

  // export CSV (simplified, you can improve formatting)
  document.getElementById("exportCsv").addEventListener("click", async () => {
    const { data } = await supabase.from("leads").select("*");
    const headers = ["id", "name", "mobile", "semester", "subject", "note_title", "created_at"];
    const rows = data.map((l) => headers.map((h) => l[h]).join(","));
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "leads.csv";
    a.click();
  });

  loadLeads();
});
