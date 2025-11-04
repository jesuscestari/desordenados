import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Instagram } from 'lucide-react';
import headerImage from '../assets/header.png';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset para la navegación fija
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Pequeño delay para asegurar que el DOM esté listo
      setTimeout(() => {
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'gallery', label: 'Comunidad' },
    { id: 'events', label: 'Eventos' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'faq', label: 'FAQ' },
    { id: 'social', label: 'Grupos' },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo/Brand */}
            <motion.button
              onClick={scrollToTop}
              className="cursor-pointer transition-opacity duration-300 hover:opacity-80"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Ir al inicio"
            >
              <img
                src={headerImage.src}
                alt="Desordenados"
                className="h-8 md:h-10 w-auto object-contain no-drag header-image"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </motion.button>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-light tracking-wide relative group cursor-pointer px-2 py-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Ir a ${item.label}`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-2 right-2 h-px bg-white/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </motion.button>
              ))}
            </div>

            {/* Right side: Instagram Icon + Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {/* Instagram Icon - Only visible on desktop */}
              <motion.a
                href="https://www.instagram.com/desordenados_electromovilidad/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>

              {/* Mobile Menu Button */}
              <MobileMenu navItems={navItems} scrollToSection={scrollToSection} />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full transition-all duration-300 text-white/80 hover:text-white backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Volver arriba"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ navItems, scrollToSection }: { navItems: Array<{ id: string; label: string }>, scrollToSection: (id: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white/90 hover:text-white transition-colors duration-300"
        aria-label="Menú"
      >
        <div className="space-y-1.5">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-current transition-all duration-300"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-px bg-current transition-all duration-300"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-current transition-all duration-300"
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left py-2 text-white/70 hover:text-white transition-colors duration-300 text-sm font-light tracking-wide"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Instagram Icon at the end of mobile menu */}
              <a
                href="https://www.instagram.com/desordenados_electromovilidad/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center py-2 text-white/70 hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

