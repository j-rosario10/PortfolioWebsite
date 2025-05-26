import { useState, useEffect } from 'react';

const Navbar = ({ scrollToSection, aboutRef, projectsRef, techStackRef, contactRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a 
          href="#" 
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          Jude Rosario
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection(aboutRef)} 
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection(projectsRef)} 
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection(techStackRef)} 
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Tech Stack
          </button>
          <button 
            onClick={() => scrollToSection(contactRef)} 
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Contact
          </button>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-md transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 py-4 px-4">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => {
                scrollToSection(aboutRef);
                setIsMenuOpen(false);
              }}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => {
                scrollToSection(projectsRef);
                setIsMenuOpen(false);
              }}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => {
                scrollToSection(techStackRef);
                setIsMenuOpen(false);
              }}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Tech Stack
            </button>
            <button 
              onClick={() => {
                scrollToSection(contactRef);
                setIsMenuOpen(false);
              }}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Contact
            </button>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-md text-center transition-all duration-300"
            >
              Résumé
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;