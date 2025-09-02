import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-dark-500 text-secondary-50 py-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* TaskFlow Title */}
        <h1 className="text-3xl md:text-4xl font-heading font-bold animate-gradient bg-gradient-to-r from-primary-50 via-primary-500 to-primary-600 bg-clip-text text-transparent">
          TaskFlow
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-secondary-50 hover:text-primary-50 font-sans font-semibold transition-colors duration-300">Home</a>
          <a href="#about" className="text-secondary-50 hover:text-primary-50 font-sans font-semibold transition-colors duration-300">About</a>
          <a href="#features" className="text-secondary-50 hover:text-primary-50 font-sans font-semibold transition-colors duration-300">Features</a>
          <a href="#pricing" className="text-secondary-50 hover:text-primary-50 font-sans font-semibold transition-colors duration-300">Pricing</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 right-4 bg-dark-50 p-4 rounded-lg shadow-[0_10px_30px_rgba(0,255,200,0.15)]`}>
          <ul className="space-y-4">
            <li><a href="#home" className="text-secondary-50 hover:text-primary-50 font-sans font-semibold transition-colors duration-300 block" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="text-secondary-50 hover:text-primary-50 font-sans font-semibold transition-colors duration-300 block" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#features" className="text-secondary-50 hover:text-primary-50 font-sans font-semibold transition-colors duration-300 block" onClick={() => setIsMenuOpen(false)}>Features</a></li>
            <li><a href="#pricing" className="text-secondary-50 hover:text-primary-50 font-sans font-semibold transition-colors duration-300 block" onClick={() => setIsMenuOpen(false)}>Pricing</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;