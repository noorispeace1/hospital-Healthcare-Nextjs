"use client";

import { Bot, ChevronRight, Maximize2, Send, Sparkles, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { doctorsData } from "@/data/doctors-data";

interface MiniMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  doctorRecommendation?: {
    id: string;
    name: string;
    specialty: string;
    fee: number;
    image: string;
  };
}

export default function FloatingChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnreadNotification, setHasUnreadNotification] = useState(true);
  const [messages, setMessages] = useState<MiniMessage[]>([
    {
      id: "init",
      sender: "bot",
      text: "Hi there! 👋 I am SyncAI Assistant. Tell me your symptoms or health questions, and I will recommend the right doctor instantly.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll to bottom on message change
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setHasUnreadNotification(false);
    }
  }, [messages.length, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: MiniMessage = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let doc = doctorsData[0];
      let reply =
        "Based on your symptoms, we suggest consulting our certified specialist:";

      if (
        lower.includes("chest") ||
        lower.includes("heart") ||
        lower.includes("breath")
      ) {
        doc =
          doctorsData.find((d) => d.specialty.includes("Cardio")) ||
          doctorsData[2];
        reply =
          "⚠️ Heart symptoms require immediate attention. Recommended Cardiologist:";
      } else if (
        lower.includes("child") ||
        lower.includes("baby") ||
        lower.includes("fever")
      ) {
        doc =
          doctorsData.find((d) => d.specialty.includes("Child")) ||
          doctorsData[4];
        reply = "👶 Pediatric care recommended for your child:";
      } else if (
        lower.includes("skin") ||
        lower.includes("rash") ||
        lower.includes("itch")
      ) {
        doc =
          doctorsData.find((d) => d.specialty.includes("Dermatol")) ||
          doctorsData[0];
        reply = "🩺 Dermatological evaluation recommended:";
      }

      const botMsg: MiniMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: reply,
        doctorRecommendation: {
          id: doc.id,
          name: doc.name,
          specialty: doc.specialty,
          fee: doc.fee,
          image: doc.image,
        },
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 select-none">
      {/* 1. Floating Chat Window (When Open) */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2.5rem)] sm:w-[380px] h-[520px] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="p-3.5 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-xs">
                <Bot className="w-4 h-4 text-white" />
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-white" />
              </div>
              <div>
                <h3 className="text-xs font-bold flex items-center gap-1">
                  <span>SyncAI Health Bot</span>
                  <Sparkles className="w-3 h-3 text-amber-300" />
                </h3>
                <p className="text-[10px] text-blue-100">
                  Online &bull; 24/7 Clinical Triage
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-white/80">
              {/* Expand to full page */}
              <Link
                href="/ai-assistant"
                title="Open Full Screen Interface"
                className="p-1.5 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </Link>
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
                className="p-1.5 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Bar */}
          <div className="p-2 px-3 bg-blue-50/70 dark:bg-zinc-800/60 border-b border-zinc-100 dark:border-zinc-800 flex gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
            <button
              type="button"
              onClick={() => handleSend("Fever & cough")}
              className="px-2 py-0.5 rounded-full bg-white dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 text-zinc-700 dark:text-zinc-200 whitespace-nowrap hover:border-blue-400"
            >
              🤒 Fever & cough
            </button>
            <button
              type="button"
              onClick={() => handleSend("Chest pain")}
              className="px-2 py-0.5 rounded-full bg-white dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 text-zinc-700 dark:text-zinc-200 whitespace-nowrap hover:border-blue-400"
            >
              ❤️ Chest pain
            </button>
            <button
              type="button"
              onClick={() => handleSend("Skin allergy")}
              className="px-2 py-0.5 rounded-full bg-white dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 text-zinc-700 dark:text-zinc-200 whitespace-nowrap hover:border-blue-400"
            >
              🌸 Skin allergy
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 text-xs">
            {messages.map((m) => {
              const isUser = m.sender === "user";

              return (
                <div
                  key={m.id}
                  className={`flex items-start gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                >
                  {!isUser && (
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 text-[10px]">
                      <Bot className="w-3 h-3" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] p-3 rounded-2xl leading-relaxed ${
                      isUser
                        ? "bg-blue-600 text-white rounded-tr-none shadow-xs"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-tl-none border border-zinc-200/60 dark:border-zinc-700/60"
                    }`}
                  >
                    <p>{m.text}</p>

                    {m.doctorRecommendation && (
                      <div className="mt-2.5 pt-2 border-t border-zinc-200 dark:border-zinc-700 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-zinc-200">
                            <Image
                              src={m.doctorRecommendation.image}
                              alt={m.doctorRecommendation.name}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-bold text-[11px] truncate text-zinc-900 dark:text-white">
                              {m.doctorRecommendation.name}
                            </div>
                            <div className="text-[10px] text-blue-600 dark:text-blue-400">
                              {m.doctorRecommendation.specialty} &bull; ৳{" "}
                              {m.doctorRecommendation.fee}
                            </div>
                          </div>
                        </div>

                        <Link
                          href={`/doctors/${m.doctorRecommendation.id}`}
                          onClick={() => setIsOpen(false)}
                          className="w-full py-1.5 px-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] rounded-lg text-center flex items-center justify-center gap-1 transition-colors"
                        >
                          <span>View Doctor Profile</span>
                          <ChevronRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-zinc-400 text-xs">
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <Bot className="w-2.5 h-2.5" />
                </div>
                <div className="p-2 px-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-blue-600 animate-bounce" />
                  <span className="w-1 h-1 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1 h-1 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Bottom Chat Input */}
          <div className="p-2.5 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-1.5"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask symptoms (e.g. fever, headache)..."
                className="flex-1 text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500 text-zinc-800 dark:text-zinc-200 placeholder-zinc-400"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send"
                className="p-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white rounded-xl transition-all cursor-pointer disabled:cursor-not-allowed"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 2. Floating Launcher Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle AI Health Assistant Chat"
        className="group relative flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border-2 border-white/30"
      >
        {/* Glow ambient background ring */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-40 blur-sm group-hover:opacity-75 transition-opacity" />

        <div className="relative flex items-center gap-2">
          <div className="relative">
            <Bot className="w-5 h-5 text-white animate-pulse" />
            {hasUnreadNotification && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white animate-ping" />
            )}
          </div>
          <span className="hidden sm:inline font-bold tracking-wide">
            {isOpen ? "Close Assistant" : "AI Health Assistant"}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300 hidden sm:inline" />
        </div>
      </button>
    </div>
  );
}
