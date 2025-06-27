import Link from 'next/link';

export default function GlowingButton() {
  return (
    <>
      <div className="relative inline-block group">
        {/* Glowing blur behind button */}
        <div className="absolute -inset-0.5 rounded-md bg-white opacity-10 blur-md transition duration-300 group-hover:opacity-40 animate-pulse"></div>

        {/* Actual button */}
        <Link
          href="/resume.pdf"
          className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white text-white font-[family-name:var(--font-geist-mono)] backdrop-blur-sm hover:bg-white hover:text-black hover:border-white/30 transition cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.22 20.75H5.78A2.64 2.64 0 0 1 3.25 18v-3a.75.75 0 0 1 1.5 0v3a1.16 1.16 0 0 0 1 1.25h12.47a1.16 1.16 0 0 0 1-1.25v-3a.75.75 0 0 1 1.5 0v3a2.64 2.64 0 0 1-2.5 2.75Z" />
            <path d="M12 15.75a.74.74 0 0 1-.53-.22l-4-4a.75.75 0 0 1 1.06-1.06L12 13.94l3.47-3.47a.75.75 0 0 1 1.06 1.06l-4 4a.74.74 0 0 1-.53.22Z" />
            <path d="M12 15.75a.76.76 0 0 1-.75-.75V4a.75.75 0 0 1 1.5 0v11a.76.76 0 0 1-.75.75Z" />
          </svg>
          Resume
        </Link>
      </div>
    </>
  );
}
