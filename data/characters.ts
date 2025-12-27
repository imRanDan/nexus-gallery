export type Character = {
  id: string;
  title: string;
  category: 'gaming' | 'comics' | 'other' | 'game-ui';
  medium: string;
  date: string;
  image: string;
  description?: string;
};

export const characters: Character[] = [
  // COMICS
  {
    id: '1',
    title: 'Batman',
    category: 'comics',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/comics/batman.jpeg',
  },
  {
    id: '2',
    title: 'Berserk - Beast of Darkness',
    category: 'comics',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/comics/beast_of_darkness.jpeg',
    description: 'From Berserk manga series'
  },
  {
    id: '3',
    title: 'Blade',
    category: 'comics',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/comics/blade.jpeg',
  },
  {
    id: '4',
    title: 'David Martinez - Cyberpunk Edgerunners',
    category: 'comics',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/comics/david_cyberpunk.jpeg',
    description: 'Character from Cyberpunk: Edgerunners'
  },
  {
    id: '5',
    title: 'Femto - Berserk',
    category: 'comics',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/comics/femto.jpeg',
    description: 'Godhand member from Berserk'
  },
  {
    id: '6',
    title: 'Guts (Angry) - Berserk',
    category: 'comics',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/comics/guts_angry.jpeg',
  },
  {
    id: '7',
    title: 'Guts with Cape - Berserk',
    category: 'comics',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/comics/guts_cape.jpeg',
  },
  {
    id: '8',
    title: 'Guts (Sad) - Berserk',
    category: 'comics',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/comics/guts_sad.jpeg',
  },
  {
    id: '9',
    title: 'Gyro Zeppeli - JoJo',
    category: 'comics',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/comics/gyro_zeppeli.jpeg',
    description: 'From JoJo\'s Bizarre Adventure: Steel Ball Run'
  },
  {
    id: '10',
    title: 'Jolyne Cujoh - JoJo',
    category: 'comics',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/comics/jolyne_stonefree.jpeg',
    description: 'From JoJo\'s Bizarre Adventure: Stone Ocean'
  },
  {
    id: '11',
    title: 'Jotaro Kujo Part 3 - JoJo',
    category: 'comics',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/comics/jotaro_part3.jpeg',
    description: 'From JoJo\'s Bizarre Adventure: Stardust Crusaders'
  },
  {
    id: '12',
    title: 'Jotaro Kujo - JoJo',
    category: 'comics',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/comics/jotaro.jpeg',
  },
  {
    id: '13',
    title: 'Kakyoin Noriaki - JoJo',
    category: 'comics',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/comics/kakyoin.jpeg',
    description: 'From JoJo\'s Bizarre Adventure: Stardust Crusaders'
  },
  {
    id: '14',
    title: 'Lucy - Cyberpunk Edgerunners',
    category: 'comics',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/comics/lucy_cyberpunk.jpeg',
  },
  {
    id: '15',
    title: 'Mikasa Ackerman - Attack on Titan',
    category: 'comics',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/comics/mikasa.jpeg',
  },
  {
    id: '16',
    title: 'Silver Chariot Requiem - JoJo',
    category: 'comics',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/comics/silver_chariot_req.jpeg',
    description: 'Stand from JoJo\'s Bizarre Adventure'
  },
  {
    id: '17',
    title: 'Spawn',
    category: 'comics',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/comics/spawn.jpeg',
  },
  {
    id: '18',
    title: 'Spider-Man',
    category: 'comics',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/comics/spiderman.jpeg',
  },

  // GAMING
  {
    id: '19',
    title: 'The Arbiter - Halo',
    category: 'gaming',
    medium: 'Graphite on paper',
    date: 'November 2025',
    image: '/images/gaming/arbiter.jpeg',
    description: 'Elite warrior from Halo series'
  },
  {
    id: '20',
    title: 'Bearer of the Curse - Dark Souls 2',
    category: 'gaming',
    medium: 'Graphite on Bristol paper',
    date: 'December 2025',
    image: '/images/gaming/bearer_of_the_curse.jpeg',
    description: '#11 all-time post on r/DarkSouls2'
  },
  {
    id: '21',
    title: 'Master Chief (John-117) - Halo',
    category: 'gaming',
    medium: 'Graphite on paper',
    date: 'November 2025',
    image: '/images/gaming/john_117.jpeg',
  },
  {
    id: '22',
    title: 'Noble Six - Halo Reach',
    category: 'gaming',
    medium: 'Graphite on paper',
    date: 'November 2025',
    image: '/images/gaming/noble_6.jpeg',
  },
  {
    id: '23',
    title: 'Samus Aran - Metroid',
    category: 'gaming',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/gaming/samus.jpeg',
  },
  {
    id: '24',
    title: 'V - Cyberpunk 2077',
    category: 'gaming',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/gaming/v_cyberpunk.jpeg',
  },

  // OTHER
  {
    id: '25',
    title: 'Gordon Freeman - Christmas Edition',
    category: 'other',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/other/christmas_freeman.jpeg',
    description: 'Holiday-themed Half-Life character'
  },
  {
    id: '26',
    title: 'Don Draper - Mad Men',
    category: 'other',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/other/don_draper.jpeg',
  },
  {
    id: '27',
    title: 'Graduation Self-Portrait',
    category: 'other',
    medium: 'Graphite on paper',
    date: '2019',
    image: '/images/other/graduation_coverart.jpeg',
  },
  {
    id: '28',
    title: 'Portrait Study - Woman',
    category: 'other',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/other/portrait_woman.jpeg',
  },
  {
    id: '29',
    title: 'Tommy Shelby - Peaky Blinders',
    category: 'other',
    medium: 'Graphite on paper',
    date: 'December 2025',
    image: '/images/other/tommy_shelby.jpeg',
  },
  {
  id: '30',
  title: 'Galaxy Rush – Main Menu',
  category: 'game-ui',
  medium: 'Figma (UI Design)',
  date: 'December 2025',
  image: '/images/game-ui/galaxy-rush/main_menu.png',
  description: 'Clean casual mobile main menu focused on clarity and primary CTA hierarchy.'
},
{
  id: '31',
  title: 'Galaxy Rush – Shop UI',
  category: 'game-ui',
  medium: 'Figma (UI Design)',
  date: 'December 2025',
  image: '/images/game-ui/galaxy-rush/shop.png',
  description: 'Simple monetization screen with readable pricing hierarchy.'
},
{
  id: '32',
  title: 'Galaxy Rush – HUD Overlay',
  category: 'game-ui',
  medium: 'Figma (UI Design)',
  date: 'December 2025',
  image: '/images/game-ui/galaxy-rush/hud.png',
  description: 'Lightweight HUD that balances visibility and gameplay space.'
},
{
  id: '33',
  title: 'Galaxy Rush – Reward Popup',
  category: 'game-ui',
  medium: 'Figma (UI Design)',
  date: 'December 2025',
  image: '/images/game-ui/galaxy-rush/reward.png',
  description: 'Celebration popup with strong reward visibility and clear CTA.'
},

];