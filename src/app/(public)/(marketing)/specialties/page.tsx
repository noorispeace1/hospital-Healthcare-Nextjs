"use client";

import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Search,
  Star,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { doctorsData } from "@/data/doctors-data";

interface InstantOffer {
  id: string;
  title: string;
  fee?: number;
  hours?: string;
  isOffline?: boolean;
  bgColor: string;
  borderColor: string;
  textColor: string;
  image: string;
}

const instantOffers: InstantOffer[] = [
  {
    id: "offer-1",
    title: "Experienced MBBS Doctor",
    fee: 149,
    bgColor: "bg-[#eef6ff] dark:bg-blue-950/40",
    borderColor: "border-[#d0e5ff] dark:border-blue-900/60",
    textColor: "text-blue-900 dark:text-blue-200",
    image: "/images/specialists/doc-1.jpg",
  },
  {
    id: "offer-2",
    title: "Treatment for Dengue",
    fee: 299,
    bgColor: "bg-[#f0f9ff] dark:bg-cyan-950/40",
    borderColor: "border-[#cbe8fd] dark:border-cyan-900/60",
    textColor: "text-cyan-900 dark:text-cyan-200",
    image: "/images/specialists/doc-2.jpg",
  },
  {
    id: "offer-3",
    title: "Experienced Child Doctor",
    fee: 299,
    bgColor: "bg-[#f5f9ff] dark:bg-sky-950/40",
    borderColor: "border-[#d8e8fc] dark:border-sky-900/60",
    textColor: "text-sky-900 dark:text-sky-200",
    image: "/images/specialists/doc-child.jpg",
  },
  {
    id: "offer-4",
    title: "Experienced Female Gyne Doctor",
    fee: 299,
    bgColor: "bg-[#fff0f3] dark:bg-pink-950/40",
    borderColor: "border-[#ffd1dc] dark:border-pink-900/60",
    textColor: "text-pink-900 dark:text-pink-200",
    image: "/images/specialists/doc-5.jpg",
  },
  {
    id: "offer-5",
    title: "Skin Disease Specialist",
    hours: "Everyday 8 am to 11:59 pm",
    isOffline: true,
    bgColor: "bg-[#1e293b] text-white",
    borderColor: "border-[#334155]",
    textColor: "text-white",
    image: "/images/specialists/doc-4.jpg",
  },
  {
    id: "offer-6",
    title: "Sex Disease Specialist",
    hours: "Everyday 8 am to 11:59 pm",
    isOffline: true,
    bgColor: "bg-[#1e293b] text-white",
    borderColor: "border-[#334155]",
    textColor: "text-white",
    image: "/images/specialists/doc-3.jpg",
  },
];

export default function SpecialistPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "General Medicine",
    "Dermatology",
    "Pediatrics",
    "Cardiology",
    "Gynecology",
    "Nutrition",
    "Psychiatry",
  ];

  const filteredDoctors = doctorsData.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      doc.specialty.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 space-y-6">
        {/* 1. Top Wide Search Bar (Exact DocTime Style) */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative flex items-center shadow-xs rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden px-4 py-1.5 focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by doctor name/code or department"
              className="w-full text-xs sm:text-sm bg-transparent outline-none text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 py-1.5 pl-2"
            />
            <button
              type="button"
              aria-label="Search Doctors"
              className="p-1.5 text-zinc-400 hover:text-blue-600 transition-colors"
            >
              <Search className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
          </div>

          {/* Quick Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto py-2.5 mt-1 text-xs no-scrollbar">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white font-medium shadow-xs"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-blue-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Top Promotional / Health Banner Carousel (Exact DocTime Ad Style) */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-r from-[#eef2ff] via-[#f5f3ff] to-[#fce7f3] dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 border border-indigo-100 dark:border-zinc-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Special Health Nutrition</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-950 dark:text-white leading-tight">
              হজমের অস্বস্তি ছাড়াই <br />
              <span className="text-blue-600">দুধের নিউট্রিশন</span> পেতে বেছে নিন
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
              Lacto-reduced formulated nutrition with essential vitamins and
              calcium for optimal digestive comfort.
            </p>
            <div className="pt-1">
              <Link
                href="/register"
                className="inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all active:scale-95"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Product Graphic */}
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl" />
            <div className="relative bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-700 text-center space-y-1">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold text-blue-600">
                LACTO REDUCED
              </div>
              <div className="text-[11px] text-zinc-500">
                Filled Milk Powder
              </div>
              <div className="text-xs font-black text-zinc-800 dark:text-zinc-200">
                100% Pure
              </div>
            </div>
          </div>

          {/* Carousel Chevrons */}
          <button
            type="button"
            aria-label="Previous Banner"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 dark:bg-zinc-800/80 shadow flex items-center justify-center text-zinc-700 dark:text-zinc-200 hover:bg-white"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Next Banner"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 dark:bg-zinc-800/80 shadow flex items-center justify-center text-zinc-700 dark:text-zinc-200 hover:bg-white"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            <span className="w-5 h-1.5 rounded-full bg-blue-600" />
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          </div>
        </div>

        {/* 3. Popular Specialists Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
              Popular Specialists
            </h3>
            <Link
              href="/register"
              className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Specialists Grid / Horizontal Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3.5">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 flex flex-col justify-between hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <div>
                  {/* Doctor Photo & Rating */}
                  <div className="flex items-start gap-2.5 mb-2.5">
                    <Link
                      href={`/doctors/${doc.id}`}
                      className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:opacity-90 transition-opacity"
                    >
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </Link>
                    <div className="min-w-0 flex-1">
                      <Link
                        href={`/doctors/${doc.id}`}
                        className="text-xs font-bold text-zinc-900 dark:text-zinc-100 line-clamp-2 leading-tight hover:text-blue-600 transition-colors"
                      >
                        {doc.name}
                      </Link>
                      <div className="flex items-center gap-1 mt-1 text-[11px] text-zinc-500">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                          {doc.rating}
                        </span>
                        <span>({doc.reviewCount})</span>
                      </div>
                    </div>
                  </div>

                  {/* Specialty Pill */}
                  <div className="mb-2">
                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded-md bg-blue-600 text-white">
                      {doc.specialty}
                    </span>
                  </div>

                  {/* Experience */}
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    {doc.totalExperience}
                  </div>
                </div>

                {/* Bottom Fee & Action */}
                <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-zinc-100 dark:border-zinc-800 text-xs">
                  <div className="font-extrabold text-zinc-900 dark:text-zinc-100">
                    ৳ {doc.fee}
                  </div>
                  <Link
                    href={`/doctors/${doc.id}`}
                    className="text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center text-[11px]"
                  >
                    <span>See Doctor</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Instant Consultation Offers (24/7) */}
        <section className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                Your Offers - Instant Consultation (24/7)
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Quality care one tap away
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                aria-label="Previous Offer"
                className="w-7 h-7 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-600 hover:bg-zinc-100"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="Next Offer"
                className="w-7 h-7 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-600 hover:bg-zinc-100"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Offers Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {instantOffers.map((offer) => (
              <div
                key={offer.id}
                className={`relative rounded-xl border p-3.5 flex flex-col justify-between overflow-hidden transition-all hover:shadow-md ${offer.bgColor} ${offer.borderColor}`}
              >
                <div>
                  <h4
                    className={`text-xs font-bold leading-snug ${offer.textColor}`}
                  >
                    {offer.title}
                  </h4>

                  {offer.hours && (
                    <div className="flex items-center gap-1 text-[10px] text-zinc-300 mt-1">
                      <Clock className="w-3 h-3" />
                      <span>{offer.hours}</span>
                    </div>
                  )}

                  {offer.fee && (
                    <div className="mt-2 text-lg font-black text-blue-600 dark:text-blue-400">
                      ৳ {offer.fee}
                    </div>
                  )}
                </div>

                <div className="flex items-end justify-between mt-3">
                  {offer.isOffline ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-zinc-700 text-zinc-300">
                      Offline
                    </span>
                  ) : (
                    <Link
                      href={
                        offer.id === "offer-2"
                          ? "/doctors/doc-2"
                          : offer.id === "offer-3"
                            ? "/doctors/doc-5"
                            : offer.id === "offer-4"
                              ? "/doctors/doc-2"
                              : "/doctors/doc-1"
                      }
                      className="inline-block px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] rounded-md transition-colors"
                    >
                      See Doctor &gt;
                    </Link>
                  )}

                  {/* Doctor Thumbnail */}
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/40 shadow-xs">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Bottom Diagnostic / Pathology Banner (DocTime Style) */}
        <section className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#075985] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          {/* Left Bengali Badge & Headline */}
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-xs">
              <span>Home Diagnostic Service</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
              সর্বোচ্চ <span className="text-cyan-200">৩০% কম খরচে</span> প্যাথলজি
              টেস্টের <br />
              স্যাম্পল দিন ঘরে বসেই
            </h3>
            <p className="text-xs sm:text-sm text-cyan-100/90 leading-relaxed">
              Certified phlebotomists will collect blood & clinical samples from
              your doorstep with 100% sterile accuracy.
            </p>
            <div className="pt-1 flex flex-wrap gap-3">
              <Link
                href="/register"
                className="px-5 py-2.5 bg-white text-blue-900 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:bg-zinc-100 transition-all active:scale-95"
              >
                Book Home Sample
              </Link>
              <Link
                href="/about-us"
                className="px-5 py-2.5 bg-cyan-900/60 hover:bg-cyan-900 text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-cyan-400/40 transition-all"
              >
                View 400+ Tests
              </Link>
            </div>
          </div>

          {/* Right Lab Technician Image */}
          <div className="relative w-full md:w-80 h-48 sm:h-56 rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl">
            <Image
              src="/images/specialists/lab-sample.jpg"
              alt="Pathology Home Sample Collection"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
              <span className="text-xs font-bold text-white">
                100% Sterile & Digital Reports
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
