export default function Background() {
  return (
    <>
      <div className="relative min-h-[200px] flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/Img/bg1.jpg')] bg-cover bg-center bg-no-repeat opacity-70" />

        {/* Gradient blend overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-pink-500/30 to-black/60 mix-blend-overlay" />

        {/* Content */}
        <div className="relative z-10 text-white text-2xl font-bold">My Technologies</div>
      </div>
    </>
  );
}
