'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Character } from '@/data/characters';
import { X } from 'lucide-react';
import { useState } from 'react';

interface CharacterModalProps {
  character: Character | null;
  onClose: () => void;
}

export default function CharacterModal({ character, onClose }: CharacterModalProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!character) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full bg-zinc-900 rounded-lg overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative aspect-[3/4] w-full max-h-[70vh] bg-zinc-800">
            {/* Loading spinner */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            <Image
              src={character.image}
              alt={character.title}
              fill
              className={`object-contain transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              sizes="(max-width: 1200px) 100vw, 1200px"
              onLoad={() => setImageLoaded(true)}
              priority
            />
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-2">{character.title}</h2>
            <p className="text-zinc-400 mb-2">{character.medium}</p>
            <p className="text-zinc-500 text-sm mb-4">{character.date}</p>
            {character.description && (
              <p className="text-zinc-300">{character.description}</p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}