import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center p-6 space-y-4">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-3xl bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 flex items-center justify-center animate-pulse">
          <Spinner className="size-8 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
      <div className="text-center space-y-1">
        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-wide">
          Sync Healthcare
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Loading synchronized medical data...
        </p>
      </div>
    </div>
  );
}
