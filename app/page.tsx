"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const plans = [
  {
    slug: "hair-fall",
    title: "Hair Fall Control",
    desc: "Stop hair fall & boost growth",
    image: "/featured/01-hair-fall-diet-plan-weekly-danann-remedies.jpg",
  },
  {
    slug: "weight-loss",
    title: "Weight Loss",
    desc: "Burn fat & lose weight",
    image: "/featured/02-weight-loss-diet-plan-weekly-danann-remedies.jpg",
  },
  {
    slug: "muscle-gain",
    title: "Muscle Gain",
    desc: "Build muscle & strength",
    image:
      "/featured/03-muscle-gain-and-weight-gain-diet-plan-weekly-danann-remedies.jpg",
  },
  {
    slug: "acidity",
    title: "Acidity Relief",
    desc: "Fix digestion & gas",
    image: "/featured/04-acidity-diet-plan-weekly-danann-remedies.jpg",
  },
  {
    slug: "constipation",
    title: "Constipation Relief",
    desc: "Improve gut health",
    image: "/featured/05-constipation-diet-plan-weekly-danann-remedies.jpg",
  },
  {
    slug: "immunity",
    title: "Immunity Boost",
    desc: "Strengthen your body",
    image: "/featured/06-immunity-diet-plan-weekly-danann-remedies.jpg",
  },
  {
    slug: "pregnancy",
    title: "Pregnancy Nutrition",
    desc: "Healthy mother & baby",
    image: "/featured/07-pregnancy-diet-plan-weekly-danann-remedies.jpg",
  },
  {
    slug: "bp",
    title: "Blood Pressure",
    desc: "Control BP naturally",
    image: "/featured/08-bp-diet-plan-weekly-danann-remedies.jpg",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <main className="grow px-6 py-12 md:py-20">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <Image src="/logo.svg" alt="Logo" width={150} height={50} />
          </div>

          <h1 className="text-5xl font-extrabold bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Free Health Diet Plans
          </h1>

          <p className="text-slate-400 mt-4 text-lg">
            Doctor-inspired plans to solve real health problems.
          </p>

          <div className="flex justify-center gap-6 mt-6 text-sm text-slate-500">
            <span>✔ Instant Download</span>
            <span>✔ No Spam</span>
            <span>✔ 100% Free</span>
          </div>
        </motion.div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => router.push(`/plan/${p.slug}`)}
              className="group cursor-pointer bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold group-hover:text-blue-400">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-400">{p.desc}</p>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-emerald-400 font-bold">₹0</span>
                  <span className="text-sm text-blue-400">Download →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PGI FORM SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto mt-28 bg-slate-900 border border-slate-800 rounded-3xl p-8 grid lg:grid-cols-2 gap-10"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Need a Custom Diet Plan?
            </h2>
            <p className="text-slate-400">
              Get a personalized diet plan designed with{" "}
              <span className="text-blue-400 font-semibold">
                PGI-certified doctors
              </span>{" "}
              tailored to your body and health condition.
            </p>
          </div>

          <form className="space-y-4">
            <input placeholder="Name" className="input" />
            <input placeholder="Phone" className="input" />
            <input placeholder="Email" className="input" />
            <textarea placeholder="Your concern" className="input h-24" />

            <button className="w-full bg-blue-600 py-3 rounded-xl">
              Request Custom Plan
            </button>
          </form>
        </motion.section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-6 text-center text-slate-400">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-blue-400">
            Facebook
          </a>
          <a href="#" className="hover:text-pink-400">
            Instagram
          </a>
          <a href="#" className="hover:text-white">
            Twitter
          </a>
        </div>

        <div className="flex justify-center gap-6 text-sm mb-2">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>

        <p>© {new Date().getFullYear()} Danann Remedies</p>
      </footer>
    </div>
  );
}
