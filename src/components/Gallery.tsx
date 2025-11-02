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
		<section className="gallery-section min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
			<div className="max-w-4xl mx-auto w-full relative z-10">
				<h2 className="text-3xl md:text-4xl font-light text-center mb-16 text-white/90 tracking-wide">
					Únete a nuestra comunidad
				</h2>

				<div className="flex justify-center">
					<div className="relative overflow-hidden mx-auto max-w-md gallery-image-container border border-white/10">
						<img
							src={firstImage.src}
							alt="Grupo Desordenados"
							className="no-drag w-full h-full object-cover"
							draggable={false}
							onContextMenu={(e) => e.preventDefault()}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
