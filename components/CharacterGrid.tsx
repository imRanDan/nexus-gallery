'use client';

import { motion } from 'framer-motion';
import CharacterCard from './CharacterCard';
import { Character } from '@/data/characters';

interface CharacterGridProps {
  characters: Character[];
  onCharacterClick: (character: Character) => void;
}

export default function CharacterGrid({ characters, onCharacterClick }: CharacterGridProps) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {characters.map((character) => (
        <motion.div
          key={character.id}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CharacterCard
            character={character}
            onClick={() => onCharacterClick(character)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}