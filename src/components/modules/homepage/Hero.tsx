"use client";

import {
  Activity,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";

interface SlideData {
  id: number;
  categoryTag: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  align: "left" | "right";
  cardTheme: "dark" | "light";
  accentColor: string;
  buttonBg: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    categoryTag: "Pediatric Care",
    title: "HEALTHCARE FOR KIDS",
    subtitle: "A holistic approach to pediatric care!",
    description:
      "The health of your child comes down to many little things. Our dedicated pediatric specialists provide gentle, comprehensive care from infancy to adolescence.",
    buttonText: "CHECK OUT SERVICES",
    buttonLink: "#specialties",
    image: "/images/hero/slide-pediatric-2.jpg",
    align: "left",
    cardTheme: "light",
    accentColor: "#ec407a",
    buttonBg: "bg-[#ec407a] hover:bg-[#d81b60]",
  },
  {
    id: 2,
    categoryTag: "Emergency & Trauma",
    title: "24/7 EMERGENCY CARE",
    subtitle: "Immediate attention when every second counts",
    description:
      "Our rapid response trauma center, certified acute emergency physicians, and fully equipped resuscitation suites stand ready round-the-clock for critical healthcare needs.",
    buttonText: "EMERGENCY SERVICES",
    buttonLink: "/register",
    image: "/images/hero/slide-emergency.jpg",
    align: "right",
    cardTheme: "dark",
    accentColor: "#f43f5e",
    buttonBg: "bg-[#dc2626] hover:bg-[#b91c1c]",
  },
  {
    id: 3,
    categoryTag: "Advanced Diagnostics",
    title: "MODERN DIAGNOSTICS",
    subtitle: "Precision testing with AI-assisted accuracy",
    description:
      "Experience next-generation clinical testing: high-tesla MRI, 128-slice CT scans, automated molecular biology, and digital pathology with same-day secure results.",
    buttonText: "EXPLORE LAB TESTS",
    buttonLink: "#how-it-works",
    image: "/images/hero/slide-diagnostics.jpg",
    align: "right",
    cardTheme: "dark",
    accentColor: "#0ea5e9",
    buttonBg: "bg-[#0284c7] hover:bg-[#0369a1]",
  },
];

const ribbonCards = [
  {
    id: "departments",
    title: "DEPARTMENTS",
    subtitle: "The Backbone of our Clinic",
    link: "#specialties",
    bgColor: "bg-[#008ce6] hover:bg-[#007fd4]",
    icon: Stethoscope,
  },
  {
    id: "services",
    title: "MEDICAL SERVICES",
    subtitle: "A list of all available",
    link: "#how-it-works",
    bgColor: "bg-[#009bf5] hover:bg-[#008de0]",
    icon: Activity,
  },
  {
    id: "find-doctor",
    title: "FIND A DOCTOR",
    subtitle: "All our staff by department",
    link: "#doctors",
    bgColor: "bg-[#007cd6] hover:bg-[#0070c2]",
    icon: UserCheck,
  },
  {
    id: "appointment",
    title: "REQUEST AN APPOINTMENT",
    subtitle: "Call us or fill in a form",
    link: "/register",
    bgColor: "bg-[#259cf5] hover:bg-[#1a8de4]",
    icon: CalendarCheck,
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideHeadingId = useId();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative w-full overflow-hidden select-none bg-zinc-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Hospital Featured Slides"
    >
      {/* 1. Main Slider Stage */}
      <div className="relative w-full h-[520px] sm:h-[580px] md:h-[640px] lg:h-[700px]">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          const isLeftAligned = slide.align === "left";
          const isLightCard = slide.cardTheme === "light";

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive
                  ? "opacity-100 z-10 pointer-events-auto"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-center transform scale-100 transition-transform duration-7000 ease-out"
                  sizes="100vw"
                  quality={85}
                  unoptimized
                />
                <div
                  className={`absolute inset-0 pointer-events-none ${
                    isLightCard
                      ? "bg-gradient-to-t from-black/50 via-black/15 to-transparent"
                      : "bg-gradient-to-t from-black/60 via-black/25 to-black/40"
                  }`}
                />
              </div>

              {/* Text Card Overlay */}
              <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-12 flex items-center">
                <div
                  className={`w-full max-w-md sm:max-w-lg lg:max-w-xl transition-all duration-700 delay-150 transform ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  } ${
                    isLeftAligned
                      ? "mr-auto ml-0 sm:ml-4 lg:ml-8"
                      : "ml-auto mr-0 sm:mr-4 lg:mr-8"
                  }`}
                >
                  <div
                    className={`p-6 sm:p-9 md:p-10 rounded-sm shadow-2xl ${
                      isLightCard
                        ? "bg-white/85 sm:bg-white/90 backdrop-blur-md text-zinc-900 border-l-4"
                        : "bg-black/65 sm:bg-black/75 backdrop-blur-md text-white border-l-4"
                    }`}
                    style={{ borderLeftColor: slide.accentColor }}
                  >
                    <span
                      className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2"
                      style={{
                        backgroundColor: `${slide.accentColor}25`,
                        color: slide.accentColor,
                      }}
                    >
                      {slide.categoryTag}
                    </span>

                    <h1
                      id={`${slideHeadingId}-${slide.id}`}
                      className={`text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight ${
                        isLightCard ? "text-zinc-900" : "text-white"
                      }`}
                    >
                      {slide.title}
                    </h1>

                    <p
                      className={`text-base sm:text-lg font-light mt-1 tracking-wide ${
                        isLightCard ? "text-zinc-700" : "text-zinc-200"
                      }`}
                    >
                      {slide.subtitle}
                    </p>

                    <div
                      className="w-16 h-1 my-3.5 rounded-full"
                      style={{ backgroundColor: slide.accentColor }}
                    />

                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isLightCard ? "text-zinc-700" : "text-zinc-300"
                      }`}
                    >
                      {slide.description}
                    </p>

                    <div className="mt-5 sm:mt-6">
                      <Link
                        href={slide.buttonLink}
                        className={`inline-flex items-center justify-center px-6 py-2.5 text-white font-bold text-xs uppercase tracking-widest rounded-xs transition-all duration-200 shadow-md active:scale-95 ${slide.buttonBg}`}
                      >
                        {slide.buttonText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* 2. Navigation Chevrons */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-25 w-8 sm:w-10 h-14 sm:h-16 flex items-center justify-center bg-black/40 hover:bg-black/75 text-white rounded-r-md transition-all backdrop-blur-xs cursor-pointer group shadow-lg"
        >
          <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-25 w-8 sm:w-10 h-14 sm:h-16 flex items-center justify-center bg-black/40 hover:bg-black/75 text-white rounded-l-md transition-all backdrop-blur-xs cursor-pointer group shadow-lg"
        >
          <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Slide Counter & Indicators */}
        <div className="absolute top-6 right-6 z-25 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
          {slides.map((slide, idx) => (
            <button
              type="button"
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? "w-6 bg-white shadow-sm"
                  : "w-2 bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
          <span className="text-[11px] font-mono text-white/80 ml-1.5 font-bold">
            0{currentSlide + 1} / 0{slides.length}
          </span>
        </div>
      </div>

      {/* 3. Bottom Folded Origami Ribbon Bar */}
      <div className="relative z-30 w-full max-w-6xl mx-auto px-4 -mt-16 sm:-mt-20 lg:-mt-24 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 shadow-2xl rounded-sm overflow-hidden">
          {ribbonCards.map((card, idx) => {
            const Icon = card.icon;
            const clipClass =
              idx % 2 === 0
                ? "lg:[clip-path:polygon(0_12px,100%_0,100%_100%,0_100%)]"
                : "lg:[clip-path:polygon(0_0,100%_12px,100%_100%,0_100%)]";

            return (
              <Link
                key={card.id}
                href={card.link}
                className={`group relative flex flex-col items-center justify-center text-center p-6 sm:p-7 md:p-8 text-white transition-all duration-300 ${card.bgColor} ${clipClass} pt-8 sm:pt-9 lg:pt-10 hover:-translate-y-1 shadow-inner`}
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-black/15 pointer-events-none" />

                <div className="mb-3.5 transform transition-transform duration-300 group-hover:scale-110 drop-shadow-md">
                  <Icon className="w-9 h-9 text-white" />
                </div>

                <h3 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wide text-white drop-shadow-xs">
                  {card.title}
                </h3>

                <p className="mt-1 text-xs text-white/90 font-light leading-snug max-w-[180px]">
                  {card.subtitle}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
