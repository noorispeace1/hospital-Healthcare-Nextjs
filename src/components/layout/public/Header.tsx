"use client";

import { useQueryClient } from "@tanstack/react-query";
import {
  Bot,
  ChevronRight,
  HeartPulse,
  Home,
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  Phone,
  Stethoscope,
  UserCheck,
  UserPlus,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/assets/svg/Logo";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "@/components/ui/toast";
import { useGetMe, useLogout } from "@/hooks";
import type { UserRole } from "@/types";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const routes = [
    { name: "Home", url: "/", icon: Home },
    { name: "Doctors", url: "/doctors", icon: UserCheck },
    { name: "Specialties", url: "/specialties", icon: Stethoscope },
    { name: "AI Health Assistant", url: "/ai-assistant", icon: Bot },
    { name: "About Us", url: "/about-us", icon: HeartPulse },
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

  // biome-ignore lint/correctness/useExhaustiveDependencies: auto close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

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

  const isRouteActive = (url: string) => {
    if (url === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(url);
  };

  return (
    <header className="sticky top-0 z-50 w-full select-none">
      {/* 1. Top emergency announcement bar */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-700 text-white text-xs py-1.5 px-3 sm:px-4 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="font-medium tracking-wide truncate">
              Emergency &amp; 24/7 AI Triage Active
            </span>
            <span className="hidden sm:inline text-blue-200">|</span>
            <span className="hidden md:inline text-blue-100">
              Immediate Care Hotline:{" "}
              <strong className="text-white">+880 1700-000000</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-blue-100">
            <a
              href="tel:+8801700000000"
              className="sm:hidden flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-[11px] font-semibold"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>Call Helpline</span>
            </a>

            <Link
              href="/apply"
              className="hover:text-white transition-colors flex items-center gap-1 font-semibold cursor-pointer text-xs"
            >
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Join as Doctor</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main navigation bar */}
      <div className="backdrop-blur-xl bg-white/95 dark:bg-zinc-950/95 border-b border-zinc-200/80 dark:border-zinc-800/80 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer shrink-0"
          >
            <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 group-hover:scale-105 group-hover:border-blue-500/40 transition-all duration-200 shadow-xs">
              <Logo />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-lg sm:text-xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  Sync
                </span>
                <span className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Healthcare
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-widest text-zinc-500 dark:text-zinc-400 -mt-1 hidden xs:inline">
                Synchronized Medical Care
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links with Hover & Active Highlight */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {routes.map((route) => {
              const active = isRouteActive(route.url);
              return (
                <Link
                  key={route.url}
                  href={route.url}
                  className={`relative px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    active
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50/90 dark:bg-blue-950/60 shadow-xs"
                      : "text-zinc-600 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/60"
                  }`}
                >
                  <span>{route.name}</span>
                  {active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                  )}
                </Link>
              );
            })}

            {hasDashboard && role && dashboardRoute[role] && (
              <Link
                href={dashboardRoute[role]}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200/80 dark:border-blue-900/50 hover:bg-blue-100 transition-all cursor-pointer shadow-xs ml-1"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
            )}
          </nav>

          {/* Right Action Area (Auth States & Loading Spinner) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Loading Spinner for Auth check */}
            {isLoading && (
              <div className="flex items-center gap-2 px-3 py-2 text-xs text-zinc-400">
                <Spinner className="size-4 text-blue-600" />
                <span className="font-medium">Checking auth...</span>
              </div>
            )}

            {/* Unauthenticated State */}
            {!isLoading && !data && (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200 hover:text-blue-600 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all cursor-pointer"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Link>

                <Link
                  href="/register"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-md shadow-blue-500/20 transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Get Started</span>
                </Link>
              </div>
            )}

            {/* Authenticated State */}
            {!isLoading && data && (
              <div className="flex items-center gap-3">
                <div className="text-right hidden lg:block">
                  <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate max-w-[140px]">
                    {user?.name || user?.email}
                  </div>
                  <span className="inline-block px-2 py-0.2 text-[10px] font-extrabold uppercase tracking-wider rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    {role}
                  </span>
                </div>

                {hasDashboard && role && dashboardRoute[role] && (
                  <Link
                    href={dashboardRoute[role]}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Portal</span>
                  </Link>
                )}

                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-900/60 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isLoggingOut ? (
                    <Spinner className="size-3.5 text-rose-600" />
                  ) : (
                    <LogOut className="w-3.5 h-3.5" />
                  )}
                  <span>{isLoggingOut ? "Exiting..." : "Logout"}</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            {isLoading && <Spinner className="size-4 text-blue-600 mr-1" />}

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2.5 rounded-xl text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer border border-zinc-200/60 dark:border-zinc-800"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-blue-600" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* 3. Fully Responsive Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-200/80 dark:border-zinc-800 bg-white/98 dark:bg-zinc-950/98 backdrop-blur-2xl px-4 py-5 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {/* User profile snippet if logged in */}
            {data && (
              <div className="p-3 rounded-2xl bg-blue-50/60 dark:bg-zinc-900 border border-blue-100 dark:border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                    {user?.name ? user.name[0].toUpperCase() : "U"}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-900 dark:text-white line-clamp-1">
                      {user?.name || user?.email}
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase">
                      Role: {role}
                    </span>
                  </div>
                </div>

                {hasDashboard && role && dashboardRoute[role] && (
                  <Link
                    href={dashboardRoute[role]}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center gap-1 cursor-pointer shadow-xs"
                  >
                    <span>Portal</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            )}

            {/* Mobile Nav Links */}
            <nav className="flex flex-col space-y-1">
              {routes.map((route) => {
                const active = isRouteActive(route.url);
                const Icon = route.icon;

                return (
                  <Link
                    key={route.url}
                    href={route.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      active
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                        : "text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4" />
                      <span>{route.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Actions / Auth Section */}
            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2.5">
              {!data ? (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2.5 text-sm font-bold border border-zinc-300 dark:border-zinc-700 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <LogIn className="w-4 h-4 text-blue-600" />
                    <span>Login to Account</span>
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2.5 text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-md shadow-blue-600/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Register as Patient</span>
                  </Link>
                  <Link
                    href="/apply"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2.5 text-sm font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Stethoscope className="w-4 h-4 text-blue-600" />
                    <span>Apply as Doctor</span>
                  </Link>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleLogout();
                  }}
                  disabled={isLoggingOut}
                  className="w-full py-2.5 text-sm font-bold text-rose-600 border border-rose-200 dark:border-rose-900 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  {isLoggingOut ? (
                    <Spinner className="size-4 text-rose-600" />
                  ) : (
                    <LogOut className="w-4 h-4" />
                  )}
                  <span>{isLoggingOut ? "Logging out..." : "Log Out"}</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
