"use client";

import { Calendar, Search, Star, UserCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { doctorsData } from "@/data/doctors-data";

const specialtyTabs = [
  { id: "ALL", label: "ALL SPECIALTIES" },
  { id: "HEMATOLOGY", label: "HEMATOLOGY" },
  { id: "CARDIOLOGY", label: "CARDIOLOGY" },
  { id: "NEUROLOGY", label: "NEUROLOGY" },
  { id: "GASTROENTEROLOGY", label: "GASTROENTEROLOGY" },
  { id: "DENTISTRY", label: "DENTISTRY" },
  { id: "INTERNAL MEDICINE", label: "INTERNAL MEDICINE" },
  { id: "DERMATOLOGY", label: "DERMATOLOGY" },
  { id: "PEDIATRICS", label: "PEDIATRICS" },
];

export default function SpecialistPage() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDoctors = doctorsData.filter((doc) => {
    const matchesTab =
      activeTab === "ALL" ||
      doc.departmentCode === activeTab ||
      doc.specialty.toUpperCase().includes(activeTab);

    const matchesSearch =
      searchQuery === "" ||
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.degrees.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="relative w-full min-h-screen bg-[#f8fafc] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12 sm:py-16 overflow-hidden">
      {/* Decorative molecular / hexagonal pattern on top left (Matching Screenshot) */}
      <div
        className="absolute top-0 left-0 w-96 h-96 pointer-events-none opacity-25 dark:opacity-10 -z-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 400 400"
          fill="none"
          stroke="currentColor"
          className="text-cyan-600 w-full h-full"
          role="img"
          aria-label="Decorative Molecular Pattern"
        >
          <title>Decorative Molecular Pattern</title>
          <polygon
            points="100,20 150,50 150,110 100,140 50,110 50,50"
            strokeWidth="1.5"
          />
          <polygon
            points="200,20 250,50 250,110 200,140 150,110 150,50"
            strokeWidth="1.5"
          />
          <polygon
            points="150,110 200,140 200,200 150,230 100,200 100,140"
            strokeWidth="1.5"
          />
          <polygon
            points="250,110 300,140 300,200 250,230 200,200 200,140"
            strokeWidth="1.5"
          />
          <polygon
            points="100,200 150,230 150,290 100,320 50,290 50,230"
            strokeWidth="1.5"
          />
          <circle cx="100" cy="20" r="3" fill="currentColor" />
          <circle cx="150" cy="50" r="3" fill="currentColor" />
          <circle cx="200" cy="20" r="3" fill="currentColor" />
          <circle cx="250" cy="50" r="3" fill="currentColor" />
          <circle cx="150" cy="110" r="3" fill="currentColor" />
          <circle cx="200" cy="140" r="3" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* 1. Header Section (Exact "Our Specialists" from Screenshot) */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-zinc-800 dark:text-zinc-200 tracking-tight font-sans">
            Our{" "}
            <span className="font-black text-zinc-950 dark:text-white">
              Specialists
            </span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Meet our team of medical specialists who are dedicated to providing
            you with the best healthcare treatment
          </p>
        </div>

        {/* 2. Interactive Search & Specialty Tabs Bar */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {/* Quick Doctor Search Box */}
          <div className="relative max-w-md mx-auto">
            <div className="relative flex items-center bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 rounded-full px-4 py-2 shadow-xs focus-within:ring-2 focus-within:ring-cyan-500">
              <Search className="w-4 h-4 text-zinc-400 ml-1" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search specialist doctor by name or specialty..."
                className="w-full text-xs sm:text-sm bg-transparent outline-none pl-3 pr-2 text-zinc-800 dark:text-zinc-200 placeholder-zinc-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-zinc-400 hover:text-zinc-600 px-2 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Clean Horizontal Specialty Filter Bar (Exact Screenshot Style) */}
          <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-xl sm:rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm overflow-hidden">
            <div className="flex items-center overflow-x-auto divide-x divide-zinc-100 dark:divide-zinc-800 no-scrollbar">
              {specialtyTabs.map((tab) => {
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative py-3.5 px-4 sm:px-6 text-[11px] sm:text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer text-center flex-1 ${
                      isActive
                        ? "text-[#00acc1] dark:text-cyan-400 bg-cyan-50/50 dark:bg-cyan-950/30"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                    }`}
                  >
                    <span>{tab.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#00acc1] dark:bg-cyan-400" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. Specialists Grid (Clean Floating Cards Matching Screenshot) */}
        {filteredDoctors.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs max-w-md mx-auto space-y-3">
            <UserCheck className="w-10 h-10 text-zinc-400 mx-auto" />
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">
              No Specialists Found
            </h3>
            <p className="text-xs text-zinc-500">
              Try adjusting your search query or select another specialty tab.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveTab("ALL");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-cyan-600 text-white font-bold text-xs rounded-xl shadow cursor-pointer hover:bg-cyan-700"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
            {filteredDoctors.map((doc, idx) => {
              const isDefaultHighlighted = idx === 1; // 2nd card has the appointment button like screenshot

              return (
                <div
                  key={doc.id}
                  className={`group relative rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-between text-center transition-all duration-300 border cursor-pointer hover:-translate-y-1.5 hover:shadow-2xl hover:border-cyan-200 dark:hover:border-cyan-800/80 ${
                    isDefaultHighlighted
                      ? "bg-gradient-to-b from-cyan-50/40 via-white to-white dark:from-cyan-950/20 dark:via-zinc-900 dark:to-zinc-900 border-cyan-200 dark:border-cyan-800/80 shadow-xl shadow-cyan-500/10"
                      : "bg-white dark:bg-zinc-900 border-zinc-200/80 dark:border-zinc-800 shadow-md"
                  }`}
                >
                  {/* Top Rating Badge */}
                  <div className="w-full flex items-center justify-end mb-1 text-[11px] text-zinc-400">
                    <div className="flex items-center gap-1 font-bold text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{doc.rating}</span>
                    </div>
                  </div>

                  {/* Circular Doctor Avatar with Soft Radial Border */}
                  <Link
                    href={`/doctors/${doc.id}`}
                    className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-slate-50 dark:border-zinc-800 shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300 block bg-zinc-100"
                  >
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover object-top"
                      unoptimized
                    />
                  </Link>

                  {/* Doctor Info */}
                  <div className="space-y-1 w-full">
                    <Link
                      href={`/doctors/${doc.id}`}
                      className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-1 block"
                    >
                      {doc.name}
                    </Link>

                    {/* Department / Specialty in Cyan uppercase font */}
                    <p className="text-xs font-extrabold uppercase tracking-widest text-[#00acc1] dark:text-cyan-400">
                      {doc.specialty}
                    </p>

                    <p className="text-[11px] text-zinc-400 font-normal line-clamp-1">
                      {doc.degrees}
                    </p>
                  </div>

                  {/* Bottom Action Area: "Appointment" Pill Button (Matching Screenshot) */}
                  <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 w-full flex flex-col items-center">
                    <Link
                      href={`/doctors/${doc.id}`}
                      className={`inline-flex items-center justify-center gap-1.5 px-5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                        isDefaultHighlighted
                          ? "bg-cyan-500 hover:bg-cyan-600 text-white shadow-md shadow-cyan-500/25 active:scale-95"
                          : "border border-cyan-400 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white"
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Appointment</span>
                    </Link>

                    <div className="mt-2 text-[11px] text-zinc-500 font-medium">
                      Fee:{" "}
                      <strong className="text-zinc-800 dark:text-zinc-200">
                        ৳ {doc.fee}
                      </strong>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 4. Bottom Trust & Statistics Strip */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-100 dark:divide-zinc-800">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400">
                350+
              </div>
              <div className="text-xs text-zinc-500">
                Board Certified Specialists
              </div>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
                25+
              </div>
              <div className="text-xs text-zinc-500">
                Specialized Medical Wings
              </div>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400">
                15 Min
              </div>
              <div className="text-xs text-zinc-500">
                Average Appointment Slot
              </div>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-amber-500">
                4.9 / 5.0
              </div>
              <div className="text-xs text-zinc-500">
                Patient Satisfaction Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
