import { motion } from "motion/react";
import { Mail, User, MessageSquare, Send } from "lucide-react";

export const ContactForm = () => {
  return (
    <section className="relative overflow-hidden px-6 py-32 bg-slate-950">
      <div className="mx-auto max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-white md:text-6xl">
            Let's <span className="text-indigo-400 italic">Connect.</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Have a project in mind or just want to say hi? Drop a message below.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          action="https://formspree.io/f/contact@fviktorov.com"
          method="POST"
          className="space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                  <User className="h-4 w-4" />
                </div>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>
            <div className="relative">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                  <Mail className="h-4 w-4" />
                </div>
                <input 
                  type="email" 
                  name="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Your Message</label>
            <div className="relative">
              <div className="absolute top-4 left-0 pl-4 pointer-events-none text-slate-500">
                <MessageSquare className="h-4 w-4" />
              </div>
              <textarea 
                name="message" 
                required
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full group relative flex items-center justify-center space-x-2 rounded-2xl bg-indigo-500 py-5 text-sm font-bold text-white transition-all hover:bg-indigo-600 hover:shadow-2xl hover:shadow-indigo-500/30"
          >
            <span>Send Message</span>
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.form>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />
    </section>
  );
};
