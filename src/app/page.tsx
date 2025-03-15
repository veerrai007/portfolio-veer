'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">

      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            <div className="flex items-center">
              <span className="text-2xl font-bold text-purple-400">Veer</span>
            </div>
            

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
                  About
                </a>
                <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Projects
                </a>
                <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 pt-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Hi, I'm Veer</h1>
          <p className="text-xl text-gray-400 mb-8">A Full Stack Web Developer</p>
        </div>
      </section>

      <section id="projects" className="container mx-auto px-4 py-16 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card */}
          <div className="bg-gray-700 rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project Name</h3>
              <p className="text-gray-400 mb-4">Project description goes here. Explain what you built and which technologies you used.</p>
              <a href="#" className="text-purple-400 hover:text-purple-300">View Project →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Write your bio here. Share your experience, skills, and what drives you as a developer.
          </p>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-4 py-16 bg-gray-800">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="space-y-4">
            <a href="mailto:veeru129360@email.com" className="block text-purple-400 hover:text-purple-300">
            veeru129360@email.com
            </a>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/veerrai007" target="_blank" className="text-gray-400 hover:text-white">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
