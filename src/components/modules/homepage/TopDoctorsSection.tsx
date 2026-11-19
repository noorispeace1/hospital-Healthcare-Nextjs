"use client";

import Image from "next/image";
import Link from "next/link";

interface DepartmentCard {
  id: string;
  name: string;
  leadDoctor: string;
  image: string;
  link: string;
}

const departments: DepartmentCard[] = [
  {
    id: "surgery",
    name: "SURGERY",
    leadDoctor: "Dr. Avis Stankovic",
    image: "/images/departments/surgery.jpg",
    link: "/register",
  },
  {
    id: "microbiology",
    name: "MICROBIOLOGY",
    leadDoctor: "Dr. John Marios",
    image: "/images/departments/microbiology.jpg",
    link: "/register",
  },
  {
    id: "pathology",
    name: "PATHOLOGY",
    leadDoctor: "Dr. Marie Curie",
    image: "/images/departments/pathology.jpg",
    link: "/register",
  },
];

export default function TopDoctorsSection() {
  return (
    <section
      id="doctors"
      className="relative w-full bg-[#273a54] text-white py-20 sm:py-24 lg:py-28 overflow-hidden lg:[clip-path:polygon(0_36px,50%_0,100%_36px,100%_calc(100%-36px),50%_100%,0_calc(100%-36px))]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide text-white leading-tight font-sans">
            MEDICAL DEPARTMENTS
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-light mt-1.5 tracking-wide">
            The Backbone of our Clinic
          </p>
        </div>

        {/* 4-Column Layout (3 Department Cards + 1 Info Block) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Cards 1, 2, 3: Medical Department Doctor Cards */}
          {departments.map((dept) => (
            <Link
              key={dept.id}
              href={dept.link}
              className="group bg-white text-zinc-900 shadow-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 rounded-none"
            >
              {/* Department Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-100">
                <Image
                  src={dept.image}
                  alt={`${dept.name} department`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  unoptimized
                />
              </div>

              {/* Department & Doctor Info */}
              <div className="p-5 text-center flex flex-col items-center justify-center flex-grow">
                <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-zinc-900 group-hover:text-[#2699fb] transition-colors">
                  {dept.name}
                </h3>
                <p className="text-xs sm:text-[13px] text-zinc-500 font-normal mt-1">
                  {dept.leadDoctor}
                </p>

                {/* Sky-Blue Accent Tab */}
                <div className="w-12 h-1 bg-[#2699fb] mt-3 group-hover:w-20 transition-all duration-300" />
              </div>
            </Link>
          ))}

          {/* Column 4: Modern Equipment Info & CTA Button */}
          <div className="flex flex-col justify-between p-2 lg:pl-2">
            <div>
              {/* Header with Horizontal Divider Line */}
              <div className="flex items-center gap-3">
                <h3 className="text-sm sm:text-base font-black uppercase tracking-wider text-white whitespace-nowrap">
                  MODERN EQUIPMENT
                </h3>
                <div className="flex-1 h-px bg-zinc-400/40" />
              </div>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-[13px] text-zinc-300/90 font-light leading-relaxed mt-4">
                Personalized patient care is what sets Medicus Medical Center
                apart. When you visit one of our campus locations you can expect
                to receive world-class care. Expert physician specialists and
                caring clinical staff provide you with an exceptional healthcare
                experience.
              </p>
            </div>

            {/* CTA Button with Sitemap/Organization Icon matching screenshot */}
            <div className="mt-6 sm:mt-8">
              <Link
                href="/about-us"
                className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-4 bg-[#2699fb] hover:bg-[#1588e6] active:bg-[#0b77cf] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-sky-500/20 active:scale-98"
              >
                {/* Organization Chart Icon (1 box top, 3 boxes bottom) */}
                <svg
                  className="w-4 h-4 text-white shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect
                    x="9"
                    y="3"
                    width="6"
                    height="4"
                    rx="1"
                    fill="currentColor"
                  />
                  <path d="M12 7v5M5 12h14M5 12v4M12 12v4M19 12v4" />
                  <rect
                    x="2"
                    y="16"
                    width="6"
                    height="4"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="9"
                    y="16"
                    width="6"
                    height="4"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="16"
                    y="16"
                    width="6"
                    height="4"
                    rx="1"
                    fill="currentColor"
                  />
                </svg>
                <span>CHECKOUT ALL DEPARTMENTS</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
