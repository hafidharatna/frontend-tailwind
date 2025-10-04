interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-serif font-bold text-primary">
              Portfolio
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#about" className="text-text hover:text-primary transition-colors duration-300">About</a>
              <a href="#projects" className="text-text hover:text-primary transition-colors duration-300">Projects</a>
              <a href="#skills" className="text-text hover:text-primary transition-colors duration-300">Skills</a>
              <a href="#contact" className="btn-primary">Contact</a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background shadow-lg">
            <a href="#about" className="block px-3 py-2 text-text hover:text-primary transition-colors duration-300">About</a>
            <a href="#projects" className="block px-3 py-2 text-text hover:text-primary transition-colors duration-300">Projects</a>
            <a href="#skills" className="block px-3 py-2 text-text hover:text-primary transition-colors duration-300">Skills</a>
            <a href="#contact" className="block px-3 py-2 btn-primary text-center">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;