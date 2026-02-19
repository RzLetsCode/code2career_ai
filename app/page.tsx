'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code, Database, Zap } from 'lucide-react';

export default function Home() {
  const skills = [
    { category: 'AI & ML', items: ['LLMs', 'RAG Pipelines', 'Multi-Agent Systems', 'Azure OpenAI', 'Pinecone'] },
    { category: 'Data Platforms', items: ['Snowflake', 'Python', 'SQL', 'ETL', 'Data Engineering'] },
    { category: 'Cloud & DevOps', items: ['Azure Cloud', 'GitHub Actions', 'CI/CD', 'Docker', 'Kubernetes'] },
  ];

  const projects = [
    {
      title: 'Enterprise AI RAG System',
      description: 'Built a Retrieval-Augmented Generation pipeline for enterprise knowledge management using LLMs and Pinecone vector database.',
      tech: ['Python', 'LangChain', 'Pinecone', 'Azure OpenAI'],
      link: '#',
    },
    {
      title: 'Multi-Agent AI Orchestration',
      description: 'Designed and deployed a multi-agent system for automated business process automation with 8+ specialized agents.',
      tech: ['Python', 'Agent Framework', 'Snowflake', 'Azure'],
      link: '#',
    },
    {
      title: 'Healthcare AI Analytics Platform',
      description: 'Developed a healthcare analytics platform processing 100K+ records daily with predictive insights and real-time dashboards.',
      tech: ['Azure AI', 'Python', 'Snowflake', 'Data Science'],
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400">Rajesh Kumar</h1>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition">About</a>
            <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Introduction */}
      <section className="py-24 px-4 text-center max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <p className="text-cyan-400 text-sm font-semibold">🚀 Enterprise AI Architect</p>
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Building Production-Grade AI Systems
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          I\'m an Enterprise AI Architect with 8+ years of experience building scalable AI solutions for healthcare, finance, and enterprise domains. Specializing in Snowflake, Azure OpenAI, and production-ready AI pipelines.
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Currently leading AI initiatives at Kforce, designing enterprise-grade systems that process millions of records and deliver real-time insights through advanced RAG and multi-agent architectures.
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition flex items-center gap-2">
            View My Work <ExternalLink size={18} />
          </a>
          <a href="#contact" className="px-8 py-3 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition">
            Get In Touch
          </a>
        </div>
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/RzLetsCode" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition">
            <Github className="text-gray-400 hover:text-cyan-400" size={24} />
          </a>
          <a href="https://linkedin.com/in/rajesh-kumar-04405962/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition">
            <Linkedin className="text-gray-400 hover:text-cyan-400" size={24} />
          </a>
          <a href="mailto:rajeshrajrz111@gmail.com" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition">
            <Mail className="text-gray-400 hover:text-cyan-400" size={24} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <Code size={28} /> Expertise
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>✅ <strong>AI & LLMs</strong>: RAG pipelines, multi-agent systems, prompt engineering</li>
                <li>✅ <strong>Data Platforms</strong>: Snowflake, data warehousing, analytics</li>
                <li>✅ <strong>Cloud Architecture</strong>: Azure, scalable infrastructure design</li>
                <li>✅ <strong>Production AI</strong>: MLOps, deployment, monitoring, optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <Zap size={28} /> Impact
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>🎯 <strong>Healthcare</strong>: Built AI systems processing 100K+ daily records</li>
                <li>🎯 <strong>Enterprise</strong>: Deployed multi-agent systems across Fortune 500 companies</li>
                <li>🎯 <strong>Performance</strong>: Optimized pipelines achieving 99.9% uptime</li>
                <li>🎯 <strong>Innovation</strong>: Published technical content on AI architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Featured Projects</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Showcasing enterprise-grade AI solutions I've built and deployed in production</p>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition group">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                  <Database size={24} /> {skill.category}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item, j) => (
                    <li key={j} className="text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
            Have an AI project? Let's discuss how I can help build production-grade AI systems for your organization.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:rajeshrajrz111@gmail.com" className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition group">
              <Mail className="text-cyan-400 group-hover:text-cyan-300 mx-auto mb-3" size={32} />
              <p className="text-gray-300 font-semibold">rajeshrajrz111@gmail.com</p>
            </a>
            <a href="tel:+918800911440" className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition group">
              <Zap className="text-emerald-400 group-hover:text-emerald-300 mx-auto mb-3" size={32} />
              <p className="text-gray-300 font-semibold">+91-8800911440</p>
            </a>
            <a href="https://linkedin.com/in/rajesh-kumar-04405962/" target="_blank" rel="noopener noreferrer" className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition group">
              <Linkedin className="text-cyan-400 group-hover:text-cyan-300 mx-auto mb-3" size={32} />
              <p className="text-gray-300 font-semibold">Connect on LinkedIn</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700/50 bg-slate-950">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 Rajesh Kumar. Enterprise AI Architect based in Pune, India.</p>
        </div>
      </footer>
    </div>
  );
}
