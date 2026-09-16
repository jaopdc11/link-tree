export interface Project {
  id: number
  name: string
  name_en?: string
  description: string
  description_en?: string
  icon: string
  logo?: string
  url?: string
  status?: 'active' | 'maintenance' | 'coming-soon'
}

export const projects: Project[] = [
  {
    id: 2,
    name: 'Calculadora de Médias CSJ',
    name_en: 'CSJ Grade Calculator',
    description: 'Ferramenta para cálculo de notas do Colégio São José',
    description_en: 'Grade calculator for Colégio São José students',
    icon: '📊',
    logo: '/vite.svg',
    url: 'https://csj.medias.jaopd.dev/',
    status: 'active',
  },
  {
    id: 3,
    name: 'Contador de Pontos',
    name_en: 'Score Counter',
    description: 'Conte pontos de partidas de forma fácil',
    description_en: 'Track game scores easily',
    icon: '🎮',
    logo: '/img/espadas.svg',
    url: 'https://points.jaopd.dev/',
    status: 'active',
  },
  {
    id: 4,
    name: 'Cashly',
    description: 'Cálculos de investimentos',
    description_en: 'Investment calculations',
    icon: '💰',
    logo: '/vite.svg',
    url: 'https://cashly.jaopd.dev',
    status: 'active',
  },
  {
    id: 6,
    name: 'Visualizador de Algoritmos de Ordenação',
    name_en: 'Sorting Algorithm Visualizer',
    description: 'Compare a velocidade de diferentes algoritmos de ordenação',
    description_en: 'Compare the speed of different sorting algorithms',
    icon: '📊',
    logo: '/vite.svg',
    url: 'https://algorithms-visualizer.jaopd.dev/',
    status: 'active',
  },
  {
    id: 7,
    name: 'WordGuess',
    description: 'Adivinhação de palavras, filmes e músicas',
    description_en: 'Guess words, movies and songs',
    icon: '🔤',
    logo: '/logo.svg',
    url: 'https://words.jaopd.dev/',
    status: 'active',
  },
  {
    id: 8,
    name: 'Rifas',
    description: 'Gerenciador de rifas: números, vendas e arrecadação — offline',
    description_en: 'Raffle manager: numbers, sales and revenue — offline',
    icon: '🎟️',
    logo: '/favicon.svg',
    url: 'https://rifas.jaopd.dev/',
    status: 'active',
  },
  {
    id: 10,
    name: 'Nerd Trainer',
    description: 'Treino diário de memorização nerd: π, tabela periódica, fórmulas e mais',
    description_en: 'Daily nerd memory training: π, periodic table, formulas and more',
    icon: '🧠',
    logo: '/icon.svg',
    url: 'https://nerd.jaopd.dev/',
    status: 'active',
  },
  {
    id: 9,
    name: 'Em desenvolvimento...',
    description: 'Novos projetos chegando em breve',
    icon: '📁',
    url: undefined,
    status: 'coming-soon',
  },
]

export const PROJECTS_PER_PAGE = 5
