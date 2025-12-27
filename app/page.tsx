'use client';

import { useState } from 'react';
import { characters } from '@/data/characters';
import CharacterGrid from '@/components/CharacterGrid';
import FilterBar from '@/components/FilterBar';
import CharacterModal from '@/components/CharacterModal';
import { Character } from '@/data/characters';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const filteredCharacters = activeFilter === 'all'
    ? characters
    : characters.filter((char) => char.category === activeFilter);

  return (
    <>
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-900 py-8 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">NEXUS</h1>
          <p className="text-zinc-400 text-lg">Interactive Character Gallery by gandalfdougnut</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
          {activeFilter === 'game-ui' && (
    <p className="mt-6 mb-10 text-zinc-400 text-sm">
      Casual mobile game UI concept designed to demonstrate clarity, hierarchy,
      monetization flow, gameplay HUD usability, and reward feedback. Created in Figma.
    </p>
  )}

        <CharacterGrid
          characters={filteredCharacters}
          onCharacterClick={setSelectedCharacter}
        />
      </div>

      {/* Modal */}
      <CharacterModal
        character={selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
      />
    </main>

<footer className="border-t border-zinc-900 py-8 text-center text-zinc-500 text-sm">
  <p>Created by <span className="text-white">gandalfdoughnut</span></p>
</footer>

</>
  );
}