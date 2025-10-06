import { useState, useEffect } from 'react';
import {
  FaReact, FaNodeJs, FaAndroid, FaHtml5, FaCss3Alt, FaDatabase,
  FaInstagram, FaLinkedin, FaWhatsapp,  FaUserAstronaut,
  FaHome, FaHeart, FaShoppingCart, FaUser
} from 'react-icons/fa';
import {
  SiFlutter, SiTypescript, SiMongodb, SiTailwindcss, SiFirebase
} from 'react-icons/si';
import { FaXTwitter } from "react-icons/fa6";

export default function HomePage() {
  // State for mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Effects for menu behavior
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  // Tech grid and projects
  const techGrid = [
    [<FaReact className="text-sky-500 text-4xl" />, 'React'],
    [<SiFlutter className="text-blue-500 text-4xl" />, 'Flutter'],
    [<FaNodeJs className="text-green-600 text-4xl" />, 'Node.js'],
    [<SiTypescript className="text-blue-600 text-4xl" />, 'TypeScript'],
    [<FaAndroid className="text-green-500 text-4xl" />, 'Android'],
    [<FaHtml5 className="text-orange-500 text-4xl" />, 'HTML5'],
    [<FaCss3Alt className="text-blue-500 text-4xl" />, 'CSS3'],
    [<SiMongodb className="text-green-700 text-4xl" />, 'MongoDB'],
    [<SiFirebase className="text-yellow-500 text-4xl" />, 'Firebase'],
    [<SiTailwindcss className="text-cyan-500 text-4xl" />, 'TailwindCSS'],
    [<FaDatabase className="text-gray-600 text-4xl" />, 'Databases'],
  ];

  const projects = [
  ['Portfolio Website', 'React, TypeScript, Vite', 'A fast, modern portfolio to showcase my work and skills.'],
  ['Task Manager App', 'Flutter, Firebase', 'A cross-platform app for managing daily tasks and productivity.'],
  ['Cake Website', 'Html, Tailwind, JavaScript', 'A beautiful cake shop website with online ordering, gallery, and custom cake requests.'],
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-gray-200 text-gray-900">
          {/* ================= HEADER ================= */}
          <header className="fixed top-0 left-0 w-full z-30 bg-white/80 border-b shadow-sm backdrop-blur">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              {/* Logo & Title */}
              <div className="flex items-center gap-3">
                <span className="text-3xl text-gray-700"><FaUserAstronaut /></span>
                <span className="font-bold text-xl text-gray-800">Isaac Portfolio</span>
              </div>
              {/* Desktop Navigation */}
              <nav className="hidden md:flex gap-8 items-center">
                <a href="#projects" className="hover:text-gray-700 transition">Projects</a>
                <a href="#skills" className="hover:text-gray-700 transition">Skills</a>
                <a href="#contact" className="hover:text-gray-700 transition">Contact</a>
                <a
                  href="./Onodjaefe Wanogho Isaac CV.pdf"
                  className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-gray-500 to-gray-700 text-white text-sm shadow-lg border border-gray-500"
                >
                  Download CV
                </a>
              </nav>
              {/* Hamburger for mobile */}
              <button
                aria-label="Open menu"
                aria-expanded={menuOpen ? 'true' : 'false'}
                onClick={() => setMenuOpen(prev => !prev)}
                className="md:hidden p-2 text-2xl"
                type="button"
              >
                {menuOpen ? "✖" : "☰"}
              </button>
            </div>

            {/* Mobile Dropdown Navigation */}
            <div
              data-mobile-menu
              className={`md:hidden z-30 transition-max-height duration-300 overflow-hidden ${menuOpen ? 'max-h-[240px]' : 'max-h-0'}`}
            >
              <div className="bg-white border-t px-6 py-4 flex flex-col gap-4">
                <a href="#projects" onClick={() => setMenuOpen(false)} className="py-2">Projects</a>
                <a href="#skills" onClick={() => setMenuOpen(false)} className="py-2">Skills</a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="py-2">Contact</a>
                <a
                  href="./Onodjaefe Wanogho Isaac CV.pdf"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-gray-500 to-gray-700 text-white text-sm shadow-lg border border-gray-500 text-center"
                >
                  Download CV
                </a>
              </div>
            </div>
          </header>

          {/* ================= MAIN ================= */}
          <main className="pt-32 flex-1 text-gray-900">
            {/* ---------- HERO SECTION ---------- */}
            <section className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Hero Text */}
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                  Hi, I'm <span className="text-gray-700">Isaac Onodjaefe</span> <br />
                  App & Web Developer
                </h1>
                <p className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  I craft scalable, modern applications for web and mobile. With a passion for clean UI, smooth UX, and problem solving — I bring ideas to life and collaborate with forward-thinking teams.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact" className="px-6 py-3 rounded-lg bg-gradient-to-r from-gray-500 to-gray-700 text-white shadow-lg font-medium hover:scale-105 transition-transform duration-200 border border-gray-500">
                    📧 Contact Me
                  </a>
                  <a href="#projects" className="px-6 py-3 rounded-lg border-2 border-gray-500 text-gray-800 bg-white font-medium shadow hover:bg-gray-200 hover:scale-105 transition-transform duration-200">
                    💼 View Projects
                  </a>
                </div>
              </div>

              {/* Hero Tech Preview / Realistic App Skeleton */}
              <div className="flex justify-center">
                <div className="rounded-2xl border p-6 shadow-xl bg-white flex flex-col items-center w-[400px] sm:w-[480px] md:w-[560px]">
                  <div className="flex gap-6">
                    {/* Background tilted phone (now inside the box, visually toward the edge) */}
                    <div className="hidden sm:block w-36 h-64 bg-white rounded-3xl shadow-2xl border transform -rotate-12 translate-x-[-20px]" aria-hidden>
                      <div className="p-4 flex flex-col h-full">
                        <div className="h-8 bg-gradient-to-r from-[#FFCC00] to-[#FFC727] rounded-lg mb-3"></div>
                        <div className="h-6 bg-[#EAEAEA] rounded-md mb-3"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-12 bg-gradient-to-br from-[#FFF9E0] to-[#FFCC00] rounded-lg"></div>
                          <div className="h-12 bg-gradient-to-br from-[#FFE5D2] to-[#FF5A1F] rounded-lg"></div>
                          <div className="h-12 bg-gradient-to-br from-[#F9F9F9] to-[#E0E0E0] rounded-lg"></div>
                        </div>
                        <div className="mt-3 flex justify-around text-[#DADADA] text-lg">
                          <span><FaHome /></span>
                          <span><FaHeart /></span>
                          <span><FaShoppingCart /></span>
                          <span><FaUser /></span>
                        </div>
                      </div>
                    </div>
                    {/* Foreground phone - Old Skeleton UI */}
                    <div className="rounded-2xl border p-6 shadow-xl bg-white max-w-xs">
                      {/* App Title */}
                      <div className="h-6 w-28 bg-gray-200 rounded animate-pulse mb-4"></div>

                      {/* Search Bar */}
                      <div className="h-10 rounded-xl bg-gray-100 animate-pulse mb-6"></div>

                      {/* Categories */}
                      <div className="flex gap-3 mb-6">
                        <div className="flex flex-col items-center">
                          <div className="w-14 h-14 rounded-full bg-yellow-200 animate-pulse"></div>
                          <div className="mt-2 h-3 w-10 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-14 h-14 rounded-full bg-gray-100 animate-pulse"></div>
                          <div className="mt-2 h-3 w-12 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-14 h-14 rounded-full bg-gray-100 animate-pulse"></div>
                          <div className="mt-2 h-3 w-12 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                      </div>

                      {/* Pizza Card */}
                      <div className="p-4 rounded-xl border shadow-sm flex gap-4">
                        <div className="w-20 h-20 rounded-full bg-gray-200 animate-pulse"></div>
                        <div className="flex-1">
                          <div className="h-4 w-28 bg-gray-200 rounded animate-pulse mb-2"></div>
                          <div className="h-3 w-24 bg-gray-100 rounded animate-pulse mb-2"></div>
                          <div className="h-4 w-16 bg-yellow-200 rounded animate-pulse"></div>
                        </div>
                      </div>

                      {/* Order Button */}
                      <div className="mt-6 h-12 w-full rounded-xl bg-yellow-200 animate-pulse"></div>
                    </div>
                  </div>
                  {/* Tech badges below phone preview */}
                  <div className="mt-6 grid grid-cols-2 gap-3 w-full">
                    {[
                      [<FaReact className="text-sky-500 text-xl" />, "React.js"],
                      [<SiFlutter className="text-blue-500 text-xl" />, "Flutter"],
                      [<FaNodeJs className="text-green-600 text-xl" />, "Node.js"],
                      [<SiTypescript className="text-blue-600 text-xl" />, "TypeScript"],
                      [<FaAndroid className="text-green-500 text-xl" />, "Android"],
                      [<SiTailwindcss className="text-cyan-500 text-xl" />, "Tailwind CSS"],
                    ].map(([icon, label], idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-md shadow-sm hover:shadow-md transition"
                      >
                        {icon}
                        <span className="text-sm font-medium">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ---------- SKILLS SECTION ---------- */}
            <section id="skills" className="mt-24 bg-gradient-to-b from-white to-slate-50 py-16">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold">Skills & Technologies</h2>
                <p className="mt-2 text-slate-600 text-base sm:text-lg">
                  Full-stack developer specializing in mobile & web development.
                </p>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {techGrid.map(([icon, label], idx) => (
                    <div key={idx} className="p-4 border rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition flex flex-col items-center">
                      {icon}
                      <div className="mt-3 font-medium text-sm sm:text-base">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ---------- PROJECTS SECTION ---------- */}
            <section id="projects" className="mt-20 py-12">
              <div className="max-w-7xl mx-auto text-center px-6">
                <h3 className="text-3xl sm:text-4xl font-bold">Featured Projects</h3>
                <p className="mt-2 text-slate-600 text-base sm:text-lg">
                  A selection of my recent work in web and mobile development.
                </p>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Food Runs App Card (matches rest) */}
                  {[[' Food Runs ', 'Flutter, Firebase, Tailwind', 'A modern food delivery app with dark theme UI, real-time ordering, Firebase backend, and smooth UX — designed to make ordering your favorite meals fast and seamless.'],
                    ...projects].map(([title, tech, desc],) => (
                    <div key={title} className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white shadow-xl hover:shadow-2xl transition text-left flex flex-col">
                      <div className="font-bold text-xl mb-2">{title}</div>
                      <div className="text-sm text-gray-300 mb-4">{tech}</div>
                      <div className="text-base leading-relaxed text-gray-200 mb-4">{desc}</div>
                      <div className="mt-auto">
                        <a
                          href={title === 'Cake Website' ? 'https://efewajo.github.io/Diajj-Cakes/index.html' : '#'}
                          target={title === 'Cake Website' ? '_blank' : undefined}
                          rel={title === 'Cake Website' ? 'noopener noreferrer' : undefined}
                          className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-gray-600 to-gray-500 text-white text-sm font-medium shadow hover:scale-105 transition-transform duration-200"
                        >
                          🔍 View Details
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ---------- CONTACT ANCHOR ---------- */}
            <div id="contact" className="pt-12"></div>
          </main>

          {/* ================= FOOTER ================= */}
          <footer className="border-t bg-white mt-12">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center text-center gap-6">
              <div className="font-semibold text-lg flex items-center gap-2">
                🚀 Isaac Portfolio
              </div>
              <p className="text-base text-slate-500">
                App & Web Developer — Open to new opportunities
              </p>
              <div className="flex gap-6 justify-center mt-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-2xl text-gray-600 hover:text-pink-500 transition-colors duration-200"><FaInstagram /></a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-2xl text-gray-600 hover:text-black transition-colors duration-200"><FaXTwitter /></a>
                <a href="https://wa.me/+2349012647010" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-2xl text-gray-600 hover:text-green-500 transition-colors duration-200"><FaWhatsapp /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-2xl text-gray-600 hover:text-blue-600 transition-colors duration-200"><FaLinkedin /></a>
              </div>
              <div className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Isaac Portfolio. All rights reserved.</div>
            </div>
          </footer>
        </div>
      );
}
