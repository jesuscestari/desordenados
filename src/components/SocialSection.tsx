import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MessageCircle,
  Send,
  Instagram,
  Users,
  Sparkles
} from 'lucide-react';

interface GroupCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
  delay: number;
}

const GroupCard = ({ icon, title, description, link, color, delay }: GroupCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        scale: 1.05,
        rotate: [0, -2, 2, -2, 0],
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, type: "spring" }}
      className={`group relative overflow-hidden rounded-2xl p-8 cursor-pointer backdrop-blur-sm border-2 transition-all duration-300 ${color}`}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, rgba(93, 217, 232, 0.1), transparent)`
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="p-4 rounded-full bg-gradient-to-br from-cyan-400 to-orange-500"
        >
          {icon}
        </motion.div>

        <h3 className="text-2xl md:text-3xl font-bold text-white font-['Bebas_Neue']">
          {title}
        </h3>

        <p className="text-gray-300 text-sm md:text-base">
          {description}
        </p>

        <motion.div
          className="flex items-center gap-2 text-cyan-400 font-semibold"
          whileHover={{ x: 5 }}
        >
          <span>Unirme ahora</span>
          <Sparkles className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-orange-500 to-pink-500 blur-xl opacity-50"></div>
      </div>
    </motion.a>
  );
};

export default function SocialSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      icon: <Instagram className="w-8 h-8 text-white" />,
      name: 'Instagram',
      url: 'https://www.instagram.com/desordenados_electromovilidad/',
      color: 'from-purple-600 to-pink-600'
    },
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Users className="w-8 h-8 text-cyan-400" />
            <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-500 font-['Bebas_Neue']">
              Únete al Grupo
            </h2>
            <Users className="w-8 h-8 text-orange-400" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Conecta con la comunidad de electromovilidad más activa de Buenos Aires
          </motion.p>
        </motion.div>

        {/* Group Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <GroupCard
            icon={<MessageCircle className="w-10 h-10 text-white" />}
            title="Grupo WhatsApp"
            description="Únete a nuestra comunidad en WhatsApp para recibir notificaciones, eventos y compartir experiencias"
            link="https://chat.whatsapp.com/tu-link-aqui"
            color="border-green-500/30 hover:border-green-400 bg-green-950/20"
            delay={0.2}
          />
          <GroupCard
            icon={<Send className="w-10 h-10 text-white" />}
            title="Canal Telegram"
            description="Mantente actualizado con noticias, eventos y novedades sobre electromovilidad"
            link="https://t.me/tu-canal-aqui"
            color="border-blue-500/30 hover:border-blue-400 bg-blue-950/20"
            delay={0.4}
          />
        </div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 font-['Bebas_Neue']">
            Síguenos en Redes
          </h3>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                }}
                whileTap={{ scale: 0.9 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.8 + (index * 0.1),
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                className={`p-4 rounded-full bg-gradient-to-br ${social.color} shadow-lg hover:shadow-2xl transition-shadow duration-300`}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
