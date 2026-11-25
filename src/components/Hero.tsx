interface HeroProps {
  onScrollToSection: (sectionId: string) => void
}

export function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Building the Future with
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-green-500 bg-[length:300%_300%] animate-gradient">
            AI-Powered Web Solutions
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          We are software developers from Bolivia with over 15 years of experience, leveraging the power of AI to create innovative digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onScrollToSection('contact')}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
          >
            Start Your Project
          </button>
          <button
            onClick={() => onScrollToSection('portfolio')}
            className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  )
}
