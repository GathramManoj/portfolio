import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Instagram, Code2, Award, Briefcase, GraduationCap, User, ExternalLink, Menu, X, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    frontend: ['React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
    backend: ['Figma', 'Adobe Photoshop', 'canva'],
    languages: ['C', 'Python', 'Java', 'JavaScript', 'TypeScript'],
    tools: ['Git', 'Vercel', 'VS Code',  ]
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              MG
            </h1>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === section ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize py-2 hover:text-cyan-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1">
              <img 
                src="/manoj.jpeg" 
                alt="Manoj Gathram"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Manoj Gathram
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
           Frontend Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Building exceptional digital experiences with modern web technologies. 
             Blending design and technology to create seamless user experiences. I focus on building pixel-perfect interfaces, optimizing usability, and ensuring consistent brand identity across platforms using React.js, Tailwind CSS, and modern design principles.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:manoj.developer41@gmail.com" 
               className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2">
              <Mail size={20} />
              Get in Touch
            </a>
            <a href="https://onetaporbit.vercel.app" 
               target="_blank" 
               rel="noopener noreferrer"
               className="px-8 py-3 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center gap-2">
              <ExternalLink size={20} />
              View Our team
            </a>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-cyan-400"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <GraduationCap className="text-cyan-400" size={32} />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <p className="text-gray-300 mb-2">
                <span className="font-semibold text-cyan-400">B.Tech in Computer Science Engineering</span>
              </p>
              <p className="text-gray-400 mb-1">Third Year Student</p>
              <p className="text-gray-400">Visakha Institute of Engineering and Technology</p>
              <p className="text-gray-400">Narava, Visakhapatnam</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <Award className="text-cyan-400" size={32} />
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                 
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Real-time Project Implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Team Lead at OneTapOrbit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Expert in Modern Frontend Technologies</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <Code2 className="text-cyan-400" size={32} />
                <h3 className="text-2xl font-bold">Expertise</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Frontend Developer and UI/UX Designer with a passion for creating seamless digital experiences. I specialize in building responsive, interactive web applications using React, blending design and functionality to craft user-friendly interfaces. With a strong eye for detail and a focus on usability, I turn ideas into clean, engaging, and production-ready products. I also have experience leading development teams and bringing creative concepts to life through thoughtful design and efficient code.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <User className="text-cyan-400" size={32} />
                <h3 className="text-2xl font-bold">Beyond Code</h3>
              </div>
              <p className="text-gray-300 mb-4">
                <span className="font-semibold text-cyan-400">Languages:</span> English, Hindi, Telugu
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-cyan-400">Hobbies:</span> Reading story books and exploring 
                new coding challenges. I believe in continuous learning and staying updated with the latest 
                technology trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Frontend Development</h3>
              <div className="flex flex-wrap gap-3">
                {skills.frontend.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-400 hover:bg-cyan-400/20 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">UI/UX Designing</h3>
              <div className="flex flex-wrap gap-3">
                {skills.backend.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-400 hover:bg-blue-400/20 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-purple-500/10 border border-purple-400/30 rounded-full text-purple-400 hover:bg-purple-400/20 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-green-500/10 border border-green-400/30 rounded-full text-green-400 hover:bg-green-400/20 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-cyan-400" size={28} />
                <h3 className="text-xl font-bold">OneTapOrbit</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Team project showcasing collaborative development and modern web technologies. 
                Live deployment on Vercel with production-ready features.
              </p>
              <a 
                href="https://onetaporbit.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View Live <ExternalLink size={16} />
              </a>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-cyan-400" size={28} />
                <h3 className="text-xl font-bold">V Connect</h3>
              </div>
              <p className="text-gray-300 mb-6">
                An innovative, all-in-one ERP platform connecting students, faculty, and administration in a unified digital ecosystem.
Streamlines academic, financial, and administrative operations through intuitive dashboards and real-time communication.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-cyan-400" size={28} />
                <h3 className="text-xl font-bold">Real-time Applications</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Developing multiple real-time applications with focus on performance, 
                scalability, and exceptional user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a href="mailto:manoj.developer41@gmail.com" 
               className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 flex items-center gap-4">
              <Mail className="text-cyan-400" size={28} />
              <div className="text-left">
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-semibold">manoj.developer41@gmail.com</p>
              </div>
            </a>

            <a href="tel:+919014993875" 
               className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 flex items-center gap-4">
              <Phone className="text-cyan-400" size={28} />
              <div className="text-left">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white font-semibold">+91 9014993875</p>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://instagram.com/iam_manu41" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110">
              <Instagram className="text-cyan-400" size={24} />
            </a>
            <a href="https://github.com/manojgathram" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110">
              <Github className="text-cyan-400" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/manoj-gathram-86a6972a1" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110">
              <Linkedin className="text-cyan-400" size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Manoj Gathram. Crafted with passion and React.js
          </p>
        </div>
      </footer>
    </div>
  );
}