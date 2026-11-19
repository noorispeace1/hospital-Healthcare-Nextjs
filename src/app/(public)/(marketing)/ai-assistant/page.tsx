"use client";

import {
  AlertCircle,
  ArrowRight,
  Bot,
  ChevronRight,
  Clock,
  HeartPulse,
  Send,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  Trash2,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { doctorsData } from "@/data/doctors-data";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  triage?: {
    urgency: "Normal" | "Urgent" | "High Priority";
    department: string;
    clinicalNote: string;
    recommendedDoctor: {
      id: string;
      name: string;
      specialty: string;
      fee: number;
      image: string;
    };
  };
}

const initialMessages: ChatMessage[] = [
  {
    id: "init-1",
    sender: "bot",
    text: "Hello! I am SyncAI Medical Assistant, your 24/7 clinical triage companion. Please describe your symptoms or medical questions in English or বাংলা. I will assess urgency, identify the right specialty, and recommend verified doctors.",
    timestamp: "Just now",
  },
];

const sampleQuestions = [
  {
    label: "Chest tightness & breathlessness",
    query:
      "I have sudden chest tightness and shortness of breath when walking.",
  },
  {
    label: "Baby 102°F fever & cough",
    query:
      "My 3-year-old child has 102°F fever with persistent cough for 2 days.",
  },
  {
    label: "Severe one-sided headache",
    query:
      "Severe throbbing migraine on right side of head with sensitivity to light.",
  },
  {
    label: "Red itchy skin rash",
    query:
      "I have red itchy rash spreading over my arms and neck after medication.",
  },
];

export default function AiAssistantPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll to bottom on chat change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText("");
    setIsTyping(true);

    // AI Medical Triage Simulation
    setTimeout(() => {
      const lower = query.toLowerCase();
      let triageData: ChatMessage["triage"];
      let replyText = "";

      if (
        lower.includes("chest") ||
        lower.includes("heart") ||
        lower.includes("বুকে ব্যথা") ||
        lower.includes("breath")
      ) {
        const doc =
          doctorsData.find((d) => d.specialty.includes("Cardio")) ||
          doctorsData[2];
        triageData = {
          urgency: "High Priority",
          department: "Cardiology",
          clinicalNote:
            "Symptoms of chest tightness with shortness of breath warrant prompt cardiovascular evaluation. We recommend an immediate ECG, vitals check, and cardiology consultation.",
          recommendedDoctor: {
            id: doc.id,
            name: doc.name,
            specialty: doc.specialty,
            fee: doc.fee,
            image: doc.image,
          },
        };
        replyText =
          "Based on your description, this could be associated with cardiovascular strain. Please review the clinical triage below:";
      } else if (
        lower.includes("child") ||
        lower.includes("baby") ||
        lower.includes("বাচ্চা") ||
        lower.includes("fever")
      ) {
        const doc =
          doctorsData.find((d) => d.specialty.includes("Child")) ||
          doctorsData[4];
        triageData = {
          urgency: "Urgent",
          department: "Pediatrics & Child Care",
          clinicalNote:
            "High temperature in young children requires pediatric assessment to manage fever safely and rule out respiratory infection or viral bronchospasm.",
          recommendedDoctor: {
            id: doc.id,
            name: doc.name,
            specialty: doc.specialty,
            fee: doc.fee,
            image: doc.image,
          },
        };
        replyText =
          "I have evaluated your child's symptoms. Here is the recommended pediatric care plan:";
      } else if (
        lower.includes("skin") ||
        lower.includes("rash") ||
        lower.includes("ত্বক") ||
        lower.includes("itch")
      ) {
        const doc =
          doctorsData.find((d) => d.specialty.includes("Dermatol")) ||
          doctorsData[0];
        triageData = {
          urgency: "Normal",
          department: "Dermatology",
          clinicalNote:
            "Acute skin eruption and pruritus may indicate allergic dermatitis or drug reaction. Avoid scratching, keep skin cool, and consult our dermatologist.",
          recommendedDoctor: {
            id: doc.id,
            name: doc.name,
            specialty: doc.specialty,
            fee: doc.fee,
            image: doc.image,
          },
        };
        replyText =
          "Your skin condition has been evaluated. Below is your clinical assessment and recommended specialist:";
      } else {
        const doc = doctorsData[0];
        triageData = {
          urgency: "Normal",
          department: "General Medicine & Triage",
          clinicalNote:
            "Our AI triage engine recommends an initial consultation with a certified physician for physical exam, vital signs check, and targeted lab orders.",
          recommendedDoctor: {
            id: doc.id,
            name: doc.name,
            specialty: doc.specialty,
            fee: doc.fee,
            image: doc.image,
          },
        };
        replyText =
          "Thank you for sharing your symptoms. Here is the clinical summary and matching doctor:";
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        triage: triageData,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 900);
  };

  const handleClearChat = () => {
    setMessages(initialMessages);
  };

  return (
    <div className="w-full min-h-[calc(100vh-4.5rem)] bg-[#f8fafc] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* 1. Left Sidebar: AI System Overview & Quick Actions (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* AI Assistant Identity Card */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                    <Bot className="w-7 h-7" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-900" />
                </div>
                <div>
                  <h1 className="text-base sm:text-lg font-black text-zinc-900 dark:text-white flex items-center gap-1.5">
                    <span>SyncAI Assistant</span>
                    <Sparkles className="w-4 h-4 text-amber-500" />
                  </h1>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                    Clinical Triage Engine v2.4
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    Trained on verified medical guidelines
                  </p>
                </div>
              </div>

              {/* Status & Guardrails */}
              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 space-y-2 text-xs">
                <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-300">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" /> Availability
                  </span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    24/7 Instant
                  </span>
                </div>
                <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-300">
                  <span className="flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-zinc-400" />{" "}
                    Confidentiality
                  </span>
                  <span className="font-bold text-zinc-800 dark:text-zinc-200">
                    100% Private (HIPAA)
                  </span>
                </div>
              </div>

              {/* Emergency Alert Box */}
              <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-800 dark:text-amber-300 space-y-1">
                <div className="font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Medical Disclaimer</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  SyncAI provides symptom triage and specialty recommendations.
                  For life-threatening emergencies, call{" "}
                  <strong className="underline">+880 1700-000000</strong> or
                  visit the nearest ER immediately.
                </p>
              </div>
            </div>

            {/* Quick Sample Questions */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 shadow-xs space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                <HeartPulse className="w-3.5 h-3.5 text-blue-500" />
                <span>Quick Symptom Starters</span>
              </h2>
              <div className="space-y-2">
                {sampleQuestions.map((q) => (
                  <button
                    key={q.label}
                    type="button"
                    onClick={() => handleSendMessage(q.query)}
                    className="w-full text-left p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-zinc-100 dark:border-zinc-700/80 hover:border-blue-200 text-xs text-zinc-700 dark:text-zinc-300 font-medium transition-all group flex items-center justify-between"
                  >
                    <span>{q.label}</span>
                    <ArrowRight className="w-3 h-3 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Right Main Chat Console (8 Cols) */}
          <div className="lg:col-span-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col h-[700px] sm:h-[750px] overflow-hidden">
            {/* Chat Header */}
            <div className="p-4 px-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                    Clinical Consultation Session
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>AI Engine Ready</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleClearChat}
                className="text-xs text-zinc-400 hover:text-rose-500 transition-colors flex items-center gap-1 p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                title="Clear Conversation"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>

            {/* Chat Messages Stream */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
              {messages.map((msg) => {
                const isUser = msg.sender === "user";

                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold ${
                        isUser
                          ? "bg-zinc-800 dark:bg-zinc-700 text-white"
                          : "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      }`}
                    >
                      {isUser ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4" />
                      )}
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                        isUser
                          ? "bg-blue-600 text-white rounded-tr-none shadow-md"
                          : "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 rounded-tl-none border border-zinc-200/60 dark:border-zinc-700/60"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.text}</p>

                      {/* Triage Card rendered inside Bot message */}
                      {msg.triage && (
                        <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-700 space-y-3">
                          {/* Urgency Badge & Department */}
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="inline-flex items-center gap-1 font-bold text-xs text-blue-700 dark:text-blue-300">
                              <Stethoscope className="w-3.5 h-3.5" />
                              <span>{msg.triage.department}</span>
                            </span>

                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                msg.triage.urgency === "High Priority"
                                  ? "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
                                  : msg.triage.urgency === "Urgent"
                                    ? "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                                    : "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                              }`}
                            >
                              Priority: {msg.triage.urgency}
                            </span>
                          </div>

                          {/* Clinical Note */}
                          <p className="text-xs text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800">
                            {msg.triage.clinicalNote}
                          </p>

                          {/* Matching Doctor Quick Card */}
                          <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-900 border border-blue-200 dark:border-blue-900/60 shadow-xs">
                            <div className="flex items-center gap-2.5">
                              <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-zinc-200 dark:border-zinc-700">
                                <Image
                                  src={msg.triage.recommendedDoctor.image}
                                  alt={msg.triage.recommendedDoctor.name}
                                  fill
                                  className="object-cover"
                                  unoptimized
                                />
                              </div>
                              <div>
                                <div className="font-bold text-xs text-zinc-900 dark:text-white line-clamp-1">
                                  {msg.triage.recommendedDoctor.name}
                                </div>
                                <div className="text-[11px] text-blue-600 dark:text-blue-400">
                                  {msg.triage.recommendedDoctor.specialty}{" "}
                                  &bull; ৳ {msg.triage.recommendedDoctor.fee}
                                </div>
                              </div>
                            </div>

                            <Link
                              href={`/doctors/${msg.triage.recommendedDoctor.id}`}
                              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-1 shrink-0"
                            >
                              <span>Book Doctor</span>
                              <ChevronRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      )}

                      <div
                        className={`text-[10px] mt-1 text-right ${
                          isUser ? "text-blue-100" : "text-zinc-400"
                        }`}
                      >
                        {msg.timestamp}
                      </div>
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]" />
                    <span className="text-[11px] text-zinc-500 ml-1">
                      Analyzing symptoms...
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Bottom Input Area */}
            <div className="p-3 sm:p-4 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Describe your symptoms in English or বাংলা (e.g. আমার বুকে চাপ ও শ্বাসকষ্ট হচ্ছে)..."
                  className="flex-1 text-xs sm:text-sm bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-zinc-800 dark:text-zinc-200 placeholder-zinc-400"
                />

                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  aria-label="Send Message"
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl font-bold transition-all flex items-center gap-1.5 shrink-0 active:scale-95 cursor-pointer disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline text-xs">Consult</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
