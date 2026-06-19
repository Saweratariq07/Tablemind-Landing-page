const WEB3FORMS_URL = "https://api.web3forms.com/submit";

function requireAccessKey(key, formLabel) {
  if (!key || String(key).includes("your_")) {
    throw new Error(
      `${formLabel} is not configured yet. Please contact us at hello@tablemind.co.`
    );
  }
  return key;
}

/**
 * Sends a lead notification via Web3Forms.
 * Waitlist → hello@tablemind.co | Demo → demo@tablemind.co
 */
export async function submitLead({ accessKey, name, email, subject, message, fields = {} }) {
  const key = requireAccessKey(accessKey, "This form");

  const body = {
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
    "— Reply to this email to respond directly to the prospect.",
  ]
    .filter(Boolean)
    .join("\n");

  return submitLead({
    accessKey,
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
    "— Reply to this email to respond directly to the prospect.",
  ].join("\n");

  return submitLead({
    accessKey,
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
