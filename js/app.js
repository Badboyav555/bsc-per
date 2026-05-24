// app.js – shared config

const SUPABASE_URL   = "https://your-project-id.supabase.co";
const SUPABASE_ANON  = "your-anon-key";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

// Supabase table: `leads`
// columns: id, name, mobile, semester, subject, note_title, created_at (timestamp)

function saveLead(name, mobile, semester, subject, noteTitle) {
  return supabase.from("leads").insert({
    name,
    mobile,
    semester,
    subject,
    note_title: noteTitle,
    created_at: new Date().toISOString(),
  });
}
