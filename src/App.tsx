/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from "./components/Hero";
import { ProjectCard } from "./components/ProjectCard";
import { ProblemSolver } from "./components/ProblemSolver";
import { SkillsSection, Footer, Navbar } from "./components/Layout";
import { ContactForm } from "./components/ContactForm";
import { PROJECTS } from "./constants";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Problem Solver Section (Unique Selling Point) */}
        <section id="labs">
          <ProblemSolver />
        </section>

        {/* Showcase Section (8 Projects) */}
        <section id="work" className="px-6 py-32 bg-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="mb-24 flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-4xl font-extrabold md:text-5xl lg:text-6xl">
                  Selected <span className="text-indigo-400">Works.</span>
                </h2>
                <p className="mt-6 text-lg text-subtle-gray leading-relaxed">
                  A curation of high-end web applications where performance meets 
                  impeccable design. Explore my latest achievements across diverse industries.
                </p>
              </div>
              <div className="flex space-x-1 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <div className="h-2 w-2 rounded-full bg-amber-500" />
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
              </div>
            </div>

            <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2">
              {PROJECTS.map((project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="story">
          <SkillsSection />
        </section>

        {/* Contact Form Section */}
        <section id="contact">
          <ContactForm />
        </section>

        {/* Footer */}
        <Footer />
      </main>

      {/* Retro-noise overlay for texture */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
}

