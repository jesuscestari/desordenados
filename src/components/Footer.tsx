import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer ref={ref} className="relative border-t border-white/10 bg-black/40 backdrop-blur-sm py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-white/50 text-sm font-light"
        >
          © {currentYear} Desordenados
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-white/40 text-xs font-light mt-2"
        >
          Hecha con ❤️ por{' '}
          <a
            href="https://jesuscestari.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white/80 transition-colors"
          >
            jesuscestari
          </a>
        </motion.p>
      </div>
    </footer>
  );
}
