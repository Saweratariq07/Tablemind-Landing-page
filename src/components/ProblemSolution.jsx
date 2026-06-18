import React from "react";
import { Lightbulb, CheckCircle2, X, Check, Frown, Brain } from "lucide-react";
import Reveal from "./Reveal";

const PROBLEMS = [
  "Wrong orders and miscommunication",
  "Slow service and long wait times",
  "Food waste and poor inventory tracking",
  "No clear visibility into operations",
  "Internet downtime disrupts service",
  "No useful customer or sales insights",
];

const SOLUTIONS = [
  "Tablet POS + Kitchen Display + QR ordering in one system",
  "Real-time order flow and staff coordination",
  "Inventory tracking to reduce waste",
  "Operational analytics and business insights",
  "Offline-first order handling",
  "Customer intelligence for repeat growth",
];

export default function ProblemSolution() {
  return (
    <section id="how-it-works" className="px-5 sm:px-8 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-5">
        <Reveal>
          <div className="bg-terracotta-pale rounded-2xl p-7 sm:p-8 h-full relative overflow-hidden">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-terracotta/15 text-terracotta flex items-center justify-center">
                <Lightbulb size={17} />
              </div>
              <h3 className="text-[17px] font-extrabold text-terracotta">The Problem</h3>
            </div>
            <ul className="space-y-3.5">
              {PROBLEMS.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-terracotta/15 text-terracotta flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={10} strokeWidth={3} />
                  </span>
                  <span className="text-[13.5px] text-espresso-soft leading-snug">{p}</span>
                </li>
              ))}
            </ul>
            <Frown size={72} className="absolute -bottom-2 -right-2 opacity-[0.07] select-none text-terracotta" strokeWidth={1.5} />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-ok-pale rounded-2xl p-7 sm:p-8 h-full relative overflow-hidden">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-ok/15 text-ok flex items-center justify-center">
                <CheckCircle2 size={17} />
              </div>
              <h3 className="text-[17px] font-extrabold text-ok">The Solution</h3>
            </div>
            <ul className="space-y-3.5">
              {SOLUTIONS.map((s) => (
                <li key={s} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-ok/15 text-ok flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span className="text-[13.5px] text-espresso-soft leading-snug">{s}</span>
                </li>
              ))}
            </ul>
            <Brain size={72} className="absolute -bottom-2 -right-2 opacity-[0.07] select-none text-ok" strokeWidth={1.5} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
