import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: '¿Qué es Desordenados?',
    answer: 'Desordenados es un grupo de electromovilidad en Buenos Aires dedicado a promover y compartir la pasión por los vehículos eléctricos, especialmente monociclos eléctricos y scooters eléctricos.',
  },
  {
    question: '¿Cómo puedo unirme al grupo?',
    answer: 'Puedes unirte a través de nuestros grupos de WhatsApp o Telegram. Los enlaces están disponibles en la sección "Nuestros grupos". También puedes seguirnos en Instagram para estar al día con nuestras actividades.',
  },
  {
    question: '¿Necesito tener un vehículo eléctrico para unirme?',
    answer: 'No necesariamente. Aceptamos a cualquier persona interesada en la electromovilidad, ya sea que tengas un vehículo eléctrico, estés pensando en adquirir uno, o simplemente quieras aprender más sobre el tema.',
  },
  {
    question: '¿Qué tipo de actividades organizan?',
    answer: 'Organizamos salidas grupales, encuentros, charlas sobre electromovilidad y eventos relacionados con vehículos eléctricos en Buenos Aires.',
  },
  {
    question: '¿Dónde se reúnen?',
    answer: 'Nuestras actividades se realizan principalmente en Buenos Aires y alrededores. Las ubicaciones específicas se anuncian en nuestros grupos de WhatsApp y Telegram.',
  },
];

function FAQItem({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-white/10 hover:border-white/20 transition-colors duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left group"
      >
        <h3 className="text-base md:text-lg font-light text-white/90 group-hover:text-white transition-colors duration-300 pr-4">
          {item.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-white/60 group-hover:text-white/80 transition-colors duration-300"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <p className="text-white/70 text-sm md:text-base font-light leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="faq" ref={ref} className="flex items-center justify-center relative overflow-hidden px-4 pt-8 pb-24">
      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-wide mb-6">
            Preguntas Frecuentes
          </h2>
          <div className="w-20 h-px bg-white/20 mx-auto"></div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

