import React, { useState } from "react";
import { X, CalendarCheck, CheckCircle2, Loader2 } from "lucide-react";
import { submitDemoRequest } from "../lib/submitLead";

const empty = { name: "", email: "", restaurant: "", date: "", message: "" };

export default function DemoModal({ open, onClose }) {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  if (!open) return null;

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.restaurant.trim()) e.restaurant = "Enter your restaurant name";
    if (!form.date) e.date = "Pick a preferred date";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    setSending(true);
    setSubmitError("");

    try {
      await submitDemoRequest(form);
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm(empty);
      setErrors({});
      setSubmitError("");
    }, 200);
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-espresso/50 flex items-end sm:items-center justify-center p-4 pb-[max(1rem,env(safe-area-inset-bottom))] animate-[fadeUp_0.2s_ease]"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl sm:rounded-2xl rounded-b-none sm:rounded-b-2xl w-full max-w-md max-h-[90dvh] overflow-y-auto shadow-lift relative animate-[fadeUp_0.25s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-espresso/40 hover:text-espresso transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div className="p-6 sm:p-8">
            <div className="w-11 h-11 rounded-xl bg-terracotta-pale text-terracotta flex items-center justify-center mb-4">
              <CalendarCheck size={20} />
            </div>
            <h3 className="text-xl font-extrabold text-espresso mb-1">Book a demo</h3>
            <p className="text-sm text-espresso-soft mb-6">
              Tell us a bit about your restaurant and we'll set up a live walkthrough.
            </p>

            <form onSubmit={submit} className="space-y-3.5">
              <div>
                <input
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Full name"
                  disabled={sending}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-cream/60 text-espresso placeholder:text-espresso-soft/50 transition-colors disabled:opacity-60 ${
                    errors.name ? "border-terracotta" : "border-espresso/12 focus:border-terracotta"
                  }`}
                />
                {errors.name && <p className="text-xs text-terracotta mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="Work email"
                  disabled={sending}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-cream/60 text-espresso placeholder:text-espresso-soft/50 transition-colors disabled:opacity-60 ${
                    errors.email ? "border-terracotta" : "border-espresso/12 focus:border-terracotta"
                  }`}
                />
                {errors.email && <p className="text-xs text-terracotta mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  value={form.restaurant}
                  onChange={(e) => update("restaurant", e.target.value)}
                  placeholder="Restaurant name"
                  disabled={sending}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-cream/60 text-espresso placeholder:text-espresso-soft/50 transition-colors disabled:opacity-60 ${
                    errors.restaurant ? "border-terracotta" : "border-espresso/12 focus:border-terracotta"
                  }`}
                />
                {errors.restaurant && <p className="text-xs text-terracotta mt-1">{errors.restaurant}</p>}
              </div>
              <div>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  disabled={sending}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-cream/60 text-espresso transition-colors disabled:opacity-60 ${
                    errors.date ? "border-terracotta" : "border-espresso/12 focus:border-terracotta"
                  }`}
                />
                {errors.date && <p className="text-xs text-terracotta mt-1">{errors.date}</p>}
              </div>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Anything specific you'd like us to cover? (optional)"
                rows={2}
                disabled={sending}
                className="w-full px-3.5 py-2.5 rounded-lg border border-espresso/12 text-sm bg-cream/60 text-espresso placeholder:text-espresso-soft/50 focus:border-terracotta transition-colors resize-none disabled:opacity-60"
              />
              {submitError && (
                <p className="text-xs text-terracotta bg-terracotta-pale rounded-lg px-3 py-2">{submitError}</p>
              )}
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-terracotta hover:bg-terracotta-dark disabled:opacity-70 text-white font-semibold text-sm py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {sending ? (
                  <>
                    <Loader2 size={15} className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Request demo <CalendarCheck size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-ok-pale text-ok flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-xl font-extrabold text-espresso mb-2">Demo requested!</h3>
            <p className="text-sm text-espresso-soft mb-6">
              We'll email <span className="font-semibold text-espresso">{form.email}</span> within one business day to confirm
              your slot on {form.date && new Date(form.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}.
            </p>
            <button
              onClick={handleClose}
              className="bg-cream-dark hover:bg-nude-light text-espresso font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
