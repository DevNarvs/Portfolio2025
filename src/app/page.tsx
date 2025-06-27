import Footer from './Components/Footer';
import Navbar from './Components/navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Technologies from './Pages/Technologies';

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Technologies />
      <Footer />
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-white via-black to-white blur-3xl opacity-50" />
    </>
  );
}
