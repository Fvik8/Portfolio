import { motion } from "motion/react";
import { Code2, Cpu, FileJson, Palette, Boxes, Terminal, Figma, Database, Network, Flame } from "lucide-react";
import { SKILLS } from "../constants";

const iconMap: Record<string, any> = {
  Code2, Cpu, FileJson, Palette, Boxes, Terminal, Figma, Database, Network, Flame
};

export const SkillsSection = () => {
  return (
    <section className="px-6 py-32 bg-base-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <h2 className="text-5xl font-serif font-bold md:text-6xl text-ultra-white">Technical <span className="text-indigo-vibrant italic">Stack.</span></h2>
          <p className="mt-6 text-cool-gray max-w-2xl mx-auto text-lg">
            A diverse toolkit built on a foundation of engineering excellence and aesthetic precision.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {SKILLS.map((skill, index) => {
            const IconComponent = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center justify-center space-y-4 rounded-[32px] bg-card-black/50 p-10 border border-white/5 transition-all hover:bg-indigo-vibrant/5 hover:border-indigo-vibrant/20"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-base-black text-indigo-vibrant transition-transform group-hover:scale-110 group-hover:rotate-6 shadow-xl">
                  {IconComponent && <IconComponent className="h-7 w-7" />}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-ultra-white">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="px-6 py-32 bg-base-black border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 text-center md:text-left">
          <div className="max-w-xl">
            <h2 className="text-5xl font-serif font-bold text-ultra-white leading-tight md:text-6xl">
              Let's craft something <br />
              <span className="text-indigo-vibrant italic">unforgettable.</span>
            </h2>
            <p className="mt-8 text-cool-gray text-lg pr-12">
              Currently accepting high-impact projects. 
              Let's discuss how we can elevate your digital presence.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-10">
            <a 
              href="mailto:contact@fviktorov.com" 
              className="text-3xl font-serif font-bold text-ultra-white hover:text-indigo-vibrant transition-colors md:text-5xl"
            >
              contact@fviktorov.com
            </a>
            <div className="flex flex-wrap justify-center gap-8 md:justify-end">
              {["LinkedIn", "GitHub", "Twitter", "Dribbble"].map((platform) => (
                <a key={platform} href="#" className="text-[10px] font-bold tracking-[0.2em] uppercase text-cool-gray hover:text-ultra-white transition-colors">
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-32 flex flex-col items-center justify-between border-t border-white/5 pt-12 text-[10px] font-bold uppercase tracking-widest text-cool-gray md:flex-row">
          <p>© 2026 VIKTOROV Portfolio // Principal Engineer.</p>
        </div>
      </div>
    </footer>
  );
};

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between bg-card-black/50 backdrop-blur-xl border border-white/5 rounded-2xl px-8 py-4">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-lg bg-indigo-vibrant shadow-[0_0_15px_rgba(99,102,241,0.5)] flex items-center justify-center font-bold text-white">F</div>
          <span className="text-xl font-serif tracking-tight font-black text-ultra-white uppercase">Viktorov<span className="text-indigo-vibrant">.</span></span>
        </div>
        
        <div className="hidden space-x-10 md:flex">
          {["Work", "Labs", "Story", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-bold tracking-[0.2em] text-cool-gray hover:text-ultra-white transition-colors uppercase">
              {item}
            </a>
          ))}
        </div>
        
        <a 
          href="#contact" 
          className="rounded-xl bg-indigo-vibrant px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-opacity-90"
        >
          Inquire
        </a>
      </div>
    </nav>
  );
};
