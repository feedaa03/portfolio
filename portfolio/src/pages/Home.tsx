import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun, Check, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

// Assets
import fedaAvatar from "@assets/feda_1783445173796.png";
import povIcon from "@assets/POV_1783445173796.png";
import flowzzelyIcon from "@assets/flowzzely_1783445173796.jpg";
import naseejIcon from "@assets/Nassej_1783445173796.png";
import adatwqLogo from "@assets/adatwq_logo_1783445173796.jpeg";
import sdaiaLogo from "@assets/sdaia_1783445173796.jpg";
import mcitLogo from "@assets/mcit_1783445173796.jpg";
import universityLogo from "@assets/Prince-Sattam-Bin-Abdulaziz-University-01.png_1783445173796.webp";

// ─── Animated mesh background (fixed, behind everything) ─────────────────────
function MeshBackground({ prefersReducedMotion }: { prefersReducedMotion: boolean | null }) {
  const noAnim = prefersReducedMotion;
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Base */}
      <div className="absolute inset-0" style={{ background: "#07080f" }} />

      {/* Blob 1 — violet, top-right */}
      <div className="absolute rounded-full opacity-40"
        style={{
          width: 900, height: 900,
          top: "-25%", right: "-15%",
          background: "radial-gradient(circle, #4f46e5 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: noAnim ? "none" : "blob-drift-1 24s ease-in-out infinite",
        }} />

      {/* Blob 2 — cyan, top-left */}
      <div className="absolute rounded-full opacity-30"
        style={{
          width: 750, height: 750,
          top: "5%", left: "-18%",
          background: "radial-gradient(circle, #0891b2 0%, transparent 70%)",
          filter: "blur(90px)",
          animation: noAnim ? "none" : "blob-drift-2 30s ease-in-out infinite",
        }} />

      {/* Blob 3 — hot pink, bottom-right */}
      <div className="absolute rounded-full opacity-35"
        style={{
          width: 700, height: 700,
          bottom: "10%", right: "5%",
          background: "radial-gradient(circle, #db2777 0%, transparent 70%)",
          filter: "blur(90px)",
          animation: noAnim ? "none" : "blob-drift-3 20s ease-in-out infinite",
        }} />

      {/* Blob 4 — amber, bottom-left */}
      <div className="absolute rounded-full opacity-25"
        style={{
          width: 600, height: 600,
          bottom: "5%", left: "10%",
          background: "radial-gradient(circle, #d97706 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: noAnim ? "none" : "blob-drift-4 26s ease-in-out infinite",
        }} />

      {/* Blob 5 — emerald, center */}
      <div className="absolute rounded-full opacity-20"
        style={{
          width: 500, height: 500,
          top: "40%", left: "38%",
          background: "radial-gradient(circle, #059669 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: noAnim ? "none" : "blob-drift-5 32s ease-in-out infinite",
        }} />

      {/* Dot grid overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)",
        backgroundSize: "54px 54px",
      }} />

      {/* Vignette — darkens edges so text stays readable */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(7,8,15,0.7) 100%)",
      }} />
    </div>
  );
}

// ─── Root ────────────────────────────────────────────────────────────────────
export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden selection:bg-violet-500/30 selection:text-white"
      style={{ background: "transparent" }}>
      <MeshBackground prefersReducedMotion={prefersReducedMotion} />

      {/* Social sidebar — desktop only */}
      <div className="hidden lg:flex fixed left-8 bottom-20 flex-col items-center gap-5 z-40">
        <a href="https://linkedin.com/in/fedaa" target="_blank" rel="noopener noreferrer"
          className="text-white/30 hover:text-white transition-colors duration-200">
          <Linkedin size={17} />
        </a>
        <a href="https://github.com/feedaa03" target="_blank" rel="noopener noreferrer"
          className="text-white/30 hover:text-white transition-colors duration-200">
          <Github size={17} />
        </a>
        <div className="w-px h-20 bg-white/15 mt-1" />
      </div>

      <Navbar />
      <main>
        <Hero prefersReducedMotion={prefersReducedMotion} />
        <About prefersReducedMotion={prefersReducedMotion} />
        <Projects prefersReducedMotion={prefersReducedMotion} />
        <Certifications prefersReducedMotion={prefersReducedMotion} />
        <Skills prefersReducedMotion={prefersReducedMotion} />
        <Tools prefersReducedMotion={prefersReducedMotion} />
        <Contact prefersReducedMotion={prefersReducedMotion} />
      </main>
      <Footer />
    </div>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-sm font-medium text-white/60 hover:text-white transition-colors tracking-wide"
      >
        Feda's space<sup className="text-[9px] ml-0.5 align-super">®</sup>
      </button>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/40">
        {["about", "projects", "certifications", "skills", "contact"].map((id) => (
          <a key={id} href={`#${id}`}
            className="hover:text-white transition-colors capitalize">
            {id === "certifications" ? "Certs" : id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>

      <button onClick={toggleTheme}
        className="text-white/40 hover:text-white transition-colors"
        aria-label="Toggle theme">
        {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
      </button>
    </header>
  );
}

// ─── Section heading with watermark number ───────────────────────────────────
function SectionHeading({
  title, num, label, className = "",
}: { title: string; num: string; label: string; className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div className={`relative mb-16 md:mb-24 overflow-visible ${className}`}>
      {/* Watermark */}
      <span
        className="absolute select-none pointer-events-none font-black leading-none"
        style={{
          top: "-0.15em", left: "-0.02em",
          fontSize: "clamp(8rem, 22vw, 24rem)",
          color: "rgba(255,255,255,0.025)",
          WebkitTextStroke: "1px rgba(255,255,255,0.055)",
        }}>
        {num}
      </span>
      <div className="relative z-10">
        <p className="text-[11px] font-mono tracking-[0.28em] uppercase mb-5"
          style={{ color: "rgba(99,179,237,0.7)" }}>
          // {label}
        </p>
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 0 } : { y: "80%", opacity: 0 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white overflow-hidden"
        >
          {title}
        </motion.h2>
      </div>
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero({ prefersReducedMotion }: { prefersReducedMotion: boolean | null }) {
  return (
    <section className="relative h-screen flex flex-col justify-end px-8 md:px-14 pb-16 md:pb-20 overflow-hidden">

      {/* Avatar — top-right, large and cinematic */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute top-16 right-8 md:right-14 w-28 md:w-36 h-28 md:h-36 rounded-full overflow-hidden"
        style={{ boxShadow: "0 0 60px rgba(79,70,229,0.4), 0 0 120px rgba(79,70,229,0.15)" }}
      >
        <img src={fedaAvatar} alt="Feda Mohammed Alyahya" className="w-full h-full object-cover" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="text-2xl md:text-3xl font-semibold text-white/90 mb-6 tracking-tight"
        >
          Feda Mohammed Alyahya
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[11px] font-mono tracking-[0.28em] uppercase text-white/30 mb-10"
        >
          Riyadh, Saudi Arabia
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={prefersReducedMotion ? { opacity: 0 } : { y: "100%" }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 7.5vw, 8rem)" }}
          >
            <span className="block text-white">AI Product</span>
            <span className="block text-white">Engineer</span>
            <span className="block" style={{ color: "rgba(255,255,255,0.35)" }}>& iOS Developer.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-white/45 text-base md:text-lg mt-8 max-w-md leading-relaxed"
        >
          Building smart, autonomous products at the intersection of iOS development and LLM orchestration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap gap-3 mt-9"
        >
          <a href="#projects"
            className="px-7 py-3.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-white/90 active:scale-[0.97] transition-all">
            See my work
          </a>
          <a href="#contact"
            className="px-7 py-3.5 rounded-full text-sm font-medium text-white/60 hover:text-white transition-colors"
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 right-14 hidden md:flex items-center gap-3 text-white/25 text-[11px] font-mono tracking-widest uppercase"
      >
        <span>Scroll</span>
        <div className="w-8 h-px bg-white/20" />
      </motion.div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────
function About({ prefersReducedMotion }: { prefersReducedMotion: boolean | null }) {
  return (
    <section id="about" className="relative py-32 md:py-40 px-8 md:px-14">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-mono tracking-[0.28em] uppercase text-white/30 mb-10">
          // about
        </p>

        {/* Big statement */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 50, filter: "blur(12px)" }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-semibold leading-[1.15] tracking-tight text-white/80"
          style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.75rem)" }}
        >
          Building at the intersection of{" "}
          <span style={{
            background: "linear-gradient(135deg, #818cf8, #67e8f9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            artificial intelligence
          </span>{" "}
          and mobile, where every product decision is grounded in user reality.
        </motion.p>

        {/* Two-column sub-detail */}
        <div className="grid md:grid-cols-2 gap-10 mt-16 pt-16"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {[
            { label: "Specialisation", body: "GenAI systems, LLM orchestration, multi-agent pipelines, and native iOS apps that feel alive." },
            { label: "Currently", body: "Apple Developer Academy × Tuwaiq Scholar. Open to meaningful product and AI engineering roles." },
          ].map(({ label, body }, i) => (
            <motion.div key={i}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}>
              <p className="text-[11px] font-mono tracking-widest uppercase text-white/30 mb-3">{label}</p>
              <p className="text-white/55 text-base leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projects ────────────────────────────────────────────────────────────────
const PROJECT_ACCENTS = [
  { grad: "from-violet-600/25 to-indigo-500/15", line: "#7c3aed", tag: "rgba(167,139,250,0.5)" },
  { grad: "from-cyan-600/25 to-blue-500/15",     line: "#0891b2", tag: "rgba(103,232,249,0.5)" },
  { grad: "from-pink-600/25 to-rose-500/15",     line: "#db2777", tag: "rgba(249,168,212,0.5)" },
  { grad: "from-amber-600/25 to-orange-500/15",  line: "#d97706", tag: "rgba(252,211,77,0.5)" },
];

function ProjectCard({ project, index, prefersReducedMotion }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const accent = PROJECT_ACCENTS[index % PROJECT_ACCENTS.length];

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
    >
      {/* Glow */}
      <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${accent.grad} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

      {/* Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={(e) => {
          if (prefersReducedMotion || !cardRef.current) return;
          const r = cardRef.current.getBoundingClientRect();
          setTilt({
            x: ((e.clientY - r.top) / r.height - 0.5) * -8,
            y: ((e.clientX - r.left) / r.width - 0.5) * 8,
          });
        }}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        animate={prefersReducedMotion ? {} : { rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        style={{
          transformStyle: "preserve-3d",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
        className="relative h-full rounded-3xl p-8 flex flex-col overflow-hidden cursor-default"
      >
        {/* Colored left accent bar */}
        <div className="absolute top-0 left-0 bottom-0 w-[3px] rounded-l-3xl"
          style={{ background: accent.line }} />

        {/* Number */}
        <span className="text-[11px] font-mono tracking-widest mb-6"
          style={{ color: "rgba(255,255,255,0.25)" }}>
          0{index + 1}
        </span>

        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl mb-6 overflow-hidden flex items-center justify-center shrink-0"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
          {project.icon ? (
            <img src={project.icon} alt={project.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-8 h-8 rounded-full border-2 border-white/20 border-dashed"
              style={{ animation: "spin 10s linear infinite" }} />
          )}
        </div>

        <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{project.name}</h3>
        <p className="text-white/45 text-sm leading-relaxed flex-grow">{project.description}</p>

        <div className="mt-8">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white hover:scale-105 transition-transform"
              style={{ background: accent.line + "33", border: `1px solid ${accent.line}66` }}>
              {project.linkType === "github" ? <Github size={14} /> : "View on App Store"}
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <span className="text-[11px] font-mono tracking-widest text-white/25">Coming soon</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Projects({ prefersReducedMotion }: { prefersReducedMotion: boolean | null }) {
  const projects = [
    {
      name: "POV — Direct Your Day",
      icon: povIcon,
      description: "An iOS app that helps you discover yourself through your favorite filmmaker's lens — daily cinematic journaling with on-device AI.",
      link: "https://apps.apple.com/sa/app/pov-direct-your-day/id6772520415",
      linkType: "appstore",
    },
    {
      name: "Flowzzely",
      icon: flowzzelyIcon,
      description: "A daily puzzle iOS app that teaches the hidden language of flowers — unlock a new bloom each day.",
      link: "https://apps.apple.com/sa/app/flowzzely/id6759537766",
      linkType: "appstore",
    },
    {
      name: "Naseej",
      icon: naseejIcon,
      description: "An iOS app that identifies clothing fabrics via camera and scores their sustainability impact.",
      link: null,
      linkType: null,
    },
    {
      name: "Multi-Agent Compliance AI",
      icon: null,
      description: "Autonomous multi-agent system for regulatory compliance validation, policy auditing, and RAG-powered semantic search across legal frameworks.",
      link: "https://github.com/feedaa03/Capstone-Project-Enterprise-Multi-Agent-Support-Helpdesk/tree/main",
      linkType: "github",
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-8 md:px-14">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Selected Work." num="01" label="projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} prefersReducedMotion={prefersReducedMotion} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Certifications ───────────────────────────────────────────────────────────
function Certifications({ prefersReducedMotion }: { prefersReducedMotion: boolean | null }) {
  const certs = [
    { institution: "Apple Developer Academy × Tuwaiq", logo: adatwqLogo, cert: "iOS Development Scholarship", year: "2025–2026" },
    { institution: "Saudi Data & AI Authority (SDAIA)", logo: sdaiaLogo, cert: "Developing Generative AI Solutions", year: null },
    { institution: "Ministry of Communications and IT", logo: mcitLogo, cert: "Ethics of Artificial Intelligence", year: null },
    { institution: "Prince Sattam Bin Abdulaziz University", logo: universityLogo, cert: "Computer Science and Programming", year: null },
    { institution: "SDAIA", logo: sdaiaLogo, cert: "Artificial Intelligence Concepts and Advanced Applications", year: null },
  ];

  return (
    <section id="certifications" className="relative py-32 px-8 md:px-14">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Certifications." num="02" label="credentials" />
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: index * 0.07, ease: "easeOut" }}
              className="flex items-center gap-5 py-6 group"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span className="text-[11px] font-mono text-white/20 w-7 shrink-0">0{index + 1}</span>

              <div className="w-11 h-11 shrink-0 rounded-xl overflow-hidden bg-white p-1.5 flex items-center justify-center">
                <img src={cert.logo} alt={cert.institution} className="w-full h-full object-contain" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-white/85 text-sm font-medium leading-snug truncate">{cert.cert}</p>
                <p className="text-white/35 text-xs mt-0.5">{cert.institution}</p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                {cert.year && (
                  <span className="text-white/30 text-xs font-mono">{cert.year}</span>
                )}
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium"
                  style={{ background: "rgba(99,179,237,0.1)", color: "rgba(99,179,237,0.8)" }}>
                  <Check size={11} /> Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────
function Skills({ prefersReducedMotion }: { prefersReducedMotion: boolean | null }) {
  const skillGroups = [
    {
      name: "AI / ML",
      color: "#818cf8",
      skills: ["Multi-Agent Systems & Orchestration", "CrewAI", "RAG Pipelines", "LLM Evaluation", "Prompt Engineering", "Function Calling", "Generative AI", "Semantic Search", "Vector Databases"],
    },
    {
      name: "iOS / Apple Ecosystem",
      color: "#67e8f9",
      skills: ["SwiftUI", "AVFoundation", "AVKit", "SwiftData", "CloudKit", "Core ML", "Core Image", "UserNotifications"],
    },
    {
      name: "Web / Foundation",
      color: "#f9a8d4",
      skills: ["React.js", "Tailwind CSS", "HTML", "JavaScript"],
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-8 md:px-14">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Skills." num="03" label="expertise" />
        <div>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: gi * 0.1, ease: "easeOut" }}
              className="grid md:grid-cols-[220px,1fr] gap-6 py-10 items-start"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div>
                <span className="text-[11px] font-mono text-white/20 block mb-1.5">0{gi + 1}</span>
                <h3 className="text-base font-semibold" style={{ color: group.color }}>{group.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={si}
                    initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
                    whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: si * 0.025 }}
                    className="px-4 py-2 rounded-full text-sm text-white/60 hover:text-white transition-colors cursor-default"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Tools ────────────────────────────────────────────────────────────────────
function ToolPill({ tool }: { tool: { name: string; src: string | null; initials?: string } }) {
  const [failed, setFailed] = React.useState(false);
  const initials = tool.initials ?? tool.name.slice(0, 2).toUpperCase();
  const showInitials = !tool.src || failed;

  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-full shrink-0"
      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="w-6 h-6 shrink-0 flex items-center justify-center">
        {!showInitials ? (
          <img src={tool.src!} alt={tool.name} className="w-full h-full object-contain" onError={() => setFailed(true)} />
        ) : (
          <span className="text-[10px] font-bold text-white/50">{initials}</span>
        )}
      </div>
      <span className="text-sm font-medium text-white/55 whitespace-nowrap">{tool.name}</span>
    </div>
  );
}

function Tools({ prefersReducedMotion }: { prefersReducedMotion: boolean | null }) {
  const tools = [
    { name: "Xcode",        src: null, initials: "XC" },
    { name: "VS Code",      src: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
    { name: "GitHub",       src: "https://cdn.simpleicons.org/github/ffffff" },
    { name: "Git",          src: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Netlify",      src: "https://cdn.simpleicons.org/netlify/00C7B7" },
    { name: "Claude AI",    src: null, initials: "CL" },
    { name: "Cursor AI",    src: null, initials: "CU" },
    { name: "CrewAI",       src: null, initials: "CR" },
    { name: "Miro",         src: "https://cdn.simpleicons.org/miro/050038" },
    { name: "Figma",        src: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Sketch",       src: "https://cdn.simpleicons.org/sketch/F7B500" },
    { name: "Confluence",   src: null, initials: "CF" },
    { name: "Teams",        src: null, initials: "MS" },
    { name: "MS Office",    src: null, initials: "OF" },
    { name: "Notion",       src: "https://cdn.simpleicons.org/notion/ffffff" },
    { name: "Google Colab", src: null, initials: "GC" },
    { name: "HuggingFace",  src: "https://cdn.simpleicons.org/huggingface/FFD21E" },
    { name: "ChatGPT",      src: null, initials: "GPT" },
    { name: "Gemini",       src: null, initials: "GM" },
  ];

  // Split into two rows for opposite-direction marquees
  const row1 = tools.slice(0, 10);
  const row2 = tools.slice(10);

  const noAnim = prefersReducedMotion;

  return (
    <section id="tools" className="relative py-32 overflow-hidden">
      <div className="px-8 md:px-14 max-w-5xl mx-auto mb-16">
        <SectionHeading title="Tools I work with." num="04" label="tooling" />
      </div>

      {/* Row 1 — forward */}
      <div className="overflow-hidden mb-4">
        <div className="flex gap-3 w-max"
          style={{ animation: noAnim ? "none" : "ticker-fwd 35s linear infinite" }}>
          {[...row1, ...row1, ...row1, ...row1].map((tool, i) => (
            <ToolPill key={i} tool={tool} />
          ))}
        </div>
      </div>

      {/* Row 2 — backward */}
      <div className="overflow-hidden">
        <div className="flex gap-3 w-max"
          style={{ animation: noAnim ? "none" : "ticker-bwd 28s linear infinite" }}>
          {[...row2, ...row2, ...row2, ...row2].map((tool, i) => (
            <ToolPill key={i} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact({ prefersReducedMotion }: { prefersReducedMotion: boolean | null }) {
  const [copied, setCopied] = useState(false);
  const email = "realfedaa@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-40 px-8 md:px-14 overflow-hidden">
      {/* Glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(79,70,229,0.18) 0%, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 30 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] font-mono tracking-[0.28em] uppercase text-white/30 mb-8">// contact</p>

          <h2 className="font-bold tracking-tight leading-[0.92] text-white mb-8"
            style={{ fontSize: "clamp(3.5rem, 9vw, 8.5rem)" }}>
            Let's build<br />together.
          </h2>

          <div className="flex items-center justify-center gap-2 text-white/30 mb-14 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
            <span>Riyadh, Saudi Arabia</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={handleCopy}
              className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-sm font-semibold hover:bg-white/90 active:scale-[0.97] transition-all w-full sm:w-auto justify-center">
              {copied ? <Check size={17} /> : <Mail size={17} />}
              {copied ? "Copied!" : "Email Me"}
            </button>
            <a href="https://linkedin.com/in/fedaa" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-medium text-white/65 hover:text-white transition-colors w-full sm:w-auto"
              style={{ border: "1px solid rgba(255,255,255,0.13)" }}>
              <Linkedin size={17} />
              LinkedIn
            </a>
            <a href="https://github.com/feedaa03" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-medium text-white/65 hover:text-white transition-colors w-full sm:w-auto"
              style={{ border: "1px solid rgba(255,255,255,0.13)" }}>
              <Github size={17} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="relative py-10 px-8 md:px-14 flex items-center justify-between"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <p className="text-white/25 text-sm font-medium">Feda Mohammed Alyahya</p>
      <p className="text-white/20 text-xs font-mono">{new Date().getFullYear()}</p>
    </footer>
  );
}
