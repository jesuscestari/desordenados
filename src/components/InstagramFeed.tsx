import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';

interface InstagramPost {
  imageUrl: string;
  postUrl: string;
  likes?: number;
  comments?: number;
}

export default function InstagramFeed() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const instagramUrl = 'https://www.instagram.com/desordenados_electromovilidad/';
  const username = 'desordenados_electromovilidad';

  // Posts de Instagram con URLs de imágenes
  // Para obtener la URL de la imagen:
  // 1. Ve a la publicación en Instagram
  // 2. Click derecho en la imagen → "Copiar dirección de imagen" o "Inspect element"
  // 3. O usa una herramienta como https://www.picuki.com/ para obtener URLs
  const instagramPosts: InstagramPost[] = [
    {
      imageUrl: 'https://scontent.cdninstagram.com/v/t51.82787-15/568626947_18430992439103420_8600160954122615360_n.webp?_nc_cat=101&ig_cache_key=Mzc0NzA3ODg1MTUwMDU4OTIzOA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4OTE0LnNkci5DMyJ9&_nc_ohc=v5uD30RVvyIQ7kNvwHyjgtC&_nc_oc=AdkejBY8oHr306Cz1QLUwIKTOuFdURMP2BV5lXPFtf-HBturW3qtGVrF02MqIRyrKs0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=C3c0mpenNEWxYkbvN7IX4w&oh=00_AfjgGlO3Y1ZexoOsmFe80kqPfIOitvCNRT9TpjQ8VRbwEA&oe=690CAE46',
      postUrl: instagramUrl,
      likes: 138,
    },
    {
      imageUrl: 'https://scontent.cdninstagram.com/v/t51.82787-15/568332431_17906572290257384_221144530694666310_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=107&ig_cache_key=Mzc0NjgxODk3NTEzMzkyNjE0OA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=_u1BFIEu9UoQ7kNvwGWfFnc&_nc_oc=AdnQBNxIpUv4e7ceG8eMI4tXcv0G6PwmgAxaFO7zD6ilCWoKGz4yZOntS_bzguf2JD8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=-1&_nc_ht=scontent.cdninstagram.com&_nc_gid=C3c0mpenNEWxYkbvN7IX4w&oh=00_Afg7APuIr6nV_XryGlUPLbqkJkNmJTfmw07LzKPBHMrZjg&oe=690C9E1A',
      postUrl: instagramUrl,
      likes: 46,
    },
    {
      imageUrl: 'https://scontent.cdninstagram.com/v/t51.75761-15/500653073_18357785992197111_7119996619015603553_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzYzODMwNDM5NjQxODQ5Mzk3OQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=n1b80ARlmrgQ7kNvwGIhsPW&_nc_oc=AdntYQfBIeAbtIQpL0ehxB1kgfJ_Z4DhvJiS30lmZN1eq_9Jr7CCTHah29QQluU7rOc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=vz4GeOKRquwF609XBipkuQ&oh=00_AfjQsV57jrsueuc3Oy_a6NnBb3wV2Y-EEN1y6yaGbhdtPQ&oe=690CB743',
      postUrl: instagramUrl,
      likes: 43,
    },
    {
      imageUrl: 'https://scontent.cdninstagram.com/v/t51.75761-15/488402899_17854329705419844_1565159460853631646_n.webp?_nc_cat=104&ig_cache_key=MzYwNTg5Mjk4OTMxNDk0MjUxMw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=hhndiAdmJy8Q7kNvwEwgiw6&_nc_oc=AdntnunocfGBN-dUraW5JrvZCv-_tS4KTynRvThwHgR-5KcHUePlblDb7nDHHP34cw4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=awmVK6nWEieeMs7GorsTiw&oh=00_Afjfl8D0NbUC-EGKHFq20iLyX0SaWOR1Gim4tQfPfhC_iQ&oe=690C8CBC',
      postUrl: instagramUrl,
      likes: 28,
    },
  ];

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
          {/* Mostrar imágenes reales */}
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
              {/* Imagen real de Instagram */}
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
