function Hero() {
  return (
    <section className="bg-dark-500 text-secondary-50 py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4 animate-gradient bg-gradient-to-r from-primary-50 via-primary-500 to-primary-600 bg-clip-text text-transparent">
        Organize Your Life with TaskFlow
      </h2>
      <p className="text-lg md:text-xl font-sans mb-6 max-w-2xl mx-auto text-secondary-500">
        Manage your tasks efficiently with TaskFlow, a user-friendly app designed to boost productivity and simplify your schedule. Perfect for work, personal projects, or team coordination.
      </p>
      <button className="bg-gradient-to-r from-primary-50 via-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-semibold font-sans hover:from-primary-600 hover:via-primary-500 hover:to-primary-50 transition-all duration-300">
        Get Started
      </button>
    </section>
  );
}

export default Hero;