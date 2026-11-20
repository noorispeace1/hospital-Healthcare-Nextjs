import { Spinner } from "@/components/ui/spinner";

export default function AuthLoading({
  label = "Verifying account",
}: {
  label?: string;
}) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-zinc-50 dark:bg-zinc-950 p-4">
      <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl">
        <Spinner className="size-8 text-blue-600 dark:text-blue-400" />
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          {label}...
        </span>
      </div>
    </div>
  );
}
