import Link from 'next/link';
import GlowingButton from './GlowingButton';

const navBarList = [
  { name: 'Home', href: '/home' },
  { name: 'Projects', href: 'projects' },
  { name: 'Technologies', href: 'technologies' },
];
const Navbar = () => {
  return (
    <>
      <nav className="bg-black/15 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center pt-4 pb-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="text-2xl font-bold text-white select-none">DevNarvs</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-20 font-[family-name:var(--font-geist-mono)]">
              {navBarList.map((item, index) => (
                <Link
                  key={index}
                  href={`#${item.href}`}
                  className="relative text-white ransition duration-300 pb-1 "
                >
                  <span className=" after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full select-none">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Resume */}
            <GlowingButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
