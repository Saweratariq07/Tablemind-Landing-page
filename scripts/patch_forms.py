import subprocess
from pathlib import Path

path = Path("src/utils/contactForms.js")
path.parent.mkdir(parents=True, exist_ok=True)

if not path.exists():
    text = subprocess.check_output(
        ["git", "show", "e30f62e:src/lib/submitLead.js"],
        text=True,
    )
    text = text.replace("export async function submitLead", "async function sendContactForm")
else:
    text = path.read_text(encoding="utf-8")

old = """  const body = {
    access_key: key,
    subject,
    from_name: "TableMind Website",
    name,
    email,
    replyto: email,
    message,
    botcheck: false,
    ...fields,
  };

  let res;
  try {
    res = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });"""

new = """  const formData = new FormData();
  formData.append("access_key", key);
  formData.append("subject", subject);
  formData.append("from_name", "TableMind Website");
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  Object.entries(fields).forEach(([field, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(field, String(value));
    }
  });

  let res;
  try {
    res = await fetch(WEB3FORMS_URL, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });"""

if old not in text:
    raise SystemExit("pattern not found")

text = text.replace(old, new).replace("return submitLead(", "return sendContactForm(")
path.write_text(text, encoding="utf-8")
print("wrote", path)
