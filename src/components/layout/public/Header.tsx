"use client";

import { useQueryClient } from "@tanstack/react-query";
import {
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserPlus,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/assets/svg/Logo";
import { toast } from "@/components/ui/toast";
import { useGetMe, useLogout } from "@/hooks";
import type { UserRole } from "@/types";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const routes = [
    { name: "Home", url: "/" },
    { name: "Doctors", url: "/#doctors" },
    { name: "Specialties", url: "/specialties" },
    { name: "AI Health Assistant", url: "/ai-assistant" },
    { name: "About Us", url: "/about-us" },
  ];

  const dashboardRoute: Partial<Record<UserRole, string>> = {
    SUPER_ADMIN: "/admin",
    ADMIN: "/admin",
    DOCTOR: "/doctor",
  };

  const { data, isLoading } = useGetMe();
  const { mutate: logout, isPending: isLoggingOut } = useLogout();
  const queryClient = useQueryClient();

  const user = data?.data;
  const role: UserRole | undefined = user?.role;
  const hasDashboard =
    role === "SUPER_ADMIN" || role === "ADMIN" || role === "DOCTOR";

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        toast.add({
          title: "Logged Out",
          description: "You have been safely logged out.",
          type: "success",
        });
        queryClient.removeQueries({ queryKey: ["user"] });
      },
      onError: () => {
        toast.add({
          title: "Logout failed",
          description: "Something went wrong while logging out.",
          type: "error",
        });
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top emergency announcement bar */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-700 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium tracking-wide">
              Emergency & 24/7 AI Triage Active
            </span>
            <span className="hidden sm:inline text-blue-200">|</span>
            <span className="hidden sm:inline text-blue-100">
              Immediate Care Hotline:{" "}
              <strong className="text-white">+880 1700-000000</strong>
            </span>
          </div>
          <div className="flex items-center gap-4 text-blue-100">
            <Link
              href="/apply"
              className="hover:text-white transition-colors flex items-center gap-1 font-medium"
            >
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Join as a Doctor</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="backdrop-blur-xl bg-white/90 dark:bg-zinc-950/90 border-b border-zinc-200/80 dark:border-zinc-800/80 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center p-1 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <Logo />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  Sync
                </span>
                <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Healthcare
                </span>
              </div>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-zinc-600 dark:text-zinc-400 -mt-1">
                Synchronized Medical Care
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {routes.map((route) => (
              <Link
                key={route.url}
                href={route.url}
                className="px-3.5 py-2 text-sm font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all"
              >
                {route.name}
              </Link>
            ))}

            {hasDashboard && role && dashboardRoute[role] && (
              <Link
                href={dashboardRoute[role]}
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-lg border border-blue-200 dark:border-blue-900/50 hover:bg-blue-100 transition-all"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
            )}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {!isLoading && !data && (
              <>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200 hover:text-blue-600 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Link>

                <Link
                  href="/register"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Get Started</span>
                </Link>
              </>
            )}

            {!isLoading && data && (
              <div className="flex items-center gap-3">
                <div className="text-right hidden lg:block">
                  <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    {user?.name || user?.email}
                  </div>
                  <span className="inline-block px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    {role}
                  </span>
                </div>

                {hasDashboard && role && dashboardRoute[role] && (
                  <Link
                    href={dashboardRoute[role]}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-all"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Go to Portal</span>
                  </Link>
                )}

                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg border border-rose-200 dark:border-rose-900 transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-4 space-y-3">
            <nav className="flex flex-col space-y-2">
              {routes.map((route) => (
                <Link
                  key={route.url}
                  href={route.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg"
                >
                  {route.name}
                </Link>
              ))}
              {hasDashboard && role && dashboardRoute[role] && (
                <Link
                  href={dashboardRoute[role]}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-blue-600 bg-blue-50 dark:bg-blue-950/40 rounded-lg"
                >
                  Dashboard ({role})
                </Link>
              )}
            </nav>

            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
              {!data ? (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2 text-sm font-medium border border-zinc-300 dark:border-zinc-700 rounded-lg"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2 text-sm font-medium bg-blue-600 text-white rounded-lg shadow-sm"
                  >
                    Register as Patient
                  </Link>
                  <Link
                    href="/apply"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2 text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-lg"
                  >
                    Apply as Doctor
                  </Link>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleLogout();
                  }}
                  className="w-full py-2 text-sm font-medium text-rose-600 border border-rose-200 rounded-lg"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
