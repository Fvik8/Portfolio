import { motion } from "motion/react";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  desktopImage: string;
  mobileImage: string;
  key?: string;
}

export const ProjectCard = ({ title, description, tech, link, desktopImage, mobileImage }: ProjectProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col space-y-6"
    >
      {/* Text Header - Clickable area leading to the live site */}
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col space-y-2"
      >
        <h3 className="text-3xl font-serif font-bold text-white md:text-4xl group-hover:text-indigo-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="max-w-2xl text-base text-slate-400 leading-relaxed pr-8">
          {description}
        </p>
      </a>

      {/* Interactive Mockup Bridge */}
      <div className="relative aspect-[16/10] w-full rounded-2xl bg-[#0a0a0a] border border-white/5 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(99,102,241,0.2)]">
        
        {/* Monitor Bezel (Desktop View) */}
        <div className="absolute inset-4 rounded-[12px] bg-black ring-[10px] ring-zinc-900 shadow-2xl overflow-hidden md:inset-8">
          <div className="relative h-full w-full overflow-y-auto scrollbar-hide bg-black group/screen">
            <img 
              src={desktopImage} 
              alt={`${title} Desktop`}
              className="w-full h-auto object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://placehold.co/1200x2400/111/444?text=Upload+Screenshot";
              }}
            />
            {/* Gloss Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none opacity-50 sticky top-0 h-full" />
          </div>
        </div>

        {/* Smartphone Frame (Mobile View) */}
        <div className="absolute bottom-[-8%] right-4 w-[32%] aspect-[9/19] rounded-[34px] bg-black ring-[8px] ring-zinc-800 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-4 md:right-12 md:w-[24%]">
          
          {/* Hardware Details: Notch/Speaker */}
          <div className="absolute top-3 left-1/2 z-30 h-1.5 w-12 -translate-x-1/2 rounded-full bg-zinc-800" />
          <div className="absolute top-2 left-1/2 z-20 h-5 w-20 -translate-x-1/2 rounded-b-2xl bg-black" />
          
          <div className="relative h-full w-full overflow-y-auto scrollbar-hide bg-black">
            <img 
              src={mobileImage} 
              alt={`${title} Mobile`}
              className="w-full h-auto object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://placehold.co/400x1200/111/444?text=Mobile+Shot";
              }}
            />
          </div>
        </div>
      </div>

      {/* Tech Chips */}
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span 
            key={item} 
            className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-400 rounded-full border border-indigo-400/20 bg-indigo-400/5"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
