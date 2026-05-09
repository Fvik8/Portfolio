// 1. Новите проекти (със стандартен интервал, както е в GitHub)
import nexusDesktop from "../Images/Nexus desktop.jpg";
import nexusMobile from "../Images/Nexus mobile.jpg";
import vitracDesktop from "../Images/Vitrac desktop.jpg";
import vitracMobile from "../Images/Vitrac mobile.jpg";
import luaDesktop from "../Images/Lua desktop.jpg";
import luaMobile from "../Images/Lua mobile.jpg";
import borneDesktop from "../Images/Borne desktop.jpg";
import borneMobile from "../Images/Borne mobile.jpg";

// 2. Старите проекти (с техните специфични имена от GitHub)
import kalverDesktop from "../Images/Kalver desktop.jpg";
import kalverMobile from "../Images/Kalver mobile.jpg";
import ymgoodsDesktop from "../Images/Ymgoods desktop.jpg";
import yumgoodsMobile from "../Images/Yumgoods mobile.jpg";
import paydropDesktop from "../Images/Paydrop desktop.jpg";
import paydropMobile from "../Images/Paydrop mobile.jpg";
import veloDesktop from "../Images/Velo desktoo.jpg"; // Оставих "desktoo", защото така е в GitHub
import veloMobile from "../Images/Velo mobile.jpg";
import poochDesktop from "../Images/Pooch desktop.jpg";
import poochMobile from "../Images/Pooch mobile.jpg";
import heymanDesktop from "../Images/Heyman desktop.jpg";
import heymanMobile from "../Images/Heyman mobile.jpg";
import colorfulDesktop from "../Images/Colorful creatures desktop.jpg";
import colorfulMobile from "../Images/Colorful creatures mobile.jpg";
import diveDesktop from "../Images/Dive for lives desktop.jpg";
import diveMobile from "../Images/Dive for lives mobile.jpg";

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
  // Останалите проекти (Klaver, Yum Goods и т.н. от предходните версии)...
];
