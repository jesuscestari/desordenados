import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

interface GalleryProps {
	images: Array<{ src: string }>;
}

export default function Gallery({ images }: GalleryProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: 'center',
		duration: 25,
		startIndex: 0
	});
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const scrollTo = useCallback(
		(index: number) => emblaApi && emblaApi.scrollTo(index),
		[emblaApi]
	);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		setScrollSnaps(emblaApi.scrollSnapList());
		emblaApi.on('select', onSelect);
		onSelect();

		return () => {
			emblaApi.off('select', onSelect);
		};
	}, [emblaApi, onSelect]);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<section className="gallery-section min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse" />
				<div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse" style={{ animationDelay: '1s' }} />
			</div>

			<div className="max-w-6xl mx-auto w-full relative z-10">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-pink-500">
					Galería
				</h2>

				<div className="embla relative" ref={emblaRef}>
					<div className="embla__viewport overflow-hidden rounded-2xl">
						<div className="embla__container flex">
							{images.map((image, index) => (
								<div
									key={index}
									className="embla__slide flex-[0_0_100%] min-w-0"
								>
									<div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group mx-auto max-w-5xl">
										<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
										<img
											src={image.src}
											alt={`Grupo ${index + 1}`}
											className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 no-drag"
											draggable={false}
											onContextMenu={(e) => e.preventDefault()}
											loading="lazy"
										/>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Navigation buttons */}
					<button
						className="embla__prev absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40"
						onClick={scrollPrev}
						aria-label="Imagen anterior"
					>
						<svg
							className="w-5 h-5 md:w-6 md:h-6 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>

					<button
						className="embla__next absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40"
						onClick={scrollNext}
						aria-label="Siguiente imagen"
					>
						<svg
							className="w-5 h-5 md:w-6 md:h-6 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>

				{/* Dots indicator */}
				<div className="flex justify-center gap-2 mt-8">
					{scrollSnaps.map((_, index) => (
						<button
							key={index}
							className={`rounded-full transition-all duration-300 ${
								index === selectedIndex
									? 'bg-white w-8 h-3 shadow-lg shadow-white/50'
									: 'bg-white/30 hover:bg-white/50 w-3 h-3'
							}`}
							onClick={() => scrollTo(index)}
							aria-label={`Ir a imagen ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
