import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="row-start-2 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* LEFT SIDE: IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/Img/narvspic.png"
            alt="Developer"
            width={500}
            height={500}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>

        {/* RIGHT SIDE: TEXT CONTENT */}
        <div className="flex flex-col gap-[32px] items-center md:items-start select-none">
          <h3 className="text-2xl sm:text-4xl font-bold text-center md:text-left">
            Hi, My Name is <br />
            <span className="text-4xl sm:text-6xl font-bold gradient-text">Narvin Achacoso</span>
            <p className="text-8xl sm:text-2xl font-bold text-center md:text-left">
              Aspiring Full-Stack Web Developer
            </p>
          </h3>
          <p className="text-lg sm:text-xl text-center md:text-left max-w-2xl">
            I’m a Software Developer with a passion for turning ideas into engaging and interactive
            digital experiences. My approach to software development is rooted in creativity,
            efficiency, and attention to detail, ensuring that every project not only meets but
            exceeds expectations.
          </p>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="/Img/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Img/IconDownload.svg"
                alt="Resume"
                width={500}
                height={500}
                className="w-7 h-7"
              />
              Resume
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[165px]"
              href="mailto:achacosonarvin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Img/contact.svg"
                alt="Contact"
                width={500}
                height={500}
                className="w-5 h-5 mr-3"
              />
              Contact Me
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
