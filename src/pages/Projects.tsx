import { useState } from 'react'
import { ArrowLeft, ArrowRight, ChevronLeft } from 'lucide-react'
import { projects, PROJECTS_PER_PAGE } from '../data/projects'

export default function Projects({ onBack }: { onBack: () => void }) {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE)
  const start = (page - 1) * PROJECTS_PER_PAGE
  const pageProjects = projects.slice(start, start + PROJECTS_PER_PAGE)

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '56px 20px',
    }}>
      <div className="link-container" style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            onClick={onBack}
            className="card"
            style={{
              width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#9ca3af', padding: 0,
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <div>
            <h1 style={{ fontSize: '17px', fontWeight: 600, color: '#f0f0f8', letterSpacing: '-0.3px' }}>
              Projetos
            </h1>
            <p style={{ fontSize: '12px', color: '#6b7080', marginTop: '2px' }}>
              Ferramentas e apps simples
            </p>
          </div>
        </div>

        {/* Project list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {pageProjects.map((project) => {
            const isComingSoon = project.status === 'coming-soon'
            const isMaintenance = project.status === 'maintenance'
            const logoSrc = project.logo
              ? (project.logo.startsWith('http') ? project.logo : project.url + project.logo)
              : null

            const inner = (
              <div className="card-inner">
                <div className="icon-box" style={{
                  background: isComingSoon ? 'rgba(255,255,255,0.02)' : undefined,
                  border: isComingSoon ? '1px solid rgba(255,255,255,0.04)' : undefined,
                }}>
                  {logoSrc ? (
                    <img
                      src={logoSrc}
                      alt={project.name}
                      style={{
                        width: '22px', height: '22px', objectFit: 'contain',
                        filter: isComingSoon ? 'grayscale(1) opacity(0.25)' : 'none',
                      }}
                    />
                  ) : (
                    <span style={{ fontSize: '16px', opacity: 0.25 }}>📁</span>
                  )}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontSize: '14px', fontWeight: 600, letterSpacing: '-0.1px',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    color: isComingSoon ? '#3d404d' : '#f0f0f8',
                    margin: 0,
                  }}>
                    {project.name}
                  </p>
                  <p style={{
                    fontSize: '12px', marginTop: '2px',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    color: isComingSoon ? '#2a2d38' : isMaintenance ? '#f59e0b' : '#6b7080',
                    margin: '2px 0 0',
                  }}>
                    {project.description}
                  </p>
                </div>
              </div>
            )

            if (isComingSoon || !project.url) {
              return (
                <div key={project.id} className="card" style={{ cursor: 'default', pointerEvents: 'none' }}>
                  {inner}
                </div>
              )
            }

            return (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
              >
                {inner}
              </a>
            )
          })}
        </div>

        {/* Pagination */}
        <div className="card" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 16px', cursor: 'default',
        }}>
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            style={{
              width: '30px', height: '30px', borderRadius: '8px', border: 'none',
              background: page === 1 ? 'transparent' : 'rgba(255,255,255,0.06)',
              color: page === 1 ? '#3d404d' : '#9ca3af',
              cursor: page === 1 ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.15s',
            }}
          >
            <ArrowLeft size={14} />
          </button>
          <span style={{ fontSize: '13px', color: '#6b7080' }}>
            Página <strong style={{ color: '#d1d5db', fontWeight: 600 }}>{page}</strong>
            {' '}de{' '}
            <strong style={{ color: '#d1d5db', fontWeight: 600 }}>{totalPages}</strong>
          </span>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            style={{
              width: '30px', height: '30px', borderRadius: '8px', border: 'none',
              background: page === totalPages ? 'transparent' : 'rgba(255,255,255,0.06)',
              color: page === totalPages ? '#3d404d' : '#9ca3af',
              cursor: page === totalPages ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.15s',
            }}
          >
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Footer */}
        <p style={{ fontSize: '11px', color: '#475569', textAlign: 'center', letterSpacing: '0.2px' }}>
          {projects.filter(p => p.status !== 'coming-soon').length} projetos • © 2026 João Pedro
        </p>

      </div>
    </div>
  )
}
