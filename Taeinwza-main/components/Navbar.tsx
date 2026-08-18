"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Info", href: "/info" },
    { name: "Book", href: "/book" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-lime-500/30 bg-black/95 backdrop-blur-xl transition-all">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">

        {/* BEN 10 / OMNITRIX LOGO */}
        <Link href="/" className="flex items-center gap-3 group">

          <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-black border-2 border-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.5)] group-hover:scale-110 transition-all duration-300">

            {/* Omnitrix-style logo */}
            <div className="w-7 h-7 rounded-full bg-lime-400 flex items-center justify-center border-4 border-gray-900 group-hover:rotate-180 transition-transform duration-500">
              <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center">
                <span className="text-[9px] font-black text-lime-400">
                  10
                </span>
              </div>
            </div>

          </div>

          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-white group-hover:text-lime-400 transition-colors">
              BEN <span className="text-lime-400">10</span>
            </span>

            <span className="text-[9px] font-bold text-gray-400 -mt-1 tracking-[0.2em] uppercase">
              Omnitrix Library
            </span>
          </div>

        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 bg-gray-900 rounded-full border border-lime-500/20">

          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-lime-400 text-black shadow-[0_0_12px_rgba(163,230,53,0.4)]"
                    : "text-gray-400 hover:text-lime-400 hover:bg-gray-800"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

        </nav>

        {/* Login / Register */}
        <div className="flex items-center gap-2">

          <Link
            href="/login"
            className="text-xs font-bold text-gray-300 hover:text-lime-400 px-3.5 py-2 rounded-xl hover:bg-gray-900 transition-all"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="text-xs font-black text-black bg-lime-400 hover:bg-lime-300 px-4 py-2 rounded-xl transition-all duration-300 shadow-[0_0_12px_rgba(163,230,53,0.3)] hover:shadow-[0_0_20px_rgba(163,230,53,0.5)] active:scale-95"
          >
            Register
          </Link>

        </div>

      </div>
    </header>
  );
};

export default Navbar;