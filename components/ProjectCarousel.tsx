"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { ImageZoomModal } from "@/components/ImageZoomModal";

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

export function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const hasMultipleImages = images.length > 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="relative aspect-[16/10] sm:aspect-video w-full overflow-hidden bg-gradient-to-b from-muted/20 to-muted/60 p-3 sm:p-6" aria-label={`Carousel ${title}`}>
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-background/60 border border-border/40 shadow-sm flex items-center justify-center">
          <div
            className="flex h-full w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={image}
                className="h-full w-full flex-shrink-0 p-2 sm:p-4 flex items-center justify-center relative group cursor-pointer"
                onClick={() => setZoomedImage(image)}
                title="Klik untuk memperbesar gambar"
              >
                <img
                  src={image}
                  alt={`${title} screenshot ${index + 1}`}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow-md pointer-events-none">
                  <Maximize2 className="size-4" />
                </div>
              </div>
            ))}
          </div>

          {hasMultipleImages && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-2 sm:left-4 top-1/2 inline-flex size-8 sm:size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground border border-border/60 shadow-md backdrop-blur-sm transition-all hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary z-10"
                aria-label="Gambar sebelumnya"
              >
                <ChevronLeft className="size-4 sm:size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-2 sm:right-4 top-1/2 inline-flex size-8 sm:size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground border border-border/60 shadow-md backdrop-blur-sm transition-all hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary z-10"
                aria-label="Gambar berikutnya"
              >
                <ChevronRight className="size-4 sm:size-5" aria-hidden="true" />
              </button>
            </>
          )}

          {hasMultipleImages && (
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 sm:gap-2 z-10">
              {images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-6 bg-primary" : "w-2 bg-foreground/30 hover:bg-foreground/50"
                  }`}
                  aria-label={`Tampilkan gambar ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : undefined}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <ImageZoomModal
        isOpen={!!zoomedImage}
        onClose={() => setZoomedImage(null)}
        imageSrc={zoomedImage || ""}
        altText={`${title} Pratinjau Gambar`}
        caption={title}
      />
    </>
  );
}
