import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { portfolioData } from "../data/db";
import { AnimatePresence, motion } from "motion/react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { personal, navigation } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl transition-all duration-300 ${isScrolled
      ? "bg-slate-950/95 shadow-lg shadow-black/10"
      : "bg-slate-950/80"
      }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={handleNavigation}
          className="group flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-sm font-semibold text-white transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.06]">
            SM
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-tight text-white">
              {personal.name}
            </p>

            <p className="text-[11px] text-slate-500">
              {personal.role}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `group relative py-2 text-sm transition-colors duration-200 ${isActive
                  ? "text-white"
                  : "text-slate-500 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}

                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-1 left-0 h-px bg-indigo-400 transition-all duration-200 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          {/* Resume */}
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
          >
            Resume ↗
          </a>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:bg-white/[0.04] hover:text-white md:hidden"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/5 bg-slate-950/95 px-6 py-5 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col">
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={handleNavigation}
                  className={({ isActive }) =>
                    `border-b border-white/5 py-4 text-sm transition-colors last:border-0 ${isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Mobile Resume */}
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={handleNavigation}
                className="mt-4 inline-flex w-fit items-center rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
              >
                View Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;