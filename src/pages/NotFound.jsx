import { motion } from "motion/react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg text-center"
      >
        {/* 404 */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02]">
          <span className="text-2xl font-semibold text-indigo-400">
            404
          </span>
        </div>

        <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
          Page not found
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Looks like you've taken a wrong turn.
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to the portfolio.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-400"
          >
            Back to portfolio
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}

export default NotFound;