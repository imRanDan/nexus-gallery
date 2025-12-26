'use client';

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  const filters = ['all', 'gaming', 'comics', 'other'];

  return (
    <div className="flex gap-4 justify-center mb-8 flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
            activeFilter === filter
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
              : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800'
          }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}