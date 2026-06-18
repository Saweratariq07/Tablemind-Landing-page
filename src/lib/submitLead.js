const WEB3FORMS_URL = "https://api.web3forms.com/submit";

/**
 * Sends a lead notification via Web3Forms.
 * Each access key is registered to a specific inbox in the Web3Forms dashboard.
 * The submitter's email is used as reply-to so the client can respond directly.
 */
export async function submitLead({ accessKey, name, email, subject, message, fields = {} }) {
  const key =
    accessKey ||
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!key) {
    throw new Error(
      "Email is not configured yet. Add Web3Forms access keys to your .env file."
    );
  }

  const body = {
    access_key: key,
    subject,
    from_name: name,
    name,
    email,
    message,
    botcheck: "",
    ...fields,
  };

  const res = await fetch(WEB3FORMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok || !data.success) {
    throw new Error(data.message || "Could not send your request. Please try again.");
  }

  return data;
}

export async function submitDemoRequest(form) {
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
    "— Reply to this email to respond directly to the prospect.",
  ]
    .filter(Boolean)
    .join("\n");

  return submitLead({
    accessKey:
      import.meta.env.VITE_WEB3FORMS_DEMO_KEY ||
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
    name: form.name,
    email: form.email,
    subject: `[TableMind] Demo request — ${form.restaurant}`,
    message,
    fields: {
      restaurant: form.restaurant,
      preferred_date: form.date,
      notes: form.message || "",
    },
  });
}

export async function submitWaitlistSignup(form) {
  const message = [
    "New waitlist signup from the TableMind website.",
    "",
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Restaurant: ${form.restaurant}`,
    `Location: ${form.location}`,
    "",
    "— Reply to this email to respond directly to the prospect.",
  ].join("\n");

  return submitLead({
    accessKey:
      import.meta.env.VITE_WEB3FORMS_WAITLIST_KEY ||
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
    name: form.name,
    email: form.email,
    subject: `[TableMind] Waitlist signup — ${form.restaurant}`,
    message,
    fields: {
      restaurant: form.restaurant,
      location: form.location,
    },
  });
}
