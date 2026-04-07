"use client";

import { useState } from "react";
import Image from "next/image";

type Plan = {
  title: string;
  desc: string;
  image: string;
  pdf: string;
};

export default function ClientPage({
  item,
  slug,
}: {
  item: Plan;
  slug: string;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const isValid = form.name && form.email && form.phone && form.city;

  const handleSubmit = async () => {
    if (!isValid) return;

    await fetch("/api/lead", {
      method: "POST",
      body: JSON.stringify({
        ...form,
        interest: slug,
      }),
    });

    window.open(item.pdf, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 px-6 py-12">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          {item.title}
        </h1>

        <p className="text-slate-400 mt-4 text-lg">{item.desc}</p>
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* LEFT: FORM */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Get Your Free Plan</h2>

          <div className="space-y-4">
            <input
              placeholder="Full Name"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Email Address"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              placeholder="Phone Number"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <input
              placeholder="City"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />

            <button
              disabled={!isValid}
              onClick={handleSubmit}
              className={`w-full py-3 rounded-xl font-semibold transition ${
                isValid
                  ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "bg-slate-800 text-slate-500"
              }`}
            >
              Download Free Plan →
            </button>

            <p className="text-xs text-slate-500 text-center">
              🔒 No spam. Instant download.
            </p>
          </div>
        </div>

        {/* RIGHT: IMAGE + VALUE */}
        <div className="flex flex-col justify-center">
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-6 space-y-3 text-slate-400">
            <p>✔ 7-day structured diet plan</p>
            <p>✔ Foods to eat & avoid</p>
            <p>✔ Expert nutrition guidance</p>
            <p>✔ Supplement recommendations</p>
          </div>
        </div>
      </div>
    </div>
  );
}
