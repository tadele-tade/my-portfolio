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
  title: "Student Registration System",
  description: "A full-stack web application built with the MERN stack to manage student enrollments, profiles, and academic records efficiently.",
  technologies: "MongoDB, Express, React, Node.js"
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
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-500 tracking-tighter">TADELE.DEV</h1>
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#videos" className="hover:text-blue-400 transition">Videos</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition text-blue-500 border border-blue-500/50 px-4 py-1 rounded-full">Contact</a>
          </div>
        </div>
      </nav>

      {/* 1. Header/Navbar - Fixed to top and transparent */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white tracking-tight">TADELE<span className="text-blue-500">.DEV</span></h1>
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
            <a href="#about" className="text-slate-300 hover:text-white transition">About</a>
            <a href="#skills" className="text-slate-300 hover:text-white transition">Skills</a>
            <a href="#projects" className="text-slate-300 hover:text-white transition">Projects</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
          </div>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2.5 rounded-lg font-bold transition">Get In Touch</a>
        </div>
      </nav>

      {/* 2. Hero Section - Updated with full-width background */}
      <header className="relative min-h-screen flex items-center pt-24">
        {/* Full-width Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/download.jfif" // እዚህ ጋር የቴክኖሎጂ ምስሉን ስም በትክክል ጻፍ
            alt="Technology Background"
            className="w-full h-full object-cover object-center opacity-10" // ግልጽነቱን ለማስተካከል እዚህ ጋር መቀየር ትችላለህ
          />
          {/* A gradient to fade out the background */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/90 z-10"></div>
          {/* A soft glowing effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] z-20"></div>
        </div>

        {/* Content Container - z-30 makes it sit above the background */}
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-30">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Left Side: Profile Image */}
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <div className="relative">
                {/* A light blue ring behind the profile picture */}
                <div className="absolute inset-0 bg-blue-500/15 rounded-full blur-xl transform scale-105"></div>
                
                {/* Profile Image - A clean circular design */}
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
              <h3 className="text-xl md:text-2xl text-slate-400 font-light mb-10">
                A skilled developer and creative graphic designer focused on building functional, elegant digital solutions.
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
        I specialize in utilizing modern tools like **React, maren, PHP, and Python** to solve practical problems.
      </p>
      <p>"I am a proficient MERN Stack developer, experienced in building scalable web applications using MongoDB, Express.js, React, and Node.js."</p>
      <p>
        Beyond coding, I am a professional **Graphic Designer and Video Editor**. 
        I leverage industry-standard software like **Adobe Illustrator, Photoshop, and Premiere Pro** to craft compelling brand identities and engaging social media content. 
        My goal is to deliver seamless digital experiences that are both functional and visually stunning.
      </p>
    </div>
  </div>
</section>

      {/* 4. Video Portfolio Section - አዲስ ቦታ */}
      <section id="videos" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center uppercase tracking-wider">Video Editing Showcase</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700 group hover:border-blue-500/50 transition-all">
              <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-black">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/VIDEO_ID_HERE" 
                  title="TikTok Content Creation"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <h4 className="text-white font-bold">TikTok Content Creation</h4>
              <p className="text-slate-400 text-sm">Creative short-form editing with Premiere Pro & CapCut</p>
            </div>

            {/* Video 2 */}
            <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700 group hover:border-blue-500/50 transition-all">
              <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-black">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/VIDEO_ID_HERE" 
                  title="Digital Marketing Assignment"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <h4 className="text-white font-bold">Digital Marketing Content</h4>
              <p className="text-slate-400 text-sm">Professional video for Facebook ad campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Skills & Tools Section */}
      <section id="skills" className="py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-16 uppercase tracking-wider">Expertise & Tools</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-800/20 p-8 rounded-2xl border border-slate-800">
              <h4 className="text-blue-400 font-bold mb-8 uppercase tracking-widest text-sm">Professional Skills</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map(s => <span key={s} className="px-4 py-2 bg-slate-900 rounded-lg border border-slate-700 text-sm">{s}</span>)}
              </div>
            </div>
            <div className="bg-slate-800/20 p-8 rounded-2xl border border-slate-800">
              <h4 className="text-blue-400 font-bold mb-8 uppercase tracking-widest text-sm">Software Tools</h4>
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
          <h2 className="text-3xl font-bold text-white mb-16 text-center uppercase tracking-wider">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="bg-slate-900 p-10 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl font-bold group-hover:opacity-100 group-hover:text-blue-500 transition-all">0{i+1}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{p.title}</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">{p.description}</p>
                <div className="flex items-center gap-2">
                   <div className="h-px w-8 bg-blue-500"></div>
                   <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">{p.tech}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* 7. Contact Section */}
<footer id="contact" className="py-24 text-center border-t border-slate-800 bg-slate-950/50">
  <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
  <p className="text-slate-500 mb-12 max-w-lg mx-auto">Feel free to reach out for collaborations or project inquiries.</p>
  <div className="flex justify-center space-x-12 text-sm">
    <a href="mailto:tadiwostadele389@gmail.com" className="text-slate-400 hover:text-blue-500 transition uppercase tracking-widest">Email</a>
    <a href="https://www.tiktok.com/@tediyo31" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition uppercase tracking-widest">TikTok</a>
    <a href="https://t.me/@Gamchu1" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition uppercase tracking-widest">Telegram</a>
    
    <a href="#" className="text-slate-400 hover:text-blue-500 transition uppercase tracking-widest">Facebook</a>
  </div>
  <div className="mt-20 text-[10px] text-slate-700 uppercase tracking-[0.2em]">
    © 2026 Tadele Tadiwos • Wolaita Sodo University
  </div>
</footer>
    </div>
  );
}