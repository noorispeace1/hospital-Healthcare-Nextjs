import Link from "next/link";
import {
  ShieldCheck,
  HeartPulse,
  Sparkles,
  Users,
  Award,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function AboutUsPage() {
  const pillars = [
    {
      title: "Patient-Centered Clinical Care",
      desc: "Every interaction is engineered to ensure seamless doctor-patient communication, zero queue hassle, and transparent medical records.",
      icon: HeartPulse,
      color: "from-rose-500/10 to-red-500/10 text-rose-600",
    },
    {
      title: "Intelligent Triage & AI",
      desc: "Our AI symptom matching engine guides patients directly to appropriate board-certified specialists, reducing misdiagnosis and delays.",
      icon: Sparkles,
      color: "from-indigo-500/10 to-blue-500/10 text-indigo-600",
    },
    {
      title: "Verified Top Specialists",
      desc: "Every physician on Sync Healthcare undergoes credential screening, medical board validation, and background verifications.",
      icon: ShieldCheck,
      color: "from-emerald-500/10 to-teal-500/10 text-emerald-600",
    },
    {
      title: "HIPAA & Encrypted Records",
      desc: "Medical records, digital prescriptions, and teleconsultation audio/video streams are protected by state-of-the-art encryption standards.",
      icon: Award,
      color: "from-amber-500/10 to-orange-500/10 text-amber-600",
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-18 lg:py-24 bg-gradient-to-b from-blue-50/60 via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900/60 dark:to-zinc-950 border-b border-zinc-200/80 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
            <HeartPulse className="w-4 h-4 text-blue-600" />
            <span>About Sync Healthcare</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Synchronizing Patient Care with{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Modern Technology
            </span>
          </h1>

          <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Founded with the conviction that quality healthcare should be
            accessible in minutes, <strong>Sync Healthcare</strong> bridges the
            gap between world-class medical specialists and patients through
            intelligent triage, instant appointment scheduling, and digital clinic
            workflows.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/register"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-105"
            >
              Book an Appointment
            </Link>
            <Link
              href="/apply"
              className="px-6 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-100 font-semibold text-sm border border-zinc-300 dark:border-zinc-700 transition-all"
            >
              Join Our Medical Faculty
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values & Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            What Drives Sync Healthcare
          </h2>
          <p className="text-zinc-500 text-sm">
            Our technology and medical practices rest upon 4 core commitments to
            our patients and doctors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 space-y-3 hover:border-blue-500/40 transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
