export interface Project {
  id: number
  name: string
  description: string
  icon: string
  logo?: string
  url?: string
  status?: 'active' | 'maintenance' | 'coming-soon'
}

export const projects: Project[] = [
  {
    id: 2,
    name: 'Calculadora de Médias CSJ',
    description: 'Ferramenta para cálculo de notas do Colégio São José',
    icon: '📊',
    logo: '/vite.svg',
    url: 'https://csj.medias.jaopd.dev/',
    status: 'active',
  },
  {
    id: 3,
    name: 'Contador de Pontos',
    description: 'Conte pontos de partidas de forma fácil',
    icon: '🎮',
    logo: '/img/espadas.svg',
    url: 'https://points.jaopd.dev/',
    status: 'active',
  },
  {
    id: 4,
    name: 'Cashly',
    description: 'Cálculos de investimentos',
    icon: '💰',
    logo: '/vite.svg',
    url: 'https://cashly.jaopd.dev',
    status: 'active',
  },
  // Exemplo de projeto em manutenção:
  // { id: X, name: '...', description: '⚠️ Em manutenção', icon: '...', logo: '/logo.svg', url: undefined, status: 'maintenance' },
  {
    id: 6,
    name: 'Visualizador de Algoritmos de Ordenação',
    description: 'Compare a velocidade de diferentes algoritmos de ordenação',
    icon: '📊',
    logo: '/vite.svg',
    url: 'https://algorithms-visualizer.jaopd.dev/',
    status: 'active',
  },
  {
    id: 7,
    name: 'WordGuess',
    description: 'Adivinhação de palavras, filmes e músicas',
    icon: '🔤',
    logo: '/vite.svg',
    url: 'https://words.jaopd.dev/',
    status: 'active',
  },
  {
    id: 8,
    name: 'Em desenvolvimento...',
    description: 'Novos projetos chegando em breve',
    icon: '📁',
    url: undefined,
    status: 'coming-soon',
  },
]

export const PROJECTS_PER_PAGE = 5
