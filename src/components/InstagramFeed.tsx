import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';

interface InstagramPost {
  imageUrl: string;
  postUrl: string;
  likes?: number;
  comments?: number;
}

interface InstagramFeedProps {
  images?: Array<{ src: string }>;
}

export default function InstagramFeed({ images = [] }: InstagramFeedProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const instagramUrl = 'https://www.instagram.com/desordenados_electromovilidad/';
  const username = 'desordenados_electromovilidad';

  // Usar imágenes locales si están disponibles, sino usar placeholders
  const instagramPosts: InstagramPost[] = images.map((img, index) => ({
    imageUrl: img.src,
    postUrl: instagramUrl,
    likes: undefined, // Opcional: puedes agregar likes si los tienes
  }));

  return (
    <section id="instagram" ref={ref} className="flex items-center justify-center relative overflow-hidden px-4 pt-8 pb-24">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-wide mb-6">
            Síguenos en Instagram
          </h2>
          <div className="w-20 h-px bg-white/20 mx-auto mb-8"></div>
          <motion.a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 text-sm md:text-base font-light tracking-wide"
          >
            <Instagram className="w-5 h-5" />
            <span>@{username}</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Instagram Feed Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto"
        >
          {/* Mostrar imágenes locales */}
          {instagramPosts.slice(0, 4).map((post, index) => (
            <motion.a
              key={`post-${index}`}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
              className="group relative aspect-square overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
            >
              {/* Imagen local */}
              <img
                src={post.imageUrl}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
              
              {/* Stats overlay - Mostrar solo likes en hover */}
              {post.likes !== undefined && (
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white/90">
                    <Heart className="w-5 h-5 fill-current" />
                    <span className="text-sm font-light">{post.likes}</span>
                  </div>
                </div>
              )}
            </motion.a>
          ))}
          
          {/* Completar con placeholders hasta llegar a 4 */}
          {Array.from({ length: Math.max(0, 4 - instagramPosts.length) }).map((_, index) => (
            <motion.a
              key={`placeholder-${index}`}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + ((instagramPosts.length + index) * 0.1) }}
              className="group relative aspect-square overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 flex items-center justify-center">
                <Instagram className="w-12 h-12 text-white/30 group-hover:text-white/50 transition-colors duration-300" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white/90 hover:text-white font-light tracking-wide"
          >
            <Instagram className="w-5 h-5" />
            <span>Ver más en Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
