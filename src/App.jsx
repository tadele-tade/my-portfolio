import React, { useState } from 'react';
import { 
  Code2, 
  Send, 
  Server, 
  Layout, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  ExternalLink, 
  Mail, 
  MessageSquare, 
  User, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles, 
  Copy, 
  Check, 
  GraduationCap,
  Code as Github // <-- 'Github' የሚለውን ስም ከሌላ ንጹህ አዶ ጋር alias በማድረግ ስህተቱን ያስወግደዋል
} from 'lucide-react';

export default function App() {
  // Navigation & UI States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('All');
  
  // Contact Form States
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  
  // Copy to Clipboard state
  const [copiedText, setCopiedText] = useState(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    triggerToast(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      triggerToast('Please fill in all fields before sending.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      triggerToast('🚀 Message sent successfully! Tadele will get back to you soon.');
    }, 1200);
  };

  // Skills & Ecosystem Breakdown
  const techCategories = {
    Frontend: [
      { name: "React.js", desc: "Component Architecture, Custom Hooks, Performance" },
      { name: "Next.js", desc: "SSR, SSG, App Router & API Routes" },
      { name: "Tailwind CSS", desc: "Utility-first Responsive Styling & UI Systems" },
      { name: "State Management", desc: "Zustand, Redux Toolkit, Context API" },
      { name: "JavaScript (ES6+)", desc: "Async/Await, Closures, DOM Architecture" }
    ],
    Backend: [
      { name: "PHP", desc: "Modern PHP 8+, Object-Oriented Architecture, PDO & REST APIs" },
      { name: "Node.js", desc: "Event-driven Asynchronous Backend Engine" },
      { name: "Express.js", desc: "RESTful Web APIs, Middleware & Routing" },
      { name: "JWT & Auth", desc: "Session Security, OAuth & Role-based Access" },
      { name: "REST APIs", desc: "API Design, Endpoint Optimization & CORS" }
    ],
    Databases: [
      { name: "MySQL", desc: "Relational Queries, Stored Procedures, Indexes & Prepared Statements" },
      { name: "PostgreSQL", desc: "Relational Tables, Foreign Keys & ACID Compliance" },
      { name: "MongoDB", desc: "Document Aggregation & Schema Modeling" },
      { name: "Mongoose & Prisma", desc: "Object Modeling & Modern ORM Querying" }
    ],
    Tools: [
      { name: "Git & GitHub", desc: "Version Control & Collaborative CI Workflows" },
      { name: "VS Code", desc: "Primary IDE & Custom Extensions Stack" },
      { name: "Postman", desc: "API Testing, Auth Simulation & Documentation" },
      { name: "Vercel / Render", desc: "Cloud Deployment & Continuous Delivery" }
    ]
  };

 // Portfolio Projects Data
  const projects = [
    {
      id: "student-mern",
      title: "Student Registration System",
      category: "MERN",
      tagline: "Comprehensive Academic Management Platform",
      description: "A robust full-stack enterprise portal built using the MERN stack (MongoDB, Express, React, Node.js). Designed for educational institutions to streamline student enrollment workflows, automate class assignments, track academic transcripts, and deliver real-time administrative reporting.",
      architecture: ["React 18", "Node.js/Express", "MongoDB Atlas", "Tailwind CSS", "JWT Auth"],
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      demoUrl: "https://my-portfolio.vercel.app",
      credentials: "Role: Admin / Student Demo Available",
      highlights: [
        "Dynamic role-based dashboards for Students, Faculty, and Admins",
        "Automated PDF grade report generator and export system",
        "MongoDB Schema optimization for fast querying of historical records"
      ]
    },
    {
      id: "banking-php",
      title: "NextGen Core Banking Portal",
      category: "PHP / SQL",
      tagline: "High-Security Relational Financial Dashboard",
      description: "A secure full-stack banking portal built with PHP and SQL for strict ACID compliance and transaction integrity. Features secure authentication, balance transfers, real-time transaction history logs, and granular access controls for bank personnel.",
      architecture: ["React / HTML5", "PHP REST API", "MySQL / PostgreSQL", "Tailwind CSS"],
      tech: ["PHP", "MySQL / PostgreSQL", "JavaScript", "Tailwind CSS"],
      demoUrl: "https://nextgen-banking.bytade.com",
      credentials: "Role: Customer | Pass: password123",
      highlights: [
        "ACID-compliant SQL database structure with relational foreign keys",
        "Real-time transaction history tracking with pagination & search",
        "Encrypted passwords using bcrypt with PDO prepared statements for high security"
      ]
    },
    {
      id: "property-mgmt",
      title: "Property Management System",
      category: "MERN",
      tagline: "Institutional Digital Asset & Asset Tracking",
      description: "A modern property management solution created to monitor asset states, maintenance schedules, tenant records, and lease lifecycles with real-time UI updates powered by Node.js REST API backend.",
      architecture: ["React", "Node.js", "Express API", "MongoDB Mongoose"],
      tech: ["React", "Node.js", "Express", "MongoDB"],
      demoUrl: "",
      credentials: "Internal Enterprise Access Only",
      highlights: [
        "Real-time status updates for property maintenance requests",
        "Custom image upload pipeline with lazy loading",
        "Centralized RESTful API handling multiple property categories"
      ]
    },
    {
      id: "ai-quiz",
      title: "AI Assessment & Quiz Generator",
      category: "AI / React",
      tagline: "Smart Automated Test Suite Powered by Generative AI",
      description: "An interactive assessment tool that connects React frontend interfaces with custom AI endpoints (OpenAI / Gemini) via Node.js backends. Generates tailored quizzes, multiple-choice questions, and instant answer evaluations from user prompts.",
      architecture: ["React", "Node.js API", "OpenAI / Gemini API", "Tailwind CSS"],
      tech: ["React", "Node.js", "Express", "OpenAI/Gemini API"],
      demoUrl: "",
      credentials: "API Integration Demo Mode",
      highlights: [
        "Automated question generation based on difficulty level & domain",
        "Instant score analytics and answer explanations",
        "Responsive, high-engagement quiz interface with timer controls"
      ]
    },
    {
      id: "ecommerce-pern",
      title: "Full-Stack E-Commerce Platform",
      category: "PERN",
      tagline: "Scalable Relational Online Store & Checkout System",
      description: "An advanced e-commerce web application engineered using the PERN stack (PostgreSQL, Express.js, React, Node.js). Features secure user authentication, dynamic product catalog management, shopping cart workflows, relational order processing, and transaction safety backed by PostgreSQL ACID compliance.",
      architecture: ["React", "Node.js/Express", "PostgreSQL", "Tailwind CSS", "JWT Auth"],
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      demoUrl: "https://github.com/tadele-tade/my-portfolio.git",
      credentials: "Role: Customer / Admin Dashboard Available",
      highlights: [
        "Relational database schema handling products, categories, users, and orders with foreign keys",
        "Secure user sessions and authentication using JSON Web Tokens (JWT) and bcrypt",
        "Dynamic cart state management and real-time stock updating upon checkout"
      ]
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 font-sans selection:bg-blue-500/30 relative overflow-x-hidden">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-10 right-10 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[100] bg-slate-900/90 border border-blue-500/50 text-white px-5 py-3.5 rounded-2xl shadow-2xl shadow-blue-950/80 backdrop-blur-md flex items-center gap-3 animate-slide-up">
          <Sparkles className="w-5 h-5 text-blue-400 shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* 1. Glass Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1d]/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition">
              T
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              TADELE<span className="text-blue-400">.JS</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-semibold text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#stack" className="hover:text-blue-400 transition">Tech Stack</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#contact" 
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-xl group bg-gradient-to-br from-blue-500 to-cyan-400 group-hover:from-blue-500 group-hover:to-cyan-400 hover:text-white text-white shadow-md shadow-blue-500/20 transition"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-950/80 rounded-[10px] group-hover:bg-opacity-0">
                Get In Touch
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg bg-slate-800/50 border border-slate-700/50"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0f1d] border-b border-slate-800 px-6 py-6 space-y-4 animate-fade-in">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-blue-400 font-medium py-1"
            >
              About Me
            </a>
            <a 
              href="#stack" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-blue-400 font-medium py-1"
            >
              Tech Stacks
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-blue-400 font-medium py-1"
            >
              Capabilities
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-blue-400 font-medium py-1"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition"
            >
              Contact Me
            </a>
          </div>
        )}
      </nav>

      {/* 2. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Main Text Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Special Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                Full-Stack Developer
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300">
                  Tadele Tadiwos
                </span>
              </h1>

              <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
                Passionate engineer focused on architecting high-performance web applications using modern <span className="text-blue-400 font-semibold">PHP & SQL</span> ecosystems alongside <span className="text-cyan-400 font-semibold">MERN</span> and <span className="text-indigo-400 font-semibold">PERN</span> full-stack architecture.
              </p>

              {/* Quick Info Badges */}
              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-2">
                <div className="flex items-center gap-2 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-800">
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  <span>Wolaita Sodo University</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-800">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>PHP & JS Web Engineer</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a 
                  href="#projects" 
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30 flex items-center gap-2 text-sm"
                >
                  Explore Work
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a 
                  href="#contact" 
                  className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold px-7 py-3.5 rounded-xl transition text-sm"
                >
                  Contact Me
                </a>
              </div>

              {/* Quick Social Links */}
              <div className="flex items-center gap-5 pt-6 text-slate-400">
                <a 
                  href="https://github.com/tadele-tade" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-blue-400 transition p-2 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700"
                  title="GitHub Profile"
                >
                  <Code2 className="w-5 h-5 text-blue-400"/>
                </a>
                <a 
                  href="https://t.me/Gamchu1" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-blue-400 transition p-2 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700"
                  title="Telegram Profile"
                >
                  <Send className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:tadiwostadele389@gmail.com"
                  className="hover:text-blue-400 transition p-2 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700"
                  title="Direct Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                            <a 
  href="https://github.com/tadele-tade" 
  target="_blank" 
  rel="noreferrer"
  className="hover:text-blue-400 transition p-2 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700"
  title="GitHub Profile"
>
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
</a>
              </div>

            </div>
            {/* Profile Avatar Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                {/* Neon Glow Outer Rings */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-xl opacity-40 animate-pulse"></div>
                
                <div className="relative bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-2xl backdrop-blur-xl max-w-sm">
                  
                  {/* Photo Container */}
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 border border-slate-700/50 group">
                    <img 
                      src="/des.jpg" 
                      alt="Tadele Tadiwos" 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('bg-gradient-to-br', 'from-blue-900', 'to-slate-900', 'flex', 'items-center', 'justify-center');
                        e.target.parentElement.innerHTML = `<div class="text-center p-4"><span class="text-5xl font-black text-blue-400">TT</span><p class="text-xs text-slate-400 mt-2 font-mono">Tadele Tadiwos</p></div>`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Quick Specs */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                      <span className="text-slate-400">Primary Focus</span>
                      <span className="font-mono text-blue-400 font-semibold">PHP / Node.js / SQL</span>
                    </div>
                    <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                      <span className="text-slate-400">Education</span>
                      <span className="font-mono text-slate-200">CS @ WSU</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Availability</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        Open to Roles
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section id="about" className="py-24 bg-slate-900/40 relative border-t border-b border-slate-800/50">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="flex items-center gap-3 mb-6">
            <User className="w-5 h-5 text-blue-400" />
            <h2 className="text-xs uppercase tracking-widest font-bold text-blue-400">Engineering Philosophy</h2>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 leading-tight">
            Building Robust, High-Performance Applications across Modern PHP and JavaScript Ecosystems.
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-slate-300 leading-relaxed text-sm">
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <Layout className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white mb-2 text-base">Academic Foundation</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                As a Computer Science student at <strong>Wolaita Sodo University</strong>, I combine foundational CS concepts—data structures, software patterns, and system design—with modern web engineering.
              </p>
            </div>

            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white mb-2 text-base">PHP & Relational SQL</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Specializing in secure backend architectures using <strong>PHP</strong>, <strong>MySQL</strong>, and <strong>PostgreSQL</strong> with focus on prepared statements, transaction integrity, and REST APIs.
              </p>
            </div>

            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white mb-2 text-base">Reactive Frontend & MERN</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Crafting reactive web application interfaces using <strong>React.js and Tailwind CSS</strong>, along with full-stack MERN stack implementations.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Core Stacks Breakdown Section */}
      <section id="stack" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400">Core Stacks</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Full-Stack Architecture
            </h3>
            <p className="text-slate-400 text-sm">
              Extensive experience with PHP, Relational SQL, and Modern JavaScript stacks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* PHP & SQL Card */}
            <div className="relative group bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 p-8 rounded-3xl transition duration-300 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition"></div>
              
              <div className="text-indigo-400 text-xs font-mono font-semibold uppercase tracking-widest mb-2">
                Relational / Enterprise
              </div>
              <h4 className="text-3xl font-extrabold text-white mb-4">PHP & SQL</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Engineered for strict data compliance, financial applications, transaction isolation, and secure relational database architectures.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300">
                  <span className="text-indigo-400 font-bold block mb-1">P</span>
                  PHP 8+ Backend
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300">
                  <span className="text-indigo-400 font-bold block mb-1">M</span>
                  MySQL / Postgres
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300">
                  <span className="text-indigo-400 font-bold block mb-1">R</span>
                  React Frontend
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300">
                  <span className="text-indigo-400 font-bold block mb-1">A</span>
                  RESTful APIs
                </div>
              </div>
            </div>

            {/* MERN Card */}
            <div className="relative group bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 p-8 rounded-3xl transition duration-300 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition"></div>
              
              <div className="text-blue-400 text-xs font-mono font-semibold uppercase tracking-widest mb-2">
                Primary NoSQL Stack
              </div>
              <h4 className="text-3xl font-extrabold text-white mb-4">MERN Stack</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Ideal for modern, highly dynamic web applications requiring continuous scaling, reactive component architecture, and document-based flexibility.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300">
                  <span className="text-blue-400 font-bold block mb-1">M</span>
                  MongoDB Atlas
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300">
                  <span className="text-blue-400 font-bold block mb-1">E</span>
                  Express.js Router
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300">
                  <span className="text-blue-400 font-bold block mb-1">R</span>
                  React.js Client
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300">
                  <span className="text-blue-400 font-bold block mb-1">N</span>
                  Node.js Server
                </div>
              </div>
            </div>

            {/* PERN Card */}
            <div className="relative group bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 p-8 rounded-3xl transition duration-300 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition"></div>

              <div className="text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest mb-2">
                Node Relational Stack
              </div>
              <h4 className="text-3xl font-extrabold text-white mb-4">PERN Stack</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Designed for enterprise platforms requiring strict SQL relational data integrity, foreign key relations, complex queries, and transactional safety.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300">
                  <span className="text-cyan-400 font-bold block mb-1">P</span>
                  PostgreSQL
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300">
                  <span className="text-cyan-400 font-bold block mb-1">E</span>
                  Express Backend
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300">
                  <span className="text-cyan-400 font-bold block mb-1">R</span>
                  React Interfaces
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300">
                  <span className="text-cyan-400 font-bold block mb-1">N</span>
                  Node.js API
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Interactive Capabilities & Tools Inspector */}
      <section id="skills" className="py-24 bg-slate-900/40 border-t border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400">Technical Arsenal</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Skills & Ecosystem Inspector
            </h3>
            <p className="text-slate-400 text-sm">
              Explore capabilities categorized by stack tier.
            </p>
          </div>

          {/* Interactive Category Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['All', 'Frontend', 'Backend', 'Databases', 'Tools'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Display */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techCategories)
              .filter(([categoryKey]) => activeTab === 'All' || activeTab === categoryKey)
              .flatMap(([categoryKey, items]) => 
                items.map((item, idx) => (
                  <div 
                    key={`${categoryKey}-${idx}`} 
                    className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 p-6 rounded-2xl transition group hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-white text-base group-hover:text-blue-400 transition">
                        {item.name}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 uppercase tracking-wide">
                        {categoryKey}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))
              )}
          </div>

        </div>
      </section>

      {/* 6. Featured Projects with Interactive Filter & Modal */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Selected Works</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                Featured Applications
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
              {['All', 'PHP / SQL', 'MERN', 'AI / React'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((p, idx) => (
              <div 
                key={p.id} 
                className="group bg-slate-900/80 border border-slate-800/90 hover:border-blue-500/40 p-8 rounded-3xl transition duration-300 flex flex-col justify-between relative overflow-hidden shadow-xl"
              >
                
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono font-bold text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                      {p.category}
                    </span>
                    <span className="text-xs font-mono text-slate-600 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </h4>

                  <p className="text-xs text-blue-300 font-medium mb-4">
                    {p.tagline}
                  </p>

                  <p className="text-slate-400 text-xs leading-relaxed mb-6 line-clamp-3">
                    {p.description}
                  </p>

                  {/* Credentials Preview */}
                  {p.credentials && (
                    <div className="mb-6 p-3.5 bg-slate-950/70 border border-slate-800 rounded-xl flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400 truncate mr-2">{p.credentials}</span>
                      <button 
                        onClick={() => handleCopy(p.credentials, 'Credentials')}
                        className="text-blue-400 hover:text-blue-300 shrink-0 p-1"
                        title="Copy credentials"
                      >
                        {copiedText === 'Credentials' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  )}
                </div>

                {/* Footer Controls */}
                <div className="pt-4 border-t border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button 
                      onClick={() => setSelectedProject(p)}
                      className="text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl transition flex items-center gap-2"
                    >
                      <span>Architecture Details</span>
                      <Terminal className="w-3.5 h-3.5" />
                    </button>

                    {p.demoUrl && (
                      <a 
                        href={p.demoUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl transition flex items-center gap-2 shadow-md shadow-blue-600/20"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Project Details Terminal Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl space-y-6">
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-full bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
              <Terminal className="w-4 h-4" />
              <span>Project Specification / {selectedProject.category}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Architecture Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Architecture Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.architecture.map((item) => (
                  <span key={item} className="text-xs font-mono bg-blue-500/10 border border-blue-500/20 text-blue-300 px-3 py-1 rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Engineering Features</h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              {selectedProject.demoUrl ? (
                <a 
                  href={selectedProject.demoUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2"
                >
                  Launch App <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-xs text-slate-500 font-mono">Demo restricted to enterprise environment</span>
              )}

              <button 
                onClick={() => setSelectedProject(null)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold px-5 py-2.5 rounded-xl"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 7. Contact Section */}
      <footer id="contact" className="py-24 border-t border-slate-800/80 bg-slate-950/60 relative">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                Get In Touch
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Let's Build Scalable Software Together
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed">
                Open for full-time Full-Stack software engineering roles, PHP & SQL backends, MERN/PERN projects, and enterprise web engineering opportunities.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 pt-4 text-sm">
                
                <div 
                  onClick={() => handleCopy('tadiwostadele389@gmail.com', 'Email')}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 cursor-pointer transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-slate-400">Email Address</div>
                    <div className="text-slate-200 font-mono font-medium truncate group-hover:text-blue-400 transition">
                      tadiwostadele389@gmail.com
                    </div>
                  </div>
                </div>

                <a 
                  href="https://t.me/Gamchu1" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Telegram Direct</div>
                    <div className="text-slate-200 font-mono font-medium group-hover:text-cyan-400 transition">
                      @Gamchu1
                    </div>
                  </div>
                </a>

                <a 
                  href="https://github.com/tadele-tade" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                    <Code2 className="w-5 h-5"/>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">GitHub Profile</div>
                    <div className="text-slate-200 font-mono font-medium group-hover:text-indigo-400 transition">
                      github.com/tadele-tade
                    </div>
                  </div>
                </a>

              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900/90 border border-slate-800 p-8 rounded-3xl shadow-xl">
                
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                  Send a Direct Message
                </h3>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Johnson"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2">Your Email</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2">Message</label>
                    <textarea 
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Tadele, let's discuss a project or opportunity..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 text-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

              </div>
            </div>

          </div>

          {/* Copyright */}
          <div className="mt-20 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono">
            <span>© 2026 Tadele Tadiwos. All Rights Reserved.</span>
            <span>Computer Science • Wolaita Sodo University</span>
          </div>

        </div>
      </footer>

    </div>
  );
}
