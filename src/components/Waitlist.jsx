import React, { useState } from "react";
import { Users2, ArrowRight, CalendarCheck, CheckCircle2, Loader2 } from "lucide-react";
import Reveal from "./Reveal";
import { submitWaitlistSignup } from "../lib/submitLead";

const empty = { name: "", email: "", restaurant: "", location: "" };

export default function Waitlist({ onBookDemo }) {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.restaurant.trim()) e.restaurant = "Required";
    if (!form.location.trim()) e.location = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    setSending(true);
    setSubmitError("");

    try {
      await submitWaitlistSignup(form);
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="waitlist" className="px-5 sm:px-8 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-5">
        {/* Waitlist form card */}
        <Reveal>
          <div className="bg-terracotta-pale rounded-2xl p-7 sm:p-8 h-full flex flex-col">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-terracotta/15 text-terracotta flex items-center justify-center">
                <Users2 size={18} />
              </div>
              <h3 className="text-[17px] font-extrabold text-espresso">Join the waitlist</h3>
            </div>

            {!submitted ? (
              <form onSubmit={submit} className="flex flex-col flex-1">
                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <input
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Full Name"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-[13px] bg-white text-espresso placeholder:text-espresso-soft/50 transition-colors ${
                        errors.name ? "border-terracotta" : "border-espresso/10 focus:border-terracotta"
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-terracotta mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="Email Address"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-[13px] bg-white text-espresso placeholder:text-espresso-soft/50 transition-colors ${
                        errors.email ? "border-terracotta" : "border-espresso/10 focus:border-terracotta"
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-terracotta mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <input
                      value={form.restaurant}
                      onChange={(e) => update("restaurant", e.target.value)}
                      placeholder="Restaurant Name"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-[13px] bg-white text-espresso placeholder:text-espresso-soft/50 transition-colors ${
                        errors.restaurant ? "border-terracotta" : "border-espresso/10 focus:border-terracotta"
                      }`}
                    />
                    {errors.restaurant && <p className="text-[11px] text-terracotta mt-1">{errors.restaurant}</p>}
                  </div>
                  <div>
                    <input
                      value={form.location}
                      onChange={(e) => update("location", e.target.value)}
                      placeholder="City / Country"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-[13px] bg-white text-espresso placeholder:text-espresso-soft/50 transition-colors ${
                        errors.location ? "border-terracotta" : "border-espresso/10 focus:border-terracotta"
                      }`}
                    />
                    {errors.location && <p className="text-[11px] text-terracotta mt-1">{errors.location}</p>}
                  </div>
                </div>

                {submitError && (
                  <p className="text-[11px] text-terracotta bg-white/80 rounded-lg px-3 py-2 mb-3">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-terracotta hover:bg-terracotta-dark disabled:opacity-70 text-white font-semibold text-[14px] py-3.5 rounded-full transition-colors flex items-center justify-center gap-2 mt-1 shadow-card"
                >
                  {sending ? (
                    <>
                      <Loader2 size={15} className="animate-spin" /> Joining…
                    </>
                  ) : (
                    <>
                      Join the Waitlist <ArrowRight size={15} />
                    </>
                  )}
                </button>
                <p className="text-center text-[11.5px] text-espresso-soft/70 mt-3">No spam. Just product updates.</p>
              </form>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-4 animate-[fadeUp_0.3s_ease]">
                <div className="w-12 h-12 rounded-full bg-white text-ok flex items-center justify-center mb-3">
                  <CheckCircle2 size={24} />
                </div>
                <div className="text-[15px] font-bold text-espresso mb-1">You're on the list!</div>
                <p className="text-[12.5px] text-espresso-soft max-w-[280px]">
                  We'll email <span className="font-semibold">{form.email}</span> as soon as {form.restaurant} can get early access.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm(empty);
                    setSubmitError("");
                  }}
                  className="mt-4 text-[12px] font-semibold text-terracotta underline"
                >
                  Add another restaurant
                </button>
              </div>
            )}
          </div>
        </Reveal>

        {/* CTA banner */}
        <Reveal delay={120}>
          <div className="relative rounded-2xl overflow-hidden h-full min-h-[280px] sm:min-h-[320px] flex items-end p-6 sm:p-8 shadow-card border border-espresso/8">
            <img
              src="/hero-restaurant.jpg"
              alt="Restaurant Interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/70 to-espresso/20" />

            <div className="relative z-10">
              <h3 className="text-white text-[18px] sm:text-[20px] font-extrabold mb-2 leading-snug">
                See TableMind in action
              </h3>
              <p className="text-white/70 text-[13px] mb-5 max-w-[360px] leading-relaxed">
                Book a live demo and discover how TableMind can simplify your operations and grow your business.
              </p>
              <button
                onClick={onBookDemo}
                className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-light text-white font-semibold text-[13.5px] px-5 py-3 rounded-full transition-colors shadow-card"
              >
                Book a Demo <CalendarCheck size={15} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
