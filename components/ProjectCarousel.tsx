"use client";

import { useState, useRef, TouchEvent, MouseEvent } from "react";
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

  // Swipe & Drag state
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [touchEndY, setTouchEndY] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mouseStartX, setMouseStartX] = useState<number | null>(null);

  // Ref to track if user swiped (to prevent opening zoom modal on swipe release)
  const hasSwipedRef = useRef(false);
  const minSwipeDistance = 40; // threshold in pixels

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // --- Touch Event Handlers (Mobile) ---
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    hasSwipedRef.current = false;
    setTouchEndX(null);
    setTouchEndY(null);
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null || touchStartY === null) return;

    const currentX = e.targetTouches[0].clientX;
    const currentY = e.targetTouches[0].clientY;
    setTouchEndX(currentX);
    setTouchEndY(currentY);

    const deltaX = touchStartX - currentX;
    const deltaY = touchStartY - currentY;

    // Only activate horizontal drag if horizontal movement is greater than vertical movement
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 8) {
      hasSwipedRef.current = true;
      setIsDragging(true);
      if (hasMultipleImages) {
        setDragOffset(deltaX);
      }
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null && touchStartY !== null && touchEndY !== null) {
      const deltaX = touchStartX - touchEndX;
      const deltaY = touchStartY - touchEndY;

      // Register horizontal swipe
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) >= minSwipeDistance && hasMultipleImages) {
        if (deltaX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }

    setTouchStartX(null);
    setTouchStartY(null);
    setTouchEndX(null);
    setTouchEndY(null);
    setDragOffset(0);
    setIsDragging(false);
  };

  // --- Mouse Drag Handlers (Desktop & Browser DevTools Emulation) ---
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    hasSwipedRef.current = false;
    setIsMouseDown(true);
    setMouseStartX(e.clientX);
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown || mouseStartX === null) return;
    const deltaX = mouseStartX - e.clientX;
    if (Math.abs(deltaX) > 8) {
      hasSwipedRef.current = true;
      setIsDragging(true);
      if (hasMultipleImages) {
        setDragOffset(deltaX);
      }
    }
  };

  const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    if (isMouseDown && mouseStartX !== null && hasMultipleImages) {
      const deltaX = mouseStartX - e.clientX;
      if (Math.abs(deltaX) >= minSwipeDistance) {
        if (deltaX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }
    setIsMouseDown(false);
    setMouseStartX(null);
    setDragOffset(0);
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isMouseDown) {
      setIsMouseDown(false);
      setMouseStartX(null);
      setDragOffset(0);
      setIsDragging(false);
    }
  };

  const handleImageClick = (image: string) => {
    // Only open zoom modal if the user tapped/clicked without dragging
    if (!hasSwipedRef.current) {
      setZoomedImage(image);
    }
  };

  return (
    <>
      <div 
        className="relative aspect-[16/10] sm:aspect-video w-full overflow-hidden bg-gradient-to-b from-muted/20 to-muted/60 p-3 sm:p-6 select-none touch-pan-y" 
        aria-label={`Carousel ${title}`}
      >
        <div 
          className="relative h-full w-full overflow-hidden rounded-xl bg-background/60 border border-border/40 shadow-sm flex items-center justify-center cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`flex h-full w-full ${isDragging ? "" : "transition-transform duration-500 ease-in-out"}`}
            style={{ 
              transform: `translateX(-${currentIndex * 100}%) translateX(-${dragOffset}px)` 
            }}
          >
            {images.map((image, index) => (
              <div
                key={image}
                className="h-full w-full flex-shrink-0 p-2 sm:p-4 flex items-center justify-center relative group cursor-pointer"
                onClick={() => handleImageClick(image)}
                title="Klik untuk memperbesar gambar"
              >
                <img
                  src={image}
                  alt={`${title} screenshot ${index + 1}`}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-md pointer-events-none"
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

