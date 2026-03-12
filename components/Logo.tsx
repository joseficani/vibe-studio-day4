import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-white">
        <div className="text-center leading-tight">
          <p className="text-xl font-bold text-white">vibe</p>
          <p className="text-xl font-bold text-white">studio</p>
        </div>
      </div>
    </Link>
  );
}