"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Learn", "Support", "About", "Contact"];

  return (
    <nav className="flex justify-between items-center px-6 py-4 absolute top-0 left-0 w-full z-30 bg-gradient-to-b from-white to-transparent">
      {/* Logo */}
      <div className="flex items-end gap-3 max-[420px]:gap-2">
        <Image src="/logo.png" alt="British Dyslexics Logo" width={44} height={44} />
        <h1 className="text-2xl font-bold text-black max-[420px]:text-xl">British Dyslexics</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden min-[856px]:flex gap-18 text-black font-semi-bold text-xl mt-3">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="hover:text-gray-700 transition-colors"
          >
            {item}
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
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// import Image from "next/image";
// import { ShoppingCart, Menu } from "lucide-react";

// export default function Header () {
// return (
//     <nav className="flex justify-between items-center px-6 py-4 absolute top-0 left-0 w-full z-30 bg-gradient-to-b from-white to-transparent">
//         <div className="flex items-end gap-3 max-[420px]:gap-2">
//           <Image src="/logo.png" alt="British Dyslexics Logo" width={44} height={44} />
//           <h1 className="text-2xl font-bold text-black max-[420px]:text-xl">British Dyslexics</h1>
//         </div>

//         <div className="flex items-center gap-4 max-[420px]:gap-3 cursor-pointer text-black">
//           <Menu className="mt-2 w-8 h-8 max-[420px]:w-6 max-[420px]:h-6" />
//           <ShoppingCart className="mt-2 w-8 h-8 max-[420px]:w-6 max-[420px]:h-6" />
//         </div>
//     </nav>
// );
// }