import Card from '../Components/Card';
import { arrayLink, otherTechnologies } from '../Components/Props';

export default function Technologies() {
  return (
    <>
      <div
        id="technologies"
        className="mt-12 max-w-7xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-gray-200 dark:border-zinc-500 h-auto mb-30"
      >
        <h2 className="flex justify-center text-2xl font-bold mb-8 text-gray-900 dark:text-white font-[family-name:var(--font-geist-mono)]">
          My Technologies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-6">
          {arrayLink.map((tech, index) => (
            <Card key={index} title={tech.name} path={tech.link} />
          ))}
        </div>

        <h2 className="flex justify-center mt-6 text-2xl font-bold mb-8 text-gray-900 dark:text-white font-[family-name:var(--font-geist-mono)]">
          Others
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-6">
          {otherTechnologies.map((tech, index) => (
            <Card key={index} title={tech.name} path={tech.link} />
          ))}
        </div>
      </div>
    </>
  );
}
