function Footer() {
  return (
    <footer className="bg-dark-500 text-secondary-50 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="bg-dark-50 p-6 rounded-lg shadow-[0_10px_30px_rgba(0,255,200,0.15)] transition-transform duration-300 hover:-translate-y-2">
          <h3 className="text-xl font-heading font-semibold mb-4 text-secondary-50">TaskFlow</h3>
          <p className="text-secondary-500 font-sans mb-4">
            Empowering productivity with seamless task management solutions.
          </p>
        </div>

        {/* Navigation */}
        <div className="bg-dark-50 p-6 rounded-lg shadow-[0_10px_30px_rgba(0,255,200,0.15)] transition-transform duration-300 hover:-translate-y-2">
          <h3 className="text-xl font-heading font-semibold mb-4 text-secondary-50">Navigation</h3>
          <ul className="text-secondary-500 font-sans space-y-2">
            <li><a href="#home" className="hover:text-primary-50 transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-primary-50 transition-colors duration-300">About</a></li>
            <li><a href="#features" className="hover:text-primary-50 transition-colors duration-300">Features</a></li>
            <li><a href="#pricing" className="hover:text-primary-50 transition-colors duration-300">Pricing</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-dark-50 p-6 rounded-lg shadow-[0_10px_30px_rgba(0,255,200,0.15)] transition-transform duration-300 hover:-translate-y-2">
          <h3 className="text-xl font-heading font-semibold mb-4 text-secondary-50">Contact Us</h3>
          <p className="text-secondary-500 font-sans mb-2">Email: <a href="mailto:support@taskflow.com" className="underline text-primary-50">support@taskflow.com</a></p>
          <p className="text-secondary-500 font-sans">Phone: +1-800-TASKFLOW</p>
        </div>

        {/* Social Media */}
        <div className="bg-dark-50 p-6 rounded-lg shadow-[0_10px_30px_rgba(0,255,200,0.15)] transition-transform duration-300 hover:-translate-y-2">
          <h3 className="text-xl font-heading font-semibold mb-4 text-secondary-50">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary-50 transition-colors duration-300">🐙</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary-50 transition-colors duration-300">🐦</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary-50 transition-colors duration-300">💼</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-secondary-500 font-sans">
        &copy; 2025 TaskFlow. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;