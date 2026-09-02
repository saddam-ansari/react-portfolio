import { portfolioData } from "../data/db";

function Footer() {
  const { personal, socialLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Identity */}
          <div className="max-w-sm">
            <p className="text-sm font-semibold text-white">
              {personal.name}
            </p>

            <p className="mt-1 text-xs text-slate-600">
              {personal.role}
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Building simple, useful and maintainable web
              applications with a focus on React and modern
              JavaScript.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-slate-600 transition-colors hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-slate-600 transition-colors hover:text-white"
            >
              LinkedIn ↗
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="text-xs text-slate-600 transition-colors hover:text-white"
            >
              Back to top ↑
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-700">
            © {new Date().getFullYear()} {personal.name}
          </p>

          <p className="text-xs text-slate-700">
            Built with React JS & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;