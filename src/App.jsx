import React from 'react';

export default function App() {
  const skills = [
    "Full-stack Web Developer", 
    "Graphic Design", 
    "Video Editing", 
    "Social Media Management", 
    "TikTok & FB Strategy", 
    "UI/UX Design"
  ];
  
  const tools = [
    "Adobe Illustrator", 
    "Adobe Photoshop", 
    "Adobe Premiere Pro", 
    "CapCut", 
    "VS Code", 
    "XAMPP",
    "Intellijdea",
    "sublimetext"
  ];

  const projects = [
    {
      title: "NextGen Core Banking Portal",
      description: "A secure, web-based banking system with a dual-control architecture. To test the live system, use the demo credentials provided to log in as a Manager or Teller.",
      tech: "PHP (OOP/PDO), MySQL, HTML5, CSS3, JavaScript",
      demoUrl: "https://nextgen-bank.infinityfreeapp.com",
      credentials: "Role: Customer | Temporary Pass: password123"
    },
    {
      title: "Student Registration System",
      description: "A full-stack web application built with the MERN stack to manage student enrollments, profiles, and academic records efficiently.",
      tech: "MongoDB, Express, React, Node.js"
    },
    {
      title: "Social Media Growth & Strategy",
      description: "Managing and scaling presence on TikTok and Facebook through data-driven content and engagement strategies.",
      tech: "Meta Business Suite, TikTok Analytics"
    },
    {
      title: "Property Management System",
      description: "A web-based asset management system for Wolaita Sodo University Informatics College.",
      tech: "PHP, MySQL, JavaScript"
    },
    {
      title: "Traffic Light Simulation",
      description: "An automated signaling system simulation developed using C++ and OpenGL.",
      tech: "C++, OpenGL"
    },
    {
      title: "AI Quiz Generator System",
      description: "An automated assessment tool that uses Natural Language Processing to generate quizzes from raw text or documents.",
      tech: "Python (Flask/FastAPI), OpenAI API, React"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* 1. Header/Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white tracking-tight">TADELE<span className="text-blue-500">.DEV</span></h1>
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
            <a href="#about" className="text-slate-300 hover:text-white transition">About</a>
            <a href="#videos" className="text-slate-300 hover:text-white transition">Videos</a>
            <a href="#skills" className="text-slate-300 hover:text-white transition">Skills</a>
            <a href="#projects" className="text-slate-300 hover:text-white transition">Projects</a>
          </div>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2.5 rounded-lg font-bold transition">Get In Touch</a>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="relative min-h-screen flex items-center pt-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/download.jfif" 
            alt="Technology Background"
            className="w-full h-full object-cover object-center opacity-70" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/90 z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] z-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-30">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Left Side: Profile Image */}
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/15 rounded-full blur-xl transform scale-105"></div>
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-slate-700 shadow-[0_0_40px_rgba(59,130,246,0.3)] transform transition hover:scale-105 duration-300">
                  <img 
                    src="/des.jpg" 
                    alt="Tadele Tadiwos" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Text Content */}
            <div className="text-left md:w-2/3">
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-500/15 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-widest">
                Based in Ethiopia / WSU
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tadele Tadiwos</span>
              </h2>
              <h3 className="text-xl md:text-2xl text-slate-300 font-light mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide italic">
                "I transform ideas into reality through <span className="text-blue-400 font-semibold not-italic">Full-Stack Development</span>, 
                <span className="text-blue-400 font-semibold not-italic"> Professional Video Editing</span>, and 
                <span className="text-blue-400 font-semibold not-italic"> High-End Graphic Design</span>. 
                From building complex systems like <span className="border-b border-blue-500/50">Property Management</span> to crafting visual identities, 
                I deliver solutions that matter."
              </h3>
              <div className="flex gap-6">
                <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold transition">View My Work</a>
                <a href="#contact" className="border border-slate-700 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl font-bold transition">Contact Me</a>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 3. About Me Section */}
      <section id="about" className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4 uppercase tracking-wider">About Me</h2>
          <div className="space-y-6 text-lg leading-relaxed text-slate-400">
            <p>
              I am a dedicated **Informatics student at Wolaita Sodo University** with a deep-rooted passion for software engineering and digital creativity. 
              My journey bridges the gap between complex backend systems and high-end visual design.
            </p>
            <p>
              As a **Full-stack Developer**, I have successfully built real-world solutions, including a **Web-based Property Management System** for my university and automated registration platforms. 
              I specialize in utilizing modern tools like **React, MERN stack, PHP, and Python** to solve practical problems.
            </p>
            <p>
              Beyond coding, I am a professional **Graphic Designer and Video Editor**. 
              I leverage industry-standard software like **Adobe Illustrator, Photoshop, and Premiere Pro**
