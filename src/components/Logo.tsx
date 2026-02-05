import Link from "next/link";

export default function Logo({ white = false }: { white?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="w-9 h-9 rounded-lg bg-vibrant-orange flex items-center justify-center text-white font-bold text-lg shadow-md">
        A
      </div>
      <span className={`text-xl font-bold tracking-tight ${white ? "text-white" : "text-deep-blue"}`}>
        Akwaaba<span className="text-vibrant-orange"> AI</span>
      </span>
    </Link>
  );
}
