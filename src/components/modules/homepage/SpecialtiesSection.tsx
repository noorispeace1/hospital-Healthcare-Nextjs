import {
  ArrowRight,
  Baby,
  Bone,
  Brain,
  Eye,
  HeartPulse,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

export default function SpecialtiesSection() {
  const specialties = [
    {
      name: "Cardiology",
      desc: "Heart disease, chest pain, hypertension & cardiovascular surgery.",
      doctors: "38+ Specialists",
      icon: HeartPulse,
      color: "from-rose-500/10 to-red-500/10 text-rose-600 border-rose-200/50",
    },
    {
      name: "Neurology",
      desc: "Brain, nerves, migraine, epilepsy & cognitive disorders.",
      doctors: "26+ Specialists",
      icon: Brain,
      color:
        "from-indigo-500/10 to-purple-500/10 text-indigo-600 border-indigo-200/50",
    },
    {
      name: "Orthopedics",
      desc: "Bone fractures, joint replacements, arthritis & spine care.",
      doctors: "32+ Specialists",
      icon: Bone,
      color:
        "from-amber-500/10 to-orange-500/10 text-amber-600 border-amber-200/50",
    },
    {
      name: "Pediatrics",
      desc: "Child health, newborn care, growth tracking & vaccinations.",
      doctors: "45+ Specialists",
      icon: Baby,
      color: "from-sky-500/10 to-blue-500/10 text-sky-600 border-sky-200/50",
    },
    {
      name: "Dermatology",
      desc: "Skin infections, eczema, acne, allergic reactions & laser care.",
      doctors: "29+ Specialists",
      icon: Sparkles,
      color:
        "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-200/50",
    },
    {
      name: "Ophthalmology",
      desc: "Vision testing, cataract, glaucoma & laser eye treatment.",
      doctors: "22+ Specialists",
      icon: Eye,
      color: "from-cyan-500/10 to-blue-500/10 text-cyan-600 border-cyan-200/50",
    },
    {
      name: "Mental Health",
      desc: "Clinical psychology, anxiety, stress therapy & psychiatry.",
      doctors: "19+ Specialists",
      icon: Smile,
      color:
        "from-violet-500/10 to-pink-500/10 text-violet-600 border-violet-200/50",
    },
    {
      name: "General Medicine",
      desc: "Primary consultations, diabetes, viral fevers & preventive health.",
      doctors: "60+ Specialists",
      icon: Stethoscope,
      color:
        "from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-200/50",
    },
  ];

  return (
    <section id="specialties" className="py-18 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Comprehensive Medical Care</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Explore Our Top Medical Specialties
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
              Choose from diverse medical departments with verified doctors
              ready for in-person hospital visits or immediate video
              teleconsultations.
            </p>
          </div>

          <Link
            href="/specialties"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 group"
          >
            <span>View All 30+ Specialties</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href="/specialties"
                className="group relative p-6 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 hover:border-blue-500/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} border flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {item.doctors}
                  </span>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                  <span>Consult Specialists</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
