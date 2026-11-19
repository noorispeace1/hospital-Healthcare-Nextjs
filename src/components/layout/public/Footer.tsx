import {
  ArrowRight,
  Award,
  Clock,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import Logo from "@/assets/svg/Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 text-zinc-300 border-t border-zinc-800">
      {/* Top Banner / Fast Booking Hotline */}
      <div className="border-b border-zinc-800/80 bg-gradient-to-r from-blue-950/40 via-zinc-950 to-indigo-950/40 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <HeartPulse className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Need Immediate Medical Assistance or Appointment?
              </h3>
              <p className="text-sm text-zinc-400">
                Our emergency specialists and smart triage AI are accessible
                24/7.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+8801700000000"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-semibold text-sm transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+880 1700-000000</span>
            </a>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20"
            >
              <span>Book Appointment Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="p-1 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <Logo />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                  Sync
                </span>
                <span className="text-2xl font-bold text-white">
                  Healthcare
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Sync Healthcare connects patients with top-tier verified medical
              specialists. Experience smart symptom triage, instant scheduling,
              teleconsultations, and digital prescription workflows seamlessly.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Verified Doctors</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-lg">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Patient Portal
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link
                  href="/#doctors"
                  className="hover:text-blue-400 transition-colors"
                >
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="hover:text-blue-400 transition-colors"
                >
                  Create Patient Account
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-blue-400 transition-colors"
                >
                  Patient Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-assistant"
                  className="hover:text-blue-400 transition-colors"
                >
                  AI Symptom Checker
                </Link>
              </li>
              <li>
                <Link
                  href="/patient"
                  className="hover:text-blue-400 transition-colors"
                >
                  My Prescriptions & Bills
                </Link>
              </li>
            </ul>
          </div>

          {/* Doctors & Partners */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              For Doctors & Clinics
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link
                  href="/apply"
                  className="hover:text-blue-400 transition-colors font-medium text-blue-300"
                >
                  Join as Doctor (Apply)
                </Link>
              </li>
              <li>
                <Link
                  href="/apply/verify-account"
                  className="hover:text-blue-400 transition-colors"
                >
                  Verify Doctor Account
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-blue-400 transition-colors"
                >
                  Doctor Portal Login
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Sync Healthcare
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact & Support
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Sync Healthcare Tower, Gulshan-2, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>support@synchealthcare.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>24/7 Emergency & Triage</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>
            © {new Date().getFullYear()} Sync Healthcare. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/about-us" className="hover:text-zinc-300">
              Privacy Policy
            </Link>
            <Link href="/about-us" className="hover:text-zinc-300">
              Terms of Service
            </Link>
            <Link href="/about-us" className="hover:text-zinc-300">
              Patient Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
