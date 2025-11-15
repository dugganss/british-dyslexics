import Logo from "./Logo";
import { navItems } from "@/app/config/navigation";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center lg:flex-row  justify-between gap-6 ">
        {/* Left section */}
        <div className="flex flex-row gap-4">
          <Logo></Logo>
          <p className="text-gray-700 mt-2 max-w-xs mx-auto md:mx-0 italic text-left">
            Helping parents help their children since 1996.
          </p>
        </div>

        {/* Center navigation links */}
        <div className="flex flex-col lg:flex-row gap-3 md:gap-6 text-gray-800 justify-center items-center">
            {navItems.map((item) => (
                <a
                key={item.label}
                href={item.href}
                className="hover:text-gray-400 transition font-semi-bold"
                >
                {item.label}
                </a>
            ))}
        </div>

        {/* Right section */}
        <div className="flex flex-col text-gray-600 text-sm text-center ml-2 lg:text-left">
          © {new Date().getFullYear()} British Dyslexics. All rights reserved.
          <p>Registered charity in England and Wales (No. 1058046)</p>
        </div>
        
      </div>
    </footer>
  );
}
