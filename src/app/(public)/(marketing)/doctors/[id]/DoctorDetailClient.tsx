"use client";

import {
  Award,
  Building,
  Calendar,
  ChevronRight,
  Clock,
  Info,
  MessageSquare,
  Share2,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { doctorsData, getDoctorById } from "@/data/doctors-data";

export default function DoctorDetailClient({ doctorId }: { doctorId: string }) {
  const doctor = getDoctorById(doctorId) || doctorsData[0];

  const [activeTab, setActiveTab] = useState<"info" | "experience" | "reviews">(
    "info",
  );
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 space-y-6">
        {/* 1. Breadcrumb navigation */}
        <nav
          aria-label="Breadcrumb"
          className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 flex-wrap"
        >
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href="/specialties"
            className="hover:text-blue-600 transition-colors"
          >
            Doctors
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-zinc-800 dark:text-zinc-200 font-medium truncate max-w-xs">
            {doctor.name}
          </span>
        </nav>

        {/* 2. Main Doctor Profile Card (Exact DocTime Header Layout) */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 p-5 sm:p-7 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left: Doctor Photo with Appointment Badge */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 w-full lg:w-auto">
              <div className="relative shrink-0 flex flex-col items-center">
                <div className="relative w-28 h-32 sm:w-32 sm:h-36 rounded-2xl overflow-hidden border-2 border-zinc-100 dark:border-zinc-800 shadow-sm bg-zinc-50 dark:bg-zinc-800">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </div>
                {/* Appointment Pill underneath */}
                <div className="mt-2 px-3 py-0.5 rounded-full bg-blue-600 text-white text-[11px] font-bold shadow-xs">
                  Appointment
                </div>
              </div>

              {/* Middle: Doctor Details & Credentials */}
              <div className="space-y-2 text-center sm:text-left flex-1">
                <h1 className="text-lg sm:text-2xl font-black text-zinc-900 dark:text-white leading-tight">
                  {doctor.name}
                </h1>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                  {doctor.degrees}
                </p>

                {/* Specialty Pill */}
                <div className="pt-0.5">
                  <span className="inline-block px-3 py-1 rounded-md bg-blue-600 text-white text-xs font-bold tracking-wide">
                    {doctor.specialty}
                  </span>
                </div>

                {/* Stats Row: Experience, BMDC, Rating */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-left">
                  <div>
                    <div className="text-[11px] text-zinc-400">
                      Total Experience
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200">
                      {doctor.totalExperience}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-400">BMDC Number</div>
                    <div className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200">
                      {doctor.bmdcNumber}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-400">
                      Total Rating
                    </div>
                    <div className="flex items-center gap-1 text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>
                        {doctor.rating} ({doctor.reviewCount})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Workplace */}
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 pt-1">
                  <Building className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="font-medium">{doctor.workplace}</span>
                </div>
              </div>
            </div>

            {/* Right: Booking Box & Fee */}
            <div className="w-full lg:w-72 shrink-0 border-t lg:border-t-0 lg:border-l border-zinc-100 dark:border-zinc-800 pt-4 lg:pt-0 lg:pl-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-500 font-medium">
                  Consultation Fee
                </span>
                <button
                  type="button"
                  onClick={handleShare}
                  aria-label="Share Doctor Profile"
                  className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-blue-600 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {copied && (
                <div className="text-[11px] text-emerald-600 font-medium bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded text-center">
                  Link copied to clipboard!
                </div>
              )}

              {/* Fee Amount */}
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-black text-blue-600">
                  ৳ {doctor.fee}
                </span>
                <span className="text-xs text-zinc-400 font-medium">
                  (Inc. VAT)
                </span>
              </div>

              {/* Book Appointment CTA Button */}
              <Link
                href="/register"
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Navigation Tabs (Info, Experience, Reviews) */}
        <div className="flex items-center gap-6 border-b border-zinc-200 dark:border-zinc-800 text-sm font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab("info")}
            className={`flex items-center gap-1.5 pb-3 transition-colors relative ${
              activeTab === "info"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
            }`}
          >
            <Info className="w-4 h-4" />
            <span>Info</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-1.5 pb-3 transition-colors relative ${
              activeTab === "experience"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Experience</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("reviews")}
            className={`flex items-center gap-1.5 pb-3 transition-colors relative ${
              activeTab === "reviews"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Reviews ({doctor.reviewsList.length})</span>
          </button>
        </div>

        {/* 4. Tab Content Area */}
        {activeTab === "info" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: About Doctor (7 Cols) */}
            <div className="lg:col-span-7 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 p-6 sm:p-7 space-y-6 shadow-xs">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white mb-3">
                  About Doctor
                </h2>
                <div className="space-y-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {doctor.about.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Special Interests */}
              {doctor.specialInterests.length > 0 && (
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 mb-2.5">
                    Special Interests in:
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {doctor.specialInterests.map((interest) => (
                      <span
                        key={interest}
                        className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Patient Upload Instructions */}
              {doctor.notes.length > 0 && (
                <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-xs text-zinc-600 dark:text-zinc-300 space-y-2">
                  <div className="font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" />
                    <span>Doctor&apos;s Advice &amp; Instructions</span>
                  </div>
                  {doctor.notes.map((note) => (
                    <p key={note.slice(0, 24)} className="leading-relaxed">
                      {note}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: At a Glance Cards (5 Cols) */}
            <div className="lg:col-span-5 space-y-5">
              {/* Card 1: Consultation Times */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 p-5 sm:p-6 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-blue-600 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>At a Glance</span>
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-zinc-700 dark:text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Instant Consultation Time</span>
                    </div>
                    <p className="text-zinc-500 pl-3 mt-0.5">
                      {doctor.instantConsultationTime}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-zinc-700 dark:text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>Appointment Consultation Time</span>
                    </div>
                    <p className="text-zinc-500 pl-3 mt-0.5">
                      {doctor.appointmentConsultationTime}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Key Metrics Grid */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 p-5 sm:p-6 shadow-xs">
                <div className="grid grid-cols-2 gap-y-4 gap-x-3 text-xs">
                  <div>
                    <span className="text-[11px] text-zinc-400">
                      Consultation Fee
                    </span>
                    <div className="font-extrabold text-zinc-900 dark:text-white mt-0.5">
                      ৳ {doctor.fee}{" "}
                      <span className="text-[10px] font-normal text-zinc-400">
                        (Inc. VAT)
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] text-zinc-400">
                      Follow-Up Fee
                    </span>
                    <div className="font-extrabold text-zinc-900 dark:text-white mt-0.5">
                      ৳ {doctor.followUpFee}{" "}
                      <span className="text-[10px] font-normal text-zinc-400">
                        (within 30 days)
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] text-zinc-400">
                      Patient Attended
                    </span>
                    <div className="font-extrabold text-zinc-900 dark:text-white mt-0.5">
                      {doctor.patientAttended.toLocaleString()}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] text-zinc-400">
                      Joined DocTime
                    </span>
                    <div className="font-extrabold text-zinc-900 dark:text-white mt-0.5">
                      {doctor.joinedDate}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] text-zinc-400">
                      Doctor Code
                    </span>
                    <div className="font-extrabold text-zinc-900 dark:text-white mt-0.5">
                      {doctor.doctorCode}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] text-zinc-400">
                      Avg. waiting time
                    </span>
                    <div className="font-extrabold text-zinc-900 dark:text-white mt-0.5 flex items-center gap-1">
                      <span>{doctor.avgWaitingTime}</span>
                      <Info className="w-3 h-3 text-zinc-400" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] text-zinc-400">
                      Avg. Consultation Time
                    </span>
                    <div className="font-extrabold text-zinc-900 dark:text-white mt-0.5">
                      {doctor.avgConsultationTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Tab Content */}
        {activeTab === "experience" && (
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 p-6 sm:p-7 shadow-xs space-y-5">
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
              Professional Work Experience
            </h2>

            <div className="space-y-4">
              {doctor.experienceList.map((exp) => (
                <div
                  key={`${exp.hospital}-${exp.period}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-700"
                >
                  <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h4 className="font-bold text-zinc-900 dark:text-white">
                      {exp.designation}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.hospital}
                    </p>
                    <p className="text-zinc-500">
                      {exp.department} &bull;{" "}
                      <span className="font-medium text-zinc-700 dark:text-zinc-300">
                        {exp.period}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Tab Content */}
        {activeTab === "reviews" && (
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 p-6 sm:p-7 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
              <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                Patient Feedback &amp; Reviews
              </h2>
              <div className="flex items-center gap-1.5 text-sm font-bold text-amber-500">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{doctor.rating} Rating</span>
              </div>
            </div>

            <div className="space-y-3.5">
              {doctor.reviewsList.map((rev) => (
                <div
                  key={rev.id}
                  className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-700 space-y-1.5 text-xs sm:text-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-zinc-800 dark:text-zinc-200">
                      {rev.patientName}
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      {rev.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star
                        key={`star-${rev.id}-${i}`}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 italic pt-1">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
