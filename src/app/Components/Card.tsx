import Image from 'next/image';

interface ICard {
  title: string;
  path?: string;
}

const Card: React.FC<ICard> = ({ title, path }) => {
  const isInlineSvg = path?.trim().startsWith('<svg');
  return (
    <>
      <div className="w-30 h-30 p-1  rounded-xl bg-zinc-900 text-white relative overflow-hidden shadow-xl hover:shadow-white/40 transition-shadow duration-300 border border-zinc-700 select-none">
        {/* Icon/Image area */}
        <div className="w-full flex justify-center items-center h-16 mb-4">
          {path ? (
            isInlineSvg ? (
              <div dangerouslySetInnerHTML={{ __html: path }} />
            ) : (
              <Image src={path} alt={title} className="h-full object-contain" />
            )
          ) : (
            <span className="text-gray-500 text-xs">No icon</span>
          )}
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex justify-center items-center">
          <h3 className="text-xs font-semibold mb-2">{title}</h3>
        </div>
      </div>
    </>
  );
};
export default Card;
