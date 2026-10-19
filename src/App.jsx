import React from 'react';

export default function App() {
  const skills = [
    "Full-Stack JavaScript Developer", 
    "React.js & Next.js Frontend", 
    "Node.js & Express REST APIs", 
    "MERN Stack (MongoDB)", 
    "PERN Stack (PostgreSQL)", 
    "State Management (Zustand/Redux)",
    "Tailwind CSS / UI Components",
    "Git & GitHub Workflow"
  ];
  
  const tools = [
    "JavaScript (ES6+)", 
    "React.js", 
    "Node.js", 
    "Express.js", 
    "MongoDB & Mongoose", 
    "PostgreSQL & Prisma", 
    "Tailwind CSS", 
    "VS Code", 
    "Postman", 
    "Vercel / Render"
  ];

  const projects = [
    {
      title: "Student Registration System (MERN)",
      description: "A full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js) to manage student enrollments, user authentication, and academic records efficiently.",
      tech: "React, Node.js, Express, MongoDB, Tailwind CSS",
      demoUrl: "https://my-portfolio.vercel.app",
      credentials: "Role: Admin / Student Demo Available"
    },
    {
      title: "NextGen Core Banking Portal (PERN)",
      description: "A secure full-stack banking portal built with PostgreSQL, Express, React, and Node.js. Features JWT-based authentication, transaction history, and role-based access control.",
      tech: "React, Node.js, Express, PostgreSQL, Tailwind CSS",
      demoUrl: "https://nextgen-banking.bytade.com",
      credentials: "Role: Customer | Pass: password123"
    },
    {
      title: "Property Management System (React & Node)",
      description: "A digital asset management solution designed for institutional property tracking with real-time state updates and REST API backend.",
      tech: "React, Node.js, Express, MongoDB",
      demoUrl: "",
      credentials: ""
    },
    {
      title: "AI Quiz Generator App",
      description: "An interactive React frontend powered by Node.js and AI APIs to automatically generate quizzes and assessments from custom text prompts.",
      tech: "React, Node.js, Express, OpenAI/Gemini API",
      demoUrl: "",
      credentials: ""
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* 1. Header/Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white tracking-tight">TADELE<span className="text-blue-500">.JS</span></h1>
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
            <a href="#about" className="text-slate-300 hover:text-white transition">About</a>
            <a href="#stack" className="text-slate-300 hover:text-white transition">Tech Stack</a>
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
            className="w-full h-full object-cover object-center opacity-40" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90 z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] z-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-30">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Profile Image */}
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl transform scale-105"></div>
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.3)] transform transition hover:scale-105 duration-300">
                  <img 
                    src="/des.jpg" 
                    alt="Tadele Tadiwos" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Main Bio Text */}
            <div className="text-left md:w-2/3">
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-500/15 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-widest">
                Full-Stack JavaScript Developer
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tadele Tadiwos</span>
              </h2>
              <h3 className="text-xl md:text-2xl text-slate-300 font-light mb-10 max-w-3xl leading-relaxed tracking-wide">
                Specialized in building scalable, modern web applications using the <span className="text-blue-400 font-semibold">MERN</span> (MongoDB, Express, React, Node) and <span className="text-blue-400 font-semibold">PERN</span> (PostgreSQL, Express, React, Node) stacks. Focused on clean code, RESTful APIs, and performant user interfaces.
              </h3>
              <div className="flex gap-6">
                <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold transition">Explore MERN/PERN Projects</a>
                <a href="#contact" className="border border-slate-700 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl font-bold transition">Contact Me</a>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 3. About Me Section */}
      <section id="about" className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4 uppercase tracking-wider">About My Expertise</h2>
          <div className="space-y-6 text-lg leading-relaxed text-slate-400">
            <p>
              I am a Computer Science student at <strong className="text-slate-200">Wolaita Sodo University</strong> dedicated exclusively to mastering the <strong className="text-slate-200">JavaScript ecosystem</strong>.
            </p>
            <p>
              My development philosophy revolves around building end-to-end JavaScript applications. From crafting dynamic, responsive user interfaces with <strong className="text-slate-200">React.js & Tailwind CSS</strong> to designing scalable backend REST APIs with <strong className="text-slate-200">Node.js & Express</strong>, I ensure seamless integration across the entire stack.
            </p>
            <p>
              Whether working with NoSQL databases like <strong className="text-slate-200">MongoDB</strong> or relational databases like <strong className="text-slate-200">PostgreSQL</strong>, I focus on clean architecture, state management, security best practices, and efficient database modeling.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Tech Stack Breakdown Section */}
      <section id="stack" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-16 text-center uppercase tracking-wider">Core Stacks</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* MERN STACK */}
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all">
              <div className="text-blue-500 text-xs font-mono uppercase tracking-widest mb-2">Primary Stack</div>
              <h3 className="text-3xl font-bold text-white mb-4">MERN Stack</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Building modern single-page applications (SPAs) with reactive UI components and flexible document-based MongoDB storage.
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-xs text-blue-400">
                <span className="bg-slate-800 px-3 py-1 rounded">MongoDB</span>
                <span className="bg-slate-800 px-3 py-1 rounded">Express.js</span>
                <span className="bg-slate-800 px-3 py-1 rounded">React.js</span>
                <span className="bg-slate-800 px-3 py-1 rounded">Node.js</span>
              </div>
            </div>

            {/* PERN STACK */}
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all">
              <div className="text-cyan-500 text-xs font-mono uppercase tracking-widest mb-2">Relational Stack</div>
              <h3 className="text-3xl font-bold text-white mb-4">PERN Stack</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Developing robust enterprise applications requiring structured schemas, relational data integrity, and SQL queries with PostgreSQL.
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-xs text-cyan-400">
                <span className="bg-slate-800 px-3 py-1 rounded">PostgreSQL</span>
                <span className="bg-slate-800 px-3 py-1 rounded">Express.js</span>
                <span className="bg-slate-800 px-3 py-1 rounded">React.js</span>
                <span className="bg-slate-800 px-3 py-1 rounded">Node.js</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Skills & Tools Section */}
      <section id="skills" className="py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-16 uppercase tracking-wider">Skills & Ecosystem Tools</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-800/20 p-8 rounded-2xl border border-slate-800">
              <h4 className="text-blue-400 font-bold mb-8 uppercase tracking-widest text-sm">Development Capabilities</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map(s => <span key={s} className="px-4 py-2 bg-slate-900 rounded-lg border border-slate-700 text-sm">{s}</span>)}
              </div>
            </div>
            <div className="bg-slate-800/20 p-8 rounded-2xl border border-slate-800">
              <h4 className="text-blue-400 font-bold mb-8 uppercase tracking-widest text-sm">Technologies & Libraries</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map(t => <span key={t} className="px-4 py-2 bg-slate-900 rounded-lg border border-slate-700 text-sm">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-16 text-center uppercase tracking-wider">Featured JavaScript Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="bg-slate-900 p-10 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all group relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl font-bold group-hover:opacity-100 group-hover:text-blue-500 transition-all">0{i+1}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{p.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{p.description}</p>
                  
                  {p.demoUrl && (
                    <div className="mb-6 p-4 bg-slate-950/50 border border-slate-800 rounded-xl">
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-mono mb-2">Demo Access</div>
                      <div className="text-xs text-blue-400/90 font-mono select-all bg-slate-900 p-2 rounded border border-slate-800/50">{p.credentials}</div>
                      <a 
                        href={p.demoUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-2 mt-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded transition"
                      >
                        🌐 Launch Live App
                      </a>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 mt-4">
                   <div className="h-px w-8 bg-blue-500"></div>
                   <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">{p.tech}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <footer id="contact" className="py-24 text-center border-t border-slate-800 bg-slate-950/50 px-6">
        <h2 className="text-4xl font-bold text-white mb-4">Let's Build Something Together</h2>
        <p className="text-slate-400 mb-12 max-w-lg mx-auto">
          Open for Full-Stack JavaScript opportunities, Open Source collaboration, and MERN/PERN projects.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm">
          <a href="mailto:tadiwostadele389@gmail.com" className="text-slate-400 hover:text-blue-500 transition uppercase tracking-widest font-medium">
            Email
          </a>
          <a href="https://github.com/tadele-tade" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition uppercase tracking-widest font-medium">
            GitHub
          </a>
          <a href="https://t.me/Gamchu1" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition uppercase tracking-widest font-medium">
            Telegram
          </a>
        </div>

        <div className="mt-20 text-[10px] text-slate-700 uppercase tracking-[0.2em]">
          © 2026 Tadele Tadiwos • MERN/PERN Full-Stack Developer
        </div>
      </footer>
    </div>
  );
}
