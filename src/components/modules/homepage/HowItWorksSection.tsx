import Link from "next/link";
import {
  Search,
  CalendarCheck,
  Video,
  FileText,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Find & Match Specialist",
      desc: "Search by specialty, doctor name, symptoms, or let SyncAI triage guide you to the exact medical department.",
      icon: Search,
      badge: "Instant Search",
    },
    {
      step: "02",
      title: "Pick Your Date & Slot",
      desc: "View real-time doctor availability calendars. Choose in-person hospital visits or live HD video consultation.",
      icon: CalendarCheck,
      badge: "Synchronized Slots",
    },
    {
      step: "03",
      title: "Consult & Receive Care",
      desc: "Meet your physician, discuss health concerns, and immediately download verified digital e-prescriptions in your dashboard.",
      icon: Video,
      badge: "Digital Prescriptions",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            <Clock className="w-3.5 h-3.5" />
            <span>Simple & Seamless</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            How Sync Healthcare Works
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
            Book trusted medical consultations in 3 quick steps without waiting
            in clinic queues.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 p-8 flex flex-col justify-between hover:border-blue-500/40 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-blue-600/30 dark:text-blue-400/20 group-hover:text-blue-600 transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-100/70 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center mb-5 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/80 flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Guaranteed Quality Care</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-600/15">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-2xl font-bold">
              Ready to schedule your consultation?
            </h3>
            <p className="text-blue-100 text-sm max-w-xl">
              Create your patient account in under 60 seconds and experience the
              future of connected healthcare.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/register"
              className="px-6 py-3 rounded-xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 shadow-md transition-all hover:scale-105 active:scale-95"
            >
              Get Started Free
            </Link>
            <Link
              href="/login"
              className="px-5 py-3 rounded-xl bg-blue-700/60 hover:bg-blue-700 text-white font-semibold text-sm border border-white/20 transition-all"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
