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

	const mainImage = images?.[0];
	const secondaryImages = images?.slice(1, 3) || [];

	if (!mainImage || !mainImage.src) {
		console.warn('Gallery: No image available', { images, mainImage });
		return null;
	}

	return (
		<section id="gallery" ref={ref} className="gallery-section min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-8 pb-24 md:py-24">
			<div className="max-w-6xl mx-auto w-full relative z-10">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-12 md:mb-16 text-white/90 tracking-wide"
				>
					Únete a nuestra comunidad
				</motion.h2>

				{/* Main Image - Featured */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
					className="mb-6 md:mb-8"
				>
					<div className="relative overflow-hidden mx-auto max-w-4xl border border-white/10 hover:border-white/20 transition-colors duration-500 group">
						<div className="aspect-[16/10] md:aspect-[16/9]">
							<img
								src={mainImage.src}
								alt="Grupo Desordenados"
								className="no-drag w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-[1.02]"
								draggable={false}
								onContextMenu={(e) => e.preventDefault()}
							/>
						</div>
					</div>
				</motion.div>

				{/* Secondary Images Grid */}
				{secondaryImages.length > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
						className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto"
					>
						{secondaryImages.map((image, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.95 }}
								animate={inView ? { opacity: 1, scale: 1 } : {}}
								transition={{ duration: 0.5, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
								className="relative overflow-hidden border border-white/10 hover:border-white/20 transition-colors duration-500 group"
							>
								<div className="aspect-[4/3]">
									<img
										src={image.src}
										alt={`Grupo Desordenados ${index + 2}`}
										className="no-drag w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
										draggable={false}
										onContextMenu={(e) => e.preventDefault()}
									/>
								</div>
							</motion.div>
						))}
					</motion.div>
				)}
			</div>
		</section>
	);
}
