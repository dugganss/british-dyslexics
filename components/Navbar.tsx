import Image from "next/image";
import { ShoppingCart, Menu } from "lucide-react";

export default function Navbar () {
return (
    <nav className="flex justify-between items-center px-6 py-4 absolute top-0 left-0 w-full z-30">
        <div className="flex items-end gap-3 max-[420px]:gap-2">
          <Image src="/logo.png" alt="British Dyslexics Logo" width={44} height={44} />
          <h1 className="text-2xl font-bold text-black max-[420px]:text-xl">British Dyslexics</h1>
        </div>

        <div className="flex items-center gap-4 max-[420px]:gap-3 cursor-pointer text-black">
          <Menu className="mt-2 w-8 h-8 max-[420px]:w-6 max-[420px]:h-6" />
          <ShoppingCart className="mt-2 w-8 h-8 max-[420px]:w-6 max-[420px]:h-6" />
        </div>
      </nav>
);
}