// Импортираме снимките от папката Images
import kalverDesktop from "../Images/Kalver desktop.jpg";
import kalverMobile from "../Images/Kalver mobile.jpg";
import ymgoodsDesktop from "../Images/Ymgoods desktop.jpg";
import yumgoodsMobile from "../Images/Yumgoods mobile.jpg";
import paydropDesktop from "../Images/Paydrop desktop.jpg";
import paydropMobile from "../Images/Paydrop mobile.jpg";
import veloDesktop from "../Images/Velo desktoo.jpg";
import veloMobile from "../Images/Velo mobile.jpg";
import poochDesktop from "../Images/Pooch desktop.jpg";
import poochMobile from "../Images/Pooch mobile.jpg";
import heymanDesktop from "../Images/Heyman desktop.jpg";
import heymanMobile from "../Images/Heyman mobile.jpg";
import colorfulDesktop from "../Images/Colorful creatures desktop.jpg";
import colorfulMobile from "../Images/Colorful creatures mobile.jpg";
import diveDesktop from "../Images/Dive for lives desktop.jpg";
import diveMobile from "../Images/Dive for lives mobile.jpg";

// Новите 4 проекта (спрямо твоя скрийншот 1861.jpg)
import nexusDesktop from "../Images/Nexus desktop .jpg";
import nexusMobile from "../Images/Nexus mobile .jpg";
import vitracDesktop from "../Images/Vitrac desktop .jpg";
import vitracMobile from "../Images/Vitrac mobile .jpg";
import luaDesktop from "../Images/Lua desktop .jpg";
import luaMobile from "../Images/Lua mobile .jpg";
import borneDesktop from "../Images/Borne desktop .jpg";
import borneMobile from "../Images/Borne mobile .jpg";

export const PROJECTS = [
  {
    title: "Nexus",
    description: "Modern networking platform with a focus on seamless connectivity and minimal interface design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://nexus-eosin-three-95.vercel.app/",
    desktopImage: nexusDesktop,
    mobileImage: nexusMobile
  },
  {
    title: "Vitrac",
    description: "High-fidelity digital experience for architectural visualization and structural aesthetics.",
    tech: ["Framer Motion", "React", "Design Systems"],
    link: "https://vitrac.vercel.app/",
    desktopImage: vitracDesktop,
    mobileImage: vitracMobile
  },
  {
    title: "Lua",
    description: "An immersive creative ecosystem designed for fluid interactions and dark-mode elegance.",
    tech: ["Next.js", "UI/UX", "Optimization"],
    link: "https://lua-gamma.vercel.app/",
    desktopImage: luaDesktop,
    mobileImage: luaMobile
  },
  {
    title: "Borne",
    description: "Premium branding showcase highlighting the intersection of corporate identity and digital performance.",
    tech: ["Branding", "Frontend Engineering", "Vercel"],
    link: "https://born-brand.vercel.app/",
    desktopImage: borneDesktop,
    mobileImage: borneMobile
  },
  {
    title: "Klaver",
    description: "Ultra-premium fintech analytics platform for high-net-worth portfolio management.",
    tech: ["Next.js", "TypeScript", "D3.js", "Tailwind"],
    link: "https://klaver-psi.vercel.app/",
    desktopImage: kalverDesktop,
    mobileImage: kalverMobile
  },
  {
    title: "Yum Goods",
    description: "Custom-engineered e-commerce experience with advanced asset optimization and real-time inventory tracking.",
    tech: ["React", "Custom Tooling", "CI/CD Pipeline", "Edge Functions"],
    link: "https://yumgoods.vercel.app/",
    desktopImage: ymgoodsDesktop,
    mobileImage: yumgoodsMobile
  },
  {
    title: "Paydrop",
    description: "Membership and Web3-ready payout infrastructure for modern decentralized organizations.",
    tech: ["Next.js-14", "Stripe", "PostgreSQL", "Supabase"],
    link: "https://paydrop-ten.vercel.app/",
    desktopImage: paydropDesktop,
    mobileImage: paydropMobile
  },
  {
    title: "Velo",
    description: "Minimalist artisan froyo brand experience focusing on immersive interaction and smooth transitions.",
    tech: ["Three.js", "Framer Motion", "React"],
    link: "https://velo-khaki.vercel.app/",
    desktopImage: veloDesktop,
    mobileImage: veloMobile
  },
  {
    title: "Pooch",
    description: "Full-stack pet adoption ecosystem bridging the gap between local shelters and new owners.",
    tech: ["React", "Firebase", "TypeScript", "Vercel"],
    link: "https://pooch.vercel.app/",
    desktopImage: poochDesktop,
    mobileImage: poochMobile
  },
  {
    title: "Hey Man",
    description: "A community-first communication suite designed for real-time collaboration and security.",
    tech: ["WebRTC", "Socket.io", "Node.js", "Express"],
    link: "https://hey-man.vercel.app/",
    desktopImage: heymanDesktop,
    mobileImage: heymanMobile
  },
  {
    title: "Colorful Creatures",
    description: "Educational museum experience utilizing high-fidelity Canvas animations and interactive storytelling.",
    tech: ["Canvas API", "SASS", "Gatsby", "Vercel"],
    link: "https://colorful-creatures.vercel.app/",
    desktopImage: colorfulDesktop,
    mobileImage: colorfulMobile
  },
  {
    title: "Dive for Lives",
    description: "NGO platform for marine conservation, featuring live data visualization of oceanic health.",
    tech: ["Chart.js", "GraphQL", "Python-Serverless", "Tailwind"],
    link: "https://dive-for-lives.vercel.app/",
    desktopImage: diveDesktop,
    mobileImage: diveMobile
  }
];

export const SKILLS = [
  { name: "React", icon: "Code2" },
  { name: "Next.js", icon: "Cpu" },
  { name: "TypeScript", icon: "FileJson" },
  { name: "Vercel", icon: "Pyramid" },
  { name: "Tailwind CSS", icon: "Palette" },
  { name: "Figma", icon: "Figma" },
  { name: "Three.js", icon: "Boxes" },
  { name: "Node.js", icon: "Terminal" },
  { name: "PostgreSQL", icon: "Database" },
  { name: "Custom Tooling", icon: "Settings" }
];
