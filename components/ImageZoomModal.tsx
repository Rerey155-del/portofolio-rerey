"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "@phosphor-icons/react";

interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText: string;
  caption?: string;
}

export function ImageZoomModal({
  isOpen,
  onClose,
  imageSrc,
  altText,
  caption,
}: ImageZoomModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Tombol Tutup */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[10000] inline-flex size-10 sm:size-11 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black/90 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl border border-white/20 cursor-pointer"
        aria-label="Tutup pratinjau"
      >
        <X size={22} weight="bold" />
      </button>

      {/* Kontainer Gambar & Caption */}
      <div
        className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center p-2 sm:p-4 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat mengklik area gambar
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-black/40 shadow-2xl backdrop-blur-sm flex items-center justify-center">
          <img
            src={imageSrc}
            alt={altText}
            className="max-h-[80vh] max-w-full object-contain rounded-2xl shadow-2xl"
          />
        </div>

        {caption && (
          <p className="mt-3 text-center text-xs sm:text-sm font-medium text-white/90 bg-black/70 px-4 py-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-lg">
            {caption}
          </p>
        )}
      </div>
    </div>,
    document.body
  );
}
