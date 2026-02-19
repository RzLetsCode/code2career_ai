'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Zap, Server, Globe, Github, ExternalLink, Mail, Linkedin, Youtube } from 'lucide-react';

const projectData = {
  'rag-system': {
    title: 'Enterprise AI RAG System',
    description: 'A sophisticated Retrieval-Augmented Generation pipeline designed for secure, large-scale enterprise knowledge management.',
    tech: ['Python', 'LangChain', 'Pinecone', 'Azure OpenAI', 'Docker'],
    architecture: 'Multi-stage pipeline featuring semantic hybrid search, dynamic re-ranking, and citation-backed response generation.',
    scalability: 'Horizontally scalable microservices deployed on Azure Kubernetes Service, processing thousands of documents concurrently.',
    impact: 'Implemented for a Fortune 500 financial institution, reducing document retrieval time by 85% and improving answer accuracy by 60%.',
    features: [
      'Hybrid Semantic Search with Pinecone',
      'Secure Document Chunking & Embedding',
      'Contextual Citation Generation',
      'Enterprise-grade Security & PII Masking'
    ]
  },
  'multi-agent': {
    title: 'Multi-Agent AI Orchestration',
    description: 'An autonomous agent framework that orchestrates specialized LLM agents to solve complex business process automations.',
    tech: ['Python', 'Agent Framework', 'Snowflake', 'Azure', 'FastAPI'],
    architecture: 'Hierarchical agent architecture with a central manager and specialized worker agents for research, execution, and validation.',
    scalability: 'Distributed task queue system capable of handling hundreds of parallel agentic workflows across different cloud providers.',
    impact: 'Automated 70% of insurance claim verification processes, resulting in millions of dollars in operational savings annually.',
    features: [
      'Self-correcting Agent Loops',
      'Cross-Model Orchestration (GPT-4, Claude, Llama)',
      'Automated Tool Use & API Integration',
      'Comprehensive Execution Traceability'
    ]
  },
  'healthcare-analytics': {
    title: 'Healthcare AI Analytics Platform',
    description: 'Next-generation clinical decision support platform leveraging predictive modeling on massive healthcare datasets.',
    tech: ['Azure AI', 'Python', 'Snowflake', 'Data Science', 'PyTorch'],
    architecture: 'Real-time streaming data pipeline integrated with distributed machine learning models for predictive patient insights.',
    scalability: 'Petabyte-scale data processing using Snowflake and Azure Synapse, optimized for low-latency clinical dashboarding.',
    impact: 'Deployed across multiple hospital networks, predicting patient readmission risks with 92% accuracy and improving clinical efficiency.',
    features: [
      'Real-time Patient Risk Scoring',
      'HIPAA-Compliant Data Processing',
      'Predictive Readmission Modeling',
      'Interactive Clinical Dashboards'
    ]
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const id = params.id as string;
  const project = projectData[id as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
          <Link href="/" className="text-cyan-400 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Rajesh Kumar</Link>
          <div className="flex gap-6 text-sm font-bold">
            <Link href="https://hashnode.com/@rz111" target="_blank" className="hover:text-cyan-400">Blogs</Link>
            <Link href="https://www.youtube.com/@Code2Career_AI" target="_blank" className="hover:text-red-500">YouTube</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 font-black mb-12 group hover:text-cyan-300 transition-colors">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
        </Link>

        <header className="mb-16">
          <div className="w-16 h-16 bg-cyan-500/10 rounded-3xl flex items-center justify-center text-cyan-400 mb-8 border border-cyan-500/20 shadow-lg shadow-cyan-500/5">
            {id === 'rag-system' ? <Zap size={32} /> : id === 'multi-agent' ? <Server size={32} /> : <Globe size={32} />}
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight">{project.title}</h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium mb-12">{project.description}</p>
          
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t, i) => (
              <span key={i} className="px-5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-black uppercase tracking-widest text-slate-300 shadow-sm">{t}</span>
            ))}
          </div>
        </header>

        <div className="grid gap-12 mb-20">
          <section className="p-10 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] -z-10"></div>
            <h2 className="text-xs font-black text-cyan-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              Technical Architecture
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed font-medium">{project.architecture}</p>
          </section>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 bg-slate-900/40 border border-slate-800 rounded-[2.5rem]">
              <h2 className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em] mb-6">Scalability & Cloud</h2>
              <p className="text-slate-400 font-medium leading-relaxed">{project.scalability}</p>
            </div>
            <div className="p-10 bg-slate-900/40 border border-slate-800 rounded-[2.5rem]">
              <h2 className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] mb-6">Key Features</h2>
              <ul className="space-y-4">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-bold">
                    <Zap size={14} className="text-cyan-400 mt-1 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section className="p-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-[3rem] border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
            <h2 className="text-sm font-black text-cyan-400 uppercase tracking-[0.4em] mb-8">Business Impact & Success</h2>
            <p className="text-2xl md:text-3xl font-black text-white leading-tight italic decoration-cyan-500/30 underline underline-offset-8">
              "{project.impact}"
            </p>
          </section>
        </div>

        {/* Contact Footer */}
        <footer className="pt-20 border-t border-slate-800/50 text-center">
          <h3 className="text-3xl font-black mb-10">Interested in this architecture?</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="mailto:rajeshrajrz111@gmail.com" className="p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all">
              <Mail size={24} />
            </Link>
            <Link href="https://linkedin.com/in/rajesh-kumar-04405962/" target="_blank" className="p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all">
              <Linkedin size={24} />
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
