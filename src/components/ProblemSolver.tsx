import { motion } from "motion/react";
import { Zap, Cpu, Terminal, Layers } from "lucide-react";

export const ProblemSolver = () => {
  return (
    <section className="relative overflow-hidden px-6 py-32 bg-base-black">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-vibrant/20 text-indigo-vibrant">
              <Terminal className="h-6 w-6" />
            </div>
            
            <h2 className="text-5xl font-serif font-bold leading-tight md:text-6xl text-ultra-white">
              Engineering over <br />
              <span className="text-indigo-vibrant italic">Execution.</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-cool-gray">
              <p>
                In a landscape saturated with generic templates, I prioritize architectural integrity and performance optimization. 
                For the <span className="text-ultra-white font-semibold">"Yum Goods"</span> project, we faced a critical bottleneck: 
                unoptimized assets were degrading LCP metrics by 1.2s.
              </p>
              <p>
                I engineered a custom Node.js automation script that pre-processes and multi-formats assets dynamically 
                to ensure a <span className="text-ultra-white">40% performance gain</span> across the entire store frontend.
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 pt-4">
              <div className="flex flex-col space-y-3 rounded-2xl bg-card-black p-6 border border-white/5">
                <div className="text-4xl font-serif font-bold text-indigo-vibrant">40%</div>
                <p className="text-xs font-bold uppercase tracking-widest text-cool-gray">Assets Optimization Gain</p>
              </div>
              <div className="flex flex-col space-y-3 rounded-2xl bg-card-black p-6 border border-white/5">
                <div className="text-4xl font-serif font-bold text-indigo-vibrant">&lt; 100ms</div>
                <p className="text-xs font-bold uppercase tracking-widest text-cool-gray">Image Processing Latency</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square w-full rounded-[40px] bg-card-black flex items-center justify-center overflow-hidden border border-white/5">
              <div className="grid grid-cols-4 gap-4 p-12 opacity-10">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="h-20 w-1 bg-gradient-to-b from-indigo-vibrant to-transparent rounded-full" />
                ))}
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-48 w-48 rounded-[32px] bg-base-black flex items-center justify-center border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-indigo-vibrant/5 blur-2xl" />
                  <Cpu className="h-20 w-20 text-indigo-vibrant" />
                  <div className="absolute -top-4 -right-4 h-12 w-12 rounded-xl bg-card-black border border-white/10 flex items-center justify-center shadow-xl">
                    <Zap className="h-6 w-6 text-indigo-vibrant" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
