export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400">Rajesh Kumar</h1>
          <p className="text-gray-400">Enterprise AI Architect</p>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-cyan-400 text-lg mb-4">ENTERPRISE AI ARCHITECT</p>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Building Production-Grade AI Systems</h2>
          <p className="text-xl text-gray-400 mb-8">Specialized in Snowflake, generative AI, and scalable data platforms. Based in Pune, India.</p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-lg transition">
              View Projects
            </a>
            <a href="https://www.youtube.com/@Code2Career_AI" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 font-bold rounded-lg transition">
              Watch Videos
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="mailto:rajeshrajrz111@gmail.com" className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
              <p className="font-semibold mb-2">Email</p>
              <p className="text-cyan-400">rajeshrajrz111@gmail.com</p>
            </a>
            <a href="tel:+918800911440" className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
              <p className="font-semibold mb-2">Phone</p>
              <p className="text-cyan-400">+91-8800911440</p>
            </a>
            <a href="https://linkedin.com/in/rajesh-kumar-04405962/" target="_blank" rel="noopener noreferrer" className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
              <p className="font-semibold mb-2">LinkedIn</p>
              <p className="text-cyan-400">Connect on LinkedIn</p>
            </a>
            <a href="https://github.com/RzLetsCode" target="_blank" rel="noopener noreferrer" className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
              <p className="font-semibold mb-2">GitHub</p>
              <p className="text-cyan-400">@RzLetsCode</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-500 border-t border-slate-700">
        <p>&copy; 2026 Rajesh Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}
