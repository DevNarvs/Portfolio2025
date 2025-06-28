// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-6 mt-20 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p className="mb-2 sm:mb-0">
          © {new Date().getFullYear()} Narvin Achacoso. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/DevNarvs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/narvin-achacoso-a69a27320/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a href="mailto:achacosonarvin@gmail.com" className="hover:text-white transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
