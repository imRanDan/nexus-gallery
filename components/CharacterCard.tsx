'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Character } from '@/data/characters';

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}

export default function CharacterCard({ character, onClick }: CharacterCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="relative aspect-[3/4] cursor-pointer overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
    >
      <Image
        src={character.image}
        alt={character.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
        <h3 className="text-white font-semibold">{character.title}</h3>
        <p className="text-zinc-400 text-sm capitalize">{character.category}</p>
      </div>
    </motion.div>
  );
}