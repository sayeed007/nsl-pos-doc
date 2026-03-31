import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-lg transition-all duration-300"
      aria-label="NSL POS Home"
    >
      <div className="relative flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-[1.03] group-active:scale-95">
        <Image
          src="/logo/NSL_POS_Root-removebg.png"
          alt="NSL POS Logo"
          width={132}
          height={52}
          className="h-13 w-auto object-contain transition-all duration-700 ease-in-out group-hover:rotate-1 group-hover:brightness-110"
          priority
        />
        {/* Subtle radial glow that appears on hover */}
        <div className="absolute inset-x-0 -bottom-2 -z-10 h-1/2 w-full bg-brand/10 blur-xl transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
      </div>
    </Link>
  );
}
