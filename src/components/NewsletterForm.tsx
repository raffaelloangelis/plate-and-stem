"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24 md:py-28">
      <div className="wrap max-w-2xl text-center">
        <p className="label text-sage-dark mb-5">A standing note</p>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
          New distillations, <span className="italic">documented.</span>
        </h2>
        <p className="mt-5 text-forest-soft leading-relaxed">
          A quarterly note from the lab. New batches, new sourcing, and the
          occasional plant we are still trying to formulate around.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mt-9 grid grid-cols-[1fr_auto] max-w-md mx-auto border-b border-forest"
        >
          <input
            type="email"
            required
            placeholder="email address"
            disabled={submitted}
            className="bg-transparent outline-none py-3 px-1 text-forest placeholder:text-forest-soft"
          />
          <button
            type="submit"
            disabled={submitted}
            className="label px-4 py-3 hover:text-sage-dark disabled:opacity-60 transition-colors"
          >
            {submitted ? "Subscribed ✓" : "Subscribe →"}
          </button>
        </form>
      </div>
    </section>
  );
}
