import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface GalleryProps {
	images: Array<{ src: string }>;
}

export default function Gallery({ images }: GalleryProps) {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	// Solo mostrar la primera imagen
	const firstImage = images?.[0];

	if (!firstImage || !firstImage.src) {
		console.warn('Gallery: No image available', { images, firstImage });
		return null;
	}

	return (
		<section ref={ref} className="gallery-section min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-24">
			<div className="max-w-4xl mx-auto w-full relative z-10">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-20 text-white/90 tracking-wide"
				>
					Únete a nuestra comunidad
				</motion.h2>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
					className="flex justify-center"
				>
					<div className="relative overflow-hidden mx-auto max-w-md gallery-image-container border border-white/10 hover:border-white/20 transition-colors duration-500 group">
						<img
							src={firstImage.src}
							alt="Grupo Desordenados"
							className="no-drag w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
							draggable={false}
							onContextMenu={(e) => e.preventDefault()}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
