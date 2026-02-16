import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 py-16">
        <header className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-white text-2xl font-bold">AI</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future of
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}AI Innovation
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transforming businesses with cutting-edge artificial intelligence solutions. 
            We build intelligent systems that learn, adapt, and evolve with your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              Get Started
            </button>
            <button className="px-8 py-4 border border-gray-600 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              View Demo
            </button>
          </div>
        </header>

        <section id="features" className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-xl">🧠</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Machine Learning</h3>
            <p className="text-gray-300">
              Advanced ML algorithms that power predictive analytics and intelligent automation.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-xl">💬</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Natural Language</h3>
            <p className="text-gray-300">
              State-of-the-art NLP models for understanding and generating human language.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-xl">👁️</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Computer Vision</h3>
            <p className="text-gray-300">
              Cutting-edge image recognition and visual intelligence for real-world applications.
            </p>
          </div>
        </section>

        <section id="about" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-white text-2xl font-bold">TechCorp</div>
            <div className="text-white text-2xl font-bold">DataFlow</div>
            <div className="text-white text-2xl font-bold">CloudBase</div>
            <div className="text-white text-2xl font-bold">AI Labs</div>
          </div>
        </section>

        <footer id="contact" className="text-center text-gray-400 border-t border-gray-800 pt-8">
          <p>&copy; 2024 AI Startup. Building the future, one algorithm at a time.</p>
        </footer>
      </div>
    </div>
  );
}
