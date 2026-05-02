import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-32 pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-base-black">
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-vibrant/5 blur-[120px]" />
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ backgroundImage: `radial-gradient(#fdfdfd 1px, transparent 1px)`, backgroundSize: '60px 60px' }} 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center"
      >
        <div className="mb-8 flex items-center space-x-3 rounded-full border border-white/5 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-vibrant backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-vibrant opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-vibrant"></span>
          </span>
          <span>Open for prime collaborations</span>
        </div>

        <h1 className="max-w-5xl text-6xl font-serif font-medium leading-[1.05] text-ultra-white md:text-8xl lg:text-9xl">
          Architecting <br />
          <span className="italic text-indigo-vibrant glow-text-indigo">Digital Poetics.</span>
        </h1>

        <p className="mt-10 max-w-2xl text-lg font-light leading-relaxed text-cool-gray md:text-xl">
          Principal Frontend Engineer specializing in high-fidelity interfaces where 
          technical authority meets minimalist aesthetic. Delivering production-grade 
          experiences for the focused few.
        </p>

        <div className="mt-16 flex flex-col items-center space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8">
          <a 
            href="#work"
            className="group relative rounded-full bg-indigo-vibrant px-10 py-5 text-sm font-bold text-white transition-all hover:bg-opacity-90 hover:glow-indigo"
          >
            The Showcase
          </a>
          <a 
            href="#labs"
            className="rounded-full border border-white/10 bg-white/5 px-10 py-5 text-sm font-bold text-ultra-white transition-all hover:bg-white/10"
          >
            About the Method
          </a>
        </div>
      </motion.div>
      
      {/* Floating Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 flex flex-col items-center space-y-2 opacity-50"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
};
