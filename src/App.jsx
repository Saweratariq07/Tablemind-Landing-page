import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";
import DemoModal from "./components/DemoModal";
import "./index.css";

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);

  const scrollToWaitlist = () => {
    const el = document.getElementById("waitlist");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-cream text-espresso overflow-x-hidden">
      <Navbar onBookDemo={() => setDemoOpen(true)} />
      <main>
        <Hero onBookDemo={() => setDemoOpen(true)} onJoinWaitlist={scrollToWaitlist} />
        <ProblemSolution />
        <Features />
        <Pricing onBookDemo={() => setDemoOpen(true)} />
        <Waitlist onBookDemo={() => setDemoOpen(true)} />
      </main>
      <Footer />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
