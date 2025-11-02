interface GalleryProps {
	images: Array<{ src: string }>;
}

export default function Gallery({ images }: GalleryProps) {
	// Solo mostrar la primera imagen
	const firstImage = images?.[0];

	if (!firstImage || !firstImage.src) {
		console.warn('Gallery: No image available', { images, firstImage });
		return null;
	}

	return (
		<section className="gallery-section min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-12">
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse" />
				<div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse" style={{ animationDelay: '1s' }} />
			</div>

			<div className="max-w-6xl mx-auto w-full relative z-10">
				<h2 className="retro-title text-4xl md:text-5xl font-bold text-center mb-12 text-white">
					Somos una comunidad de más de 50 riders
				</h2>

				<div className="flex justify-center">
					<div className="relative rounded-xl overflow-hidden shadow-2xl group mx-auto max-w-md gallery-image-container">
						<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
						<img
							src={firstImage.src}
							alt="Grupo Desordenados"
							className="no-drag transition-transform duration-500 group-hover:scale-105"
							draggable={false}
							onContextMenu={(e) => e.preventDefault()}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
