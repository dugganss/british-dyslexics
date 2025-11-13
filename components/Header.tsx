"use client";

import { useState } from "react";
import Logo from "./Logo";
import { ShoppingCart, Menu, X } from "lucide-react";
import { navItems } from "@/app/config/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 absolute top-0 left-0 w-full z-30 bg-gradient-to-b from-white to-transparent">
      {/* Logo */}
      <div className="flex items-end gap-3 max-[420px]:gap-2">
        <Logo></Logo>
        <h1 className="text-2xl font-bold text-black max-[420px]:text-xl">British Dyslexics</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden min-[856px]:flex gap-18 text-black font-semi-bold text-lg mt-3">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="hover:text-gray-600 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4 min-[856px]:hidden text-black">
        <Menu
          className="mt-2 w-8 h-8 max-[420px]:w-6 max-[420px]:h-6 cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
        <ShoppingCart className="mt-2 w-8 h-8 max-[420px]:w-6 max-[420px]:h-6 cursor-pointer" />
      </div>

      {/* Desktop cart icon */}
      <div className="hidden min-[856px]:flex items-center text-black">
        <ShoppingCart className="mt-2 w-8 h-8 max-[420px]:w-6 max-[420px]:h-6 cursor-pointer" />
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center gap-8 text-2xl font-semibold text-black">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6"
          >
            <X className="w-8 h-8" />
          </button>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
