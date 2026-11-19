import Link from "next/link";
import {
  Stethoscope,
  Users,
  CalendarCheck2,
  DollarSign,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function DoctorCtaSection() {
  const perks = [
    {
      title: "Flexible Digital Practice",
      desc: "Manage your physical and teleconsultation slots with full calendar flexibility.",
      icon: CalendarCheck2,
    },
    {
      title: "Verified Credential Badge",
      desc: "Join a curated network of certified healthcare professionals recognized across the country.",
      icon: ShieldCheck,
    },
    {
      title: "Streamlined Electronic Records",
      desc: "Issue secure digital prescriptions and follow-up lab reviews directly in one unified dashboard.",
      icon: Stethoscope,
    },
    {
      title: "Automated & Timely Payouts",
      desc: "Transparent consultation fee tracking and automated digital payouts.",
      icon: DollarSign,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>For Doctors & Medical Specialists</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Are You a Qualified Physician?{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Expand Your Practice
              </span>{" "}
              with Sync Healthcare.
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Connect with thousands of patients looking for verified medical
              care. Our digital clinic tools take care of appointment scheduling,
              patient records, video teleconsultations, and automated billing.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <Stethoscope className="w-4 h-4" />
                <span>Apply as a Doctor Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 font-semibold text-sm border border-zinc-700 transition-all"
              >
                <span>Doctor Portal Login</span>
              </Link>
            </div>
          </div>

          {/* Right Perks Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <div
                  key={perk.title}
                  className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-blue-500/40 transition-colors space-y-2.5 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-white">{perk.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
