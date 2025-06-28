import Image from 'next/image';
import { MiniProject, ProjectList } from '../Components/Props';

export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className="relative py-20 bg-black text-white px-4 sm:px-10 overflow-hidden"
      >
        {/* Section content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center tracking-wide font-[family-name:var(--font-geist-mono)]">
            My Projects
          </h2>

          <div className="flex flex-col items-center gap-12 select-none">
            {ProjectList.map((project, index) => (
              <div
                key={index}
                className="w-full max-w-4xl bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-white/30 transform hover:scale-[1.01] transition-all duration-300 border border-zinc-800 flex flex-col sm:flex-row"
              >
                <div className="sm:w-1/2 w-full h-60 sm:h-auto">
                  <Image
                    src={project.img}
                    alt={project.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="sm:w-1/2 w-full flex flex-col justify-between p-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">{project.name}</h3>
                    <p className="mb-6 text-sm text-zinc-400 leading-relaxed mt-2">
                      {project.description}
                    </p>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mt-2">
                      {project.tech}
                    </p>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-block w-full text-center text-sm font-medium text-white py-2 rounded-md border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                    >
                      🔗 View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-4xl font-bold mb-12 text-center tracking-wide font-[family-name:var(--font-geist-mono)]">
            Mini Projects
          </h2>

          <div className="flex flex-col items-center gap-12 select-none">
            {MiniProject.map((project, index) => (
              <div
                key={index}
                className="w-full max-w-4xl bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-white/30 transform hover:scale-[1.01] transition-all duration-300 border border-zinc-800 flex flex-col sm:flex-row"
              >
                <div className="sm:w-1/2 w-full h-60 sm:h-auto">
                  <Image
                    src={project.img}
                    alt={project.name}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="sm:w-1/2 w-full flex flex-col justify-between p-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">{project.name}</h3>
                    <p className="mb-6 text-sm text-zinc-400 leading-relaxed mt-2">
                      {project.description}
                    </p>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mt-2">
                      {project.tech}
                    </p>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-block w-full text-center text-sm font-medium text-white py-2 rounded-md border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                    >
                      🔗 View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
