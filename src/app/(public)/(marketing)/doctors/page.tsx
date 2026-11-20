"use client";

import {
  Activity,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Phone,
  Search,
  Sparkles,
  Star,
  Stethoscope,
  Video,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { doctorsData } from "@/data/doctors-data";

// Top Promotional Banner Slider Data (Matching Screenshot 5)
const promoBanners = [
  {
    id: "banner-1",
    tag: "NUTRITION & DIGESTION",
    titleBengali: "হজমের অস্বস্তি ছাড়াই",
    highlightBengali: "দুধের নিউট্রিশন পেতে বেছে নিন",
    subtext:
      "বিশেষজ্ঞ ডাক্তারদের অনুমোদিত ফর্মুলায় প্রতিদিনের হজম স্বাস্থ্য ও পুষ্টি নিশ্চিত করুন",
    badge: "LACTO REDUCED",
    badgeSub: "Filled Milk Powder",
    bgGradient: "from-amber-50 via-sky-50/40 to-blue-50/60",
    borderClass: "border-sky-100",
    image: "/images/specialists/milk-banner.jpg",
    ctaText: "পরামর্শ নিন",
    ctaLink: "/doctors/doc-8",
  },
  {
    id: "banner-2",
    tag: "INSTANT 24/7 CONSULTATION",
    titleBengali: "মাত্র ১০ মিনিটে সরাসরি",
    highlightBengali: "BMDC সার্টিফাইড ডাক্তারের পরামর্শ",
    subtext:
      "অনলাইন ভিডিও কলে অভিজ্ঞ বিশেষজ্ঞ চিকিৎসকের প্রেসক্রিপশন পান মুহূর্তের মধ্যে",
    badge: "24/7 ACTIVE",
    badgeSub: "Instant Telemedicine",
    bgGradient: "from-blue-50 via-indigo-50/40 to-cyan-50/60",
    borderClass: "border-blue-100",
    image: "/images/hero/slide-emergency.jpg",
    ctaText: "ডাক্তার খুঁজুন",
    ctaLink: "#popular-specialists",
  },
  {
    id: "banner-3",
    tag: "HOME DIAGNOSTIC CARE",
    titleBengali: "সর্বোচ্চ ৩০% কম খরচে",
    highlightBengali: "প্যাথলজি টেস্টের স্যাম্পল দিন ঘরে বসেই",
    subtext:
      "প্রশিক্ষিত মেডিকেল ল্যাব টেকনিশিয়ান আপনার বাড়ি থেকেই দ্রুত রক্ত ও ডায়াগনস্টিক স্যাম্পল সংগ্রহ করবে",
    badge: "30% OFF",
    badgeSub: "Home Sample Triage",
    bgGradient: "from-sky-50 via-teal-50/40 to-blue-50/60",
    borderClass: "border-sky-100",
    image: "/images/specialists/lab-sample.jpg",
    ctaText: "টেস্ট বুক করুন",
    ctaLink: "#lab-diagnostics",
  },
];

// Instant Consultation Offers (Matching Screenshot 5)
const instantOffers = [
  {
    id: "offer-mbbs",
    title: "Experienced MBBS Doctor",
    price: 149,
    originalPrice: null,
    doctorId: "doc-7",
    colorScheme: "blue",
    badge: "Primary Care",
    image: "/images/specialists/doc-7.jpg",
    isDark: false,
    availability: "Online Now",
  },
  {
    id: "offer-dengue",
    title: "Treatment For Dengue",
    price: 220,
    originalPrice: 280,
    doctorId: "doc-9",
    colorScheme: "sky",
    badge: "Fever Care",
    image: "/images/specialists/doc-9.jpg",
    isDark: false,
    availability: "Available Today",
  },
  {
    id: "offer-child",
    title: "Experienced Child Doctor",
    price: 249,
    originalPrice: null,
    doctorId: "doc-2",
    colorScheme: "cyan",
    badge: "Pediatrics",
    image: "/images/specialists/doc-child.jpg",
    isDark: false,
    availability: "Online Now",
  },
  {
    id: "offer-gyne",
    title: "Experienced Female Gyne Doctor",
    price: 249,
    originalPrice: null,
    doctorId: "doc-6",
    colorScheme: "rose",
    badge: "Women Health",
    image: "/images/specialists/doc-6.jpg",
    isDark: false,
    availability: "Available Now",
  },
  {
    id: "offer-skin",
    title: "Skin Disease Specialist",
    price: 399,
    originalPrice: null,
    doctorId: "doc-1",
    colorScheme: "slate",
    badge: "Dermatology",
    image: "/images/specialists/doc-1.jpg",
    isDark: true,
    timing: "Everyday 8 am to 11:59 pm",
    availability: "Online",
  },
  {
    id: "offer-psychiatry",
    title: "Sex & Mental Health Specialist",
    price: 399,
    originalPrice: null,
    doctorId: "doc-4",
    colorScheme: "slate",
    badge: "Psychiatry",
    image: "/images/specialists/doc-4.jpg",
    isDark: true,
    timing: "Everyday 8 am to 11:59 pm",
    availability: "Online",
  },
];

// Department filter chips
const departments = [
  "All",
  "Child Specialist",
  "Dermatologist",
  "Cardiologist",
  "Psychiatrist",
  "Orthopedist",
  "Gastroenterologist",
  "General Medicine",
];

export default function DoctorsConsultationPage() {
  const searchInputId = useId();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  const specialistsScrollRef = useRef<HTMLDivElement>(null);
  const offersScrollRef = useRef<HTMLDivElement>(null);

  // Auto-advance banner every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promoBanners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollSpecialists = (direction: "left" | "right") => {
    if (specialistsScrollRef.current) {
      const scrollAmount = 320;
      specialistsScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollOffers = (direction: "left" | "right") => {
    if (offersScrollRef.current) {
      const scrollAmount = 300;
      offersScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Filtered doctors
  const filteredDoctors = doctorsData.filter((doc) => {
    const matchesSearch =
      searchQuery === "" ||
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.doctorCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.degrees.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDept =
      selectedDept === "All" ||
      doc.specialty.toLowerCase().includes(selectedDept.toLowerCase()) ||
      (selectedDept === "Child Specialist" &&
        doc.specialty.toLowerCase().includes("pediatrics")) ||
      (selectedDept === "General Medicine" &&
        doc.specialty.toLowerCase().includes("internal"));

    return matchesSearch && matchesDept;
  });

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 pb-20">
      {/* 1. Header Search Bar (DocTime Inspired Top Quick Search) */}
      <section className="bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 shadow-xs sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-col md:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full md:flex-1">
              <label htmlFor={searchInputId} className="sr-only">
                Search doctor by name, specialty, code, or department
              </label>
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                id={searchInputId}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by doctor name/code or department..."
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-slate-900 dark:text-white"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Dept Filter Pills */}
            <div className="w-full md:w-auto flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs">
              {departments.map((dept) => {
                const isSelected = selectedDept === dept;
                return (
                  <button
                    key={dept}
                    type="button"
                    onClick={() => setSelectedDept(dept)}
                    className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
                      isSelected
                        ? "bg-blue-600 text-white shadow-xs"
                        : "bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {dept}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 space-y-8">
        {/* 2. Top Promotional Ad Banner Carousel (DocTime DANO / Diagnostic Banner) */}
        <section aria-label="Featured Health Campaigns">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
            {/* Slide Items */}
            <div className="relative h-44 sm:h-52 md:h-60 w-full overflow-hidden">
              {promoBanners.map((banner, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={banner.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isActive
                        ? "opacity-100 z-10 pointer-events-auto"
                        : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-r ${banner.bgGradient} dark:from-zinc-900 dark:via-zinc-850 dark:to-zinc-900 flex items-center justify-between p-4 sm:p-8 relative`}
                    >
                      {/* Left: Bengali Headline & Copy */}
                      <div className="max-w-xl z-10 space-y-2 sm:space-y-3">
                        <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-100/70 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full">
                          <Sparkles className="w-3 h-3" />
                          {banner.tag}
                        </span>
                        <div className="space-y-0.5">
                          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                            {banner.titleBengali}
                          </h2>
                          <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-blue-600 dark:text-blue-400 leading-tight">
                            {banner.highlightBengali}
                          </p>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 line-clamp-2 max-w-md hidden sm:block">
                          {banner.subtext}
                        </p>
                        <div className="pt-1">
                          <Link
                            href={banner.ctaLink}
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-xs transition-colors"
                          >
                            <span>{banner.ctaText}</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>

                      {/* Right: Graphic / Product Mockup */}
                      <div className="hidden md:flex items-center justify-center relative w-72 h-48 flex-shrink-0">
                        <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/60 dark:border-zinc-700 shadow-sm">
                          <Image
                            src={banner.image}
                            alt={banner.highlightBengali}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 300px"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slider Arrow Controls */}
            <button
              type="button"
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? promoBanners.length - 1 : prev - 1,
                )
              }
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/80 dark:bg-zinc-800/80 hover:bg-white dark:hover:bg-zinc-800 shadow-xs flex items-center justify-center text-slate-700 dark:text-zinc-200 transition-transform active:scale-95"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % promoBanners.length)
              }
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/80 dark:bg-zinc-800/80 hover:bg-white dark:hover:bg-zinc-800 shadow-xs flex items-center justify-center text-slate-700 dark:text-zinc-200 transition-transform active:scale-95"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Slide Pagination Dots */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
              {promoBanners.map((banner, index) => (
                <button
                  key={banner.id}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-6 bg-blue-600"
                      : "w-2 bg-slate-300 dark:bg-zinc-600 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 3. "Popular Specialists" Section (DocTime Horizontal Carousel Layout) */}
        <section
          aria-labelledby="popular-specialists-heading"
          className="space-y-3.5"
        >
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2
                id="popular-specialists-heading"
                className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white"
              >
                Popular Specialists
              </h2>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                Top rated BMDC certified medical consultants available right now
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/specialties"
                className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 inline-flex items-center gap-1 group mr-2"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <button
                type="button"
                onClick={() => scrollSpecialists("left")}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-700 flex items-center justify-center text-slate-600 dark:text-zinc-300 shadow-xs"
                aria-label="Scroll left specialists"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollSpecialists("right")}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-700 flex items-center justify-center text-slate-600 dark:text-zinc-300 shadow-xs"
                aria-label="Scroll right specialists"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Doctors Horizontal Cards Container */}
          <div
            ref={specialistsScrollRef}
            className="flex items-stretch gap-3.5 overflow-x-auto pb-3 pt-1 scrollbar-none scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {doctorsData.map((doc) => {
              return (
                <div
                  key={doc.id}
                  className="flex-none w-[270px] sm:w-[290px] bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 rounded-xl p-3.5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  {/* Top Part: Image + Info */}
                  <div>
                    <div className="flex items-start gap-3">
                      {/* Avatar with Online Status */}
                      <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-lg overflow-hidden bg-slate-100 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-700 flex-shrink-0">
                        <Image
                          src={doc.image}
                          alt={doc.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="80px"
                        />
                        {/* Green Pulse Online Dot */}
                        <span
                          className="absolute top-1 right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white dark:ring-zinc-900"
                          title="Online & Ready for consultation"
                        />
                      </div>

                      {/* Doctor Name, Rating, Badge */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate group-hover:text-blue-600 transition-colors">
                          {doc.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mt-0.5 text-xs text-slate-600 dark:text-zinc-300">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 flex-shrink-0" />
                          <span className="font-semibold text-slate-800 dark:text-zinc-100">
                            {doc.rating}
                          </span>
                          <span className="text-slate-400 text-[11px]">
                            ({doc.reviewCount})
                          </span>
                        </div>

                        {/* Specialty Badge (DocTime Blue Ribbon Pill) */}
                        <div className="mt-1.5">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-sm bg-blue-600 text-white font-medium text-[10px] tracking-wide shadow-xs">
                            {doc.specialty}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Workplace / BMDC Number snippet */}
                    <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-zinc-800/80 text-[11px] text-slate-500 dark:text-zinc-400 flex items-center justify-between">
                      <span className="truncate">{doc.workplace}</span>
                      <span className="font-mono text-[10px] text-slate-400">
                        {doc.bmdcNumber}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Row: Experience, Fee & "See Doctor >" Action */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-semibold text-slate-700 dark:text-zinc-300">
                        {doc.totalExperience}
                      </div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        ৳ {doc.fee}
                      </div>
                    </div>

                    <Link
                      href={`/doctors/${doc.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 group-hover:translate-x-0.5 transition-all"
                    >
                      <span>See Doctor</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. "Your Offers - Instant Consultation (24/7)" Section (DocTime Pastel Cards) */}
        <section
          aria-labelledby="instant-offers-heading"
          className="space-y-3.5"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h2
                  id="instant-offers-heading"
                  className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white"
                >
                  Your Offers – Instant Consultation (24/7)
                </h2>
                <span className="inline-flex items-center gap-1 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold px-2 py-0.5 rounded-full">
                  <Zap className="w-3 h-3 fill-emerald-500" />
                  Live 24/7
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                Quality care one tap away with special subsidized consultation
                fees
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollOffers("left")}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-700 flex items-center justify-center text-slate-600 dark:text-zinc-300 shadow-xs"
                aria-label="Scroll left offers"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollOffers("right")}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-700 flex items-center justify-center text-slate-600 dark:text-zinc-300 shadow-xs"
                aria-label="Scroll right offers"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pastel Offers Row */}
          <div
            ref={offersScrollRef}
            className="flex items-stretch gap-3.5 overflow-x-auto pb-3 pt-1 scrollbar-none scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {instantOffers.map((offer) => {
              if (offer.isDark) {
                // Dark slate night clinic card (as seen in screenshot 5)
                return (
                  <div
                    key={offer.id}
                    className="flex-none w-[240px] sm:w-[260px] rounded-xl p-4 bg-slate-900 dark:bg-zinc-900 border border-slate-800 text-white shadow-xs flex flex-col justify-between relative overflow-hidden"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                        <span className="font-medium text-slate-300">
                          {offer.badge}
                        </span>
                        <span className="bg-slate-800 px-2 py-0.5 rounded text-[10px] text-emerald-400 font-semibold">
                          {offer.availability}
                        </span>
                      </div>

                      <h3 className="font-bold text-sm text-white line-clamp-1">
                        {offer.title}
                      </h3>

                      {offer.timing && (
                        <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{offer.timing}</span>
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-end justify-between">
                      <div>
                        <div className="text-xl font-extrabold text-white">
                          ৳{offer.price}
                        </div>
                      </div>

                      <Link
                        href={`/doctors/${offer.doctorId}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                      >
                        <span>See Doctor</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                );
              }

              // Pastel colored light card (Blue, Sky, Cyan, Rose)
              const cardBg =
                offer.colorScheme === "blue"
                  ? "bg-blue-50/90 border-blue-200/80"
                  : offer.colorScheme === "sky"
                    ? "bg-sky-50/90 border-sky-200/80"
                    : offer.colorScheme === "cyan"
                      ? "bg-cyan-50/90 border-cyan-200/80"
                      : "bg-rose-50/90 border-rose-200/80";

              const priceColor =
                offer.colorScheme === "blue"
                  ? "text-blue-600"
                  : offer.colorScheme === "sky"
                    ? "text-sky-600"
                    : offer.colorScheme === "cyan"
                      ? "text-cyan-700"
                      : "text-rose-600";

              return (
                <div
                  key={offer.id}
                  className={`flex-none w-[240px] sm:w-[260px] rounded-xl p-4 border ${cardBg} shadow-xs flex flex-col justify-between relative overflow-hidden`}
                >
                  {/* Content */}
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {offer.badge}
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 mt-0.5 line-clamp-1">
                      {offer.title}
                    </h3>

                    {/* Price */}
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className={`text-2xl font-black ${priceColor}`}>
                        ৳{offer.price}
                      </span>
                      {offer.originalPrice && (
                        <span className="text-xs text-slate-400 line-through">
                          ৳{offer.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Doctor Thumbnail & CTA */}
                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-xs">
                      <Image
                        src={offer.image}
                        alt={offer.title}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>

                    {offer.colorScheme === "blue" ? (
                      <Link
                        href={`/doctors/${offer.doctorId}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-3 py-1.5 rounded-lg shadow-xs transition-colors inline-flex items-center gap-1"
                      >
                        <span>See Doctor</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <Link
                        href={`/doctors/${offer.doctorId}`}
                        className={`text-xs font-bold ${priceColor} hover:underline inline-flex items-center gap-0.5`}
                      >
                        <span>See Doctor</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Diagnostic Pathology Home Sample Collection Banner (Bottom Banner in Screenshot 5) */}
        <section id="lab-diagnostics" aria-label="Pathology and Lab Testing">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white p-5 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 max-w-xl">
                <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                  <Activity className="w-3.5 h-3.5" />
                  HOME SAMPLE COLLECTION
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  সর্বোচ্চ ৩০% কম খরচে প্যাথলজি টেস্টের
                  <br />
                  <span className="text-amber-300">স্যাম্পল দিন ঘরে বসেই</span>
                </h2>
                <p className="text-xs sm:text-sm text-sky-100">
                  দক্ষ ও প্রশিক্ষিত ল্যাব কর্মী আপনার বাসায় এসে রক্তের নমুনা সংগ্রহ করবে।
                  রিপোর্ট পাবেন সরাসরি অনলাইনে এবং অ্যাপে।
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/specialties"
                    className="bg-white hover:bg-slate-100 text-blue-700 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>বুক করুন ডায়াগনস্টিক টেস্ট</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+8801700000000"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/90 hover:text-white px-3 py-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>হটলাইন: 01700-000000</span>
                  </a>
                </div>
              </div>

              {/* Lab Visual */}
              <div className="relative w-64 sm:w-80 h-44 rounded-xl overflow-hidden border-2 border-white/20 shadow-md flex-shrink-0">
                <Image
                  src="/images/specialists/lab-sample.jpg"
                  alt="Pathology Sample Collection"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. All Doctors Directory with Filtered List */}
        <section
          aria-labelledby="all-doctors-heading"
          className="space-y-4 pt-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-zinc-800 pb-3">
            <div>
              <h2
                id="all-doctors-heading"
                className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white"
              >
                All Available Doctors ({filteredDoctors.length})
              </h2>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                Book immediate video appointments or schedule physical hospital
                visits
              </p>
            </div>
            {searchQuery && (
              <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                Filtering by: &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </div>

          {filteredDoctors.length === 0 ? (
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-8 text-center space-y-3">
              <Stethoscope className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="font-bold text-slate-800 dark:text-zinc-200">
                No doctors found matching your query
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try searching with doctor name, specialty, or clear active
                filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDept("All");
                }}
                className="text-xs font-semibold text-blue-600 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 rounded-2xl p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start gap-3.5">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-100 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-700 flex-shrink-0">
                        <Image
                          src={doc.image}
                          alt={doc.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                          sizes="64px"
                        />
                        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white dark:ring-zinc-900" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/doctors/${doc.id}`}
                          className="font-bold text-sm text-slate-900 dark:text-white truncate block group-hover:text-blue-600 transition-colors"
                        >
                          {doc.name}
                        </Link>
                        <p className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                          {doc.degrees}
                        </p>

                        <div className="mt-1.5 flex items-center gap-2">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-sm bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold text-[10px] border border-blue-200 dark:border-blue-800">
                            {doc.specialty}
                          </span>
                          <div className="flex items-center gap-1 text-[11px] text-slate-600 dark:text-zinc-300">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                            <span className="font-semibold">{doc.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-zinc-800/80 text-xs text-slate-600 dark:text-zinc-400 space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span>Experience:</span>
                        <span className="font-semibold text-slate-800 dark:text-zinc-200">
                          {doc.totalExperience}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span>Consultation Fee:</span>
                        <span className="font-bold text-slate-900 dark:text-white">
                          ৳ {doc.fee} (inc. VAT)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2">
                    <Link
                      href={`/doctors/${doc.id}`}
                      className="flex-1 py-2 text-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      Book Appointment
                    </Link>
                    <Link
                      href={`/doctors/${doc.id}`}
                      className="px-3 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-200 text-xs font-semibold transition-colors flex items-center gap-1"
                      title="Instant Video Consultation"
                    >
                      <Video className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>Instant</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
