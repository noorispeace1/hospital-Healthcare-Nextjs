"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Bot,
  Send,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Stethoscope,
  ShieldAlert,
} from "lucide-react";

interface SymptomPreset {
  query: string;
  department: string;
  urgency: "Normal" | "Urgent" | "High Priority";
  reason: string;
  recommendedDoctor: string;
  doctorRole: string;
}

export default function AiAssistantSection() {
  const presets: SymptomPreset[] = [
    {
      query: "Chest heaviness and shortness of breath after light stairs",
      department: "Cardiology",
      urgency: "High Priority",
      reason:
        "Symptoms may suggest cardiovascular strain or angina. Prompt evaluation with ECG/Echocardiogram is advised.",
      recommendedDoctor: "Dr. Farhan Chowdhury",
      doctorRole: "Senior Interventional Cardiologist",
    },
    {
      query: "Child (4 yrs) has 102°F fever with persistent cough for 2 days",
      department: "Pediatrics",
      urgency: "Urgent",
      reason:
        "High temperature in young children requires pediatric assessment to rule out chest infection or viral bronchospasm.",
      recommendedDoctor: "Dr. Ananya Roy",
      doctorRole: "Lead Consultant Pediatrician",
    },
    {
      query: "Sharp knee pain and swelling after football workout",
      department: "Orthopedics",
      urgency: "Normal",
      reason:
        "Likely meniscal or ligament strain. Rest, ice compression, and orthopedic physical exam/MRI recommended.",
      recommendedDoctor: "Dr. Tariq Hasan",
      doctorRole: "Sports Medicine & Orthopedic Surgeon",
    },
    {
      query: "Severe one-sided throbbing headache with light sensitivity",
      department: "Neurology",
      urgency: "Normal",
      reason:
        "Classic presentation of acute migraine with photophobia. Neurological evaluation recommended.",
      recommendedDoctor: "Dr. Nabila Karim",
      doctorRole: "Consultant Neurologist",
    },
  ];

  const [activePreset, setActivePreset] = useState<SymptomPreset>(presets[0]);
  const [customInput, setCustomInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSimulate = (preset: SymptomPreset) => {
    setIsAnalyzing(true);
    setActivePreset(preset);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 400);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setIsAnalyzing(true);
    setTimeout(() => {
      setActivePreset({
        query: customInput,
        department: "General Medicine",
        urgency: "Normal",
        reason:
          "Based on your symptoms, our RAG-enhanced AI suggests starting with a General Physician for diagnosis and targeted lab referral.",
        recommendedDoctor: "Dr. Rafiqul Alam",
        doctorRole: "Internal Medicine Specialist",
      });
      setIsAnalyzing(false);
      setCustomInput("");
    }, 500);
  };

  return (
    <section
      id="ai-assistant"
      className="py-20 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-y border-zinc-200/80 dark:border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>AI-Powered Medical Triage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
              Describe Symptoms. Get Matched to the Right Specialist Instantly.
            </h2>

            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              Don&apos;t spend hours guessing which doctor you need. Sync
              Healthcare&apos;s intelligent AI assistant analyzes patient
              symptoms, checks urgency levels, and connects you directly with the
              top verified specialist with open appointments.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                    Clinical-Grade Triage Logic
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Designed to categorize urgency and suggest the appropriate
                    department within seconds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                    Instant Schedule Integration
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Direct one-click booking for in-person or live video
                    consultations.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 transition-all hover:scale-105 active:scale-95"
              >
                <Bot className="w-4 h-4" />
                <span>Launch Full AI Chatbot</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Right Interactive Chat Simulation */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 sm:p-7 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                      <span>SyncAI Triage Assistant</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-semibold">
                        Online
                      </span>
                    </h4>
                    <p className="text-xs text-zinc-500">
                      Powered by sync healthcare clinical vectors
                    </p>
                  </div>
                </div>

                <div className="text-xs text-zinc-400">Interactive Demo</div>
              </div>

              {/* Preset Clickable Symptoms */}
              <div className="py-4">
                <p className="text-xs font-semibold text-zinc-500 mb-2">
                  Select a symptom scenario or type below:
                </p>
                <div className="flex flex-wrap gap-2">
                  {presets.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSimulate(item)}
                      className={`text-xs px-3 py-1.5 rounded-xl border text-left transition-all ${
                        activePreset.query === item.query
                          ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                          : "bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:border-indigo-400"
                      }`}
                    >
                      {item.department}: {item.query.substring(0, 32)}...
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Dialog Bubble Preview */}
              <div className="space-y-4 my-2">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-md text-xs sm:text-sm shadow-sm">
                    {activePreset.query}
                  </div>
                </div>

                {/* AI Assistant Response */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 shrink-0 mt-1">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>

                  <div className="flex-1 bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 rounded-2xl rounded-tl-sm p-4 space-y-3">
                    {isAnalyzing ? (
                      <div className="flex items-center gap-2 text-xs text-zinc-500 py-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping" />
                        <span>Analyzing clinical symptoms and doctor schedules...</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                            Recommended Specialty: {activePreset.department}
                          </div>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              activePreset.urgency === "High Priority"
                                ? "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
                                : activePreset.urgency === "Urgent"
                                ? "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                                : "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                            }`}
                          >
                            {activePreset.urgency}
                          </span>
                        </div>

                        <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          {activePreset.reason}
                        </p>

                        {/* Matched Doctor Recommendation Card */}
                        <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 shrink-0 font-bold text-xs">
                              <Stethoscope className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-zinc-900 dark:text-white">
                                {activePreset.recommendedDoctor}
                              </div>
                              <div className="text-[11px] text-zinc-500">
                                {activePreset.doctorRole}
                              </div>
                            </div>
                          </div>

                          <Link
                            href="/register"
                            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold whitespace-nowrap shadow-xs transition-all"
                          >
                            Book Slot
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Custom input bar */}
              <form
                onSubmit={handleCustomSubmit}
                className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex gap-2"
              >
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Type any symptoms e.g., 'Skin rash with itching'..."
                  className="flex-1 px-4 py-2.5 text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-zinc-900 dark:text-zinc-100"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Check</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
