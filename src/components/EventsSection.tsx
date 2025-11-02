import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  attendees?: number;
  link?: string;
}

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="group border border-white/10 hover:border-white/30 transition-all duration-500 bg-white/0 hover:bg-white/[0.02]"
    >
      <div className="p-6 md:p-8">
        {/* Date Badge */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2 text-white/60 group-hover:text-white/80 transition-colors duration-300">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-light">{event.date}</span>
          </div>
          {event.attendees !== undefined && (
            <div className="flex items-center gap-2 text-white/60 group-hover:text-white/80 transition-colors duration-300">
              <Users className="w-4 h-4" />
              <span className="text-xs font-light">{event.attendees} participantes</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-light text-white/90 group-hover:text-white mb-4 tracking-wide transition-colors duration-300">
          {event.title}
        </h3>

        {/* Time and Location */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-white/70 group-hover:text-white/90 transition-colors duration-300">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-light">{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 group-hover:text-white/90 transition-colors duration-300">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-light">{event.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/60 group-hover:text-white/80 text-sm md:text-base font-light leading-relaxed mb-4 transition-colors duration-300">
          {event.description}
        </p>

        {/* Link if available */}
        {event.link && (
          <motion.a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 text-sm font-light group/link"
          >
            <span>Más información</span>
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default function EventsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Datos de eventos próximos - Puedes actualizar estos datos
  const upcomingEvents: Event[] = [
    {
      id: '1',
      title: 'Próximo Evento',
      date: 'Noviembre 2025',
      time: 'Por decidir',
      location: 'Por decidir',
      description: 'Estamos organizando nuestro próximo evento. Los detalles se anunciarán próximamente en nuestros grupos de WhatsApp y Telegram. ¡Mantente atento!',
      link: 'https://chat.whatsapp.com/CfvMKWTZFtI0Ixws6ZuJH5',
    },
  ];

  return (
    <section id="events" ref={ref} className="flex items-center justify-center relative overflow-hidden px-4 pt-8 pb-16 md:pb-24">
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-wide mb-4">
           Próximos Eventos 
          </h2>
          <div className="w-20 h-px bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/60 text-sm md:text-base font-light tracking-wide max-w-2xl mx-auto">
            Únete a nuestras próximas actividades y eventos. Todos son bienvenidos.
          </p>
        </motion.div>

        {/* Events Grid */}
        {upcomingEvents.length > 0 ? (
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <p className="text-white/60 text-base md:text-lg font-light">
              No hay eventos programados en este momento.
            </p>
            <p className="text-white/40 text-sm mt-2 font-light">
              Próximamente anunciaremos nuevas actividades en nuestros grupos.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

