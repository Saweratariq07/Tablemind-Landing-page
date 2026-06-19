const WEB3FORMS_URL = ["https://api", "web3forms", "com/submit"].join(".");
const ACCESS_KEY_FIELD = ["access", "key"].join("_");

function requireAccessKey(key, formLabel) {
  let normalizedKey = key ? String(key).trim() : "";

  if (
    (normalizedKey.startsWith("\"") && normalizedKey.endsWith("\"")) ||
    (normalizedKey.startsWith("'") && normalizedKey.endsWith("'"))
  ) {
    normalizedKey = normalizedKey.slice(1, -1).trim();
  }

  if (!normalizedKey || normalizedKey.includes("your_")) {
    throw new Error(`${formLabel} is not configured yet. Please contact us at hello@tablemind.co.`);
  }
  return normalizedKey;
}

async function sendContactForm({ accessKey, name, email, subject, message, fields = {} }) {
  const key = requireAccessKey(accessKey, "This form");
  const formData = new FormData();

  formData.append(ACCESS_KEY_FIELD, key);
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
    });
  } catch {
    throw new Error("Network error. Check your connection and try again.");
  }

  const data = await res.json().catch(() => ({}));

  if (!res.ok || !data.success) {
    const msg = data.message || data.body?.message;
    if (msg?.toLowerCase().includes("domain")) {
      throw new Error(
        "This form is not yet approved for tablemind.co. Please email hello@tablemind.co and we'll help you submit."
      );
    }
    throw new Error(msg || "Could not send your request. Please try again or email hello@tablemind.co.");
  }

  return data;
}

export async function submitDemoRequest(form) {
  const accessKey = requireAccessKey(
    import.meta.env.VITE_WEB3FORMS_DEMO_KEY,
    "Demo booking"
  );

  const dateLabel = form.date
    ? new Date(form.date).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "Not specified";

  const message = [
    "New demo booking from the TableMind website.",
    "",
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Restaurant: ${form.restaurant}`,
    `Preferred date: ${dateLabel}`,
    form.message ? `Notes: ${form.message}` : null,
    "",
    "Reply to this email to respond directly to the prospect.",
  ]
    .filter(Boolean)
    .join("\n");

  return sendContactForm({
    accessKey,
    name: form.name,
    email: form.email,
    subject: `[TableMind] Demo request - ${form.restaurant}`,
    message,
    fields: {
      restaurant: form.restaurant,
      preferred_date: form.date,
      notes: form.message || "",
    },
  });
}

export async function submitWaitlistSignup(form) {
  const accessKey = requireAccessKey(
    import.meta.env.VITE_WEB3FORMS_WAITLIST_KEY,
    "Waitlist signup"
  );

  const message = [
    "New waitlist signup from the TableMind website.",
    "",
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Restaurant: ${form.restaurant}`,
    `Location: ${form.location}`,
    "",
    "Reply to this email to respond directly to the prospect.",
  ].join("\n");

  return sendContactForm({
    accessKey,
    name: form.name,
    email: form.email,
    subject: `[TableMind] Waitlist signup - ${form.restaurant}`,
    message,
    fields: {
      restaurant: form.restaurant,
      location: form.location,
    },
  });
}
