
export default function Footer() {
  return (
    <footer className="bg-gray-200 border-t border-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            British Dyslexics
          </h3>
          <p className="text-gray-700 mt-2 max-w-xs mx-auto md:mx-0">
            Helping parents help their children since 1996.
          </p>
        </div>

        {/* Center navigation links */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-gray-800 justify-center items-center">
          <a href="#what-we-do" className="hover:text-black transition">
            What We Do
          </a>
          <a href="#resources" className="hover:text-black transition">
            Resources
          </a>
          <a href="#donate" className="hover:text-black transition">
            Donate
          </a>
          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </div>

        {/* Right section */}
        <div className="text-gray-600 text-sm">
          © {new Date().getFullYear()} British Dyslexics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
