import { User, Folder, GraduationCap, FileText, MessageCircle, Mail, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../components/LanguageSwitcher'

function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Home({ onNavigateProjects }: { onNavigateProjects: () => void }) {
  const { t, i18n } = useTranslation()
  const isPT = i18n.language.startsWith('pt')

  const links = [
    {
      label: t('links.portfolio'),
      icon: <User size={17} />,
      color: '#a78bfa',
      href: 'https://jaopd.dev',
    },
    {
      label: t('links.projects'),
      icon: <Folder size={17} />,
      color: '#fb923c',
      isProjects: true,
    },
    {
      label: t('links.lessons'),
      icon: <GraduationCap size={17} />,
      color: '#34d399',
      href: 'https://aulas.jaopd.dev',
    },
    {
      label: t('links.resume'),
      icon: <FileText size={17} />,
      color: '#f87171',
      href: isPT ? 'https://jaopd.dev/cv-pt.pdf' : 'https://jaopd.dev/cv-en.pdf',
    },
    {
      label: t('links.whatsapp'),
      icon: <MessageCircle size={17} />,
      color: '#4ade80',
      href: 'https://api.whatsapp.com/send/?phone=5547999783190&text=Ol%C3%A1+Jo%C3%A3o+Pedro%2C+visitei+seu+Linktree+e+gostaria+de+conversar+sobre+oportunidades+ou+projetos.&type=phone_number&app_absent=0',
    },
    {
      label: t('links.email'),
      icon: <Mail size={17} />,
      color: '#facc15',
      href: 'mailto:servicecontact.joao@gmail.com',
    },
  ]

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '56px 20px',
    }}>
      <div style={{ position: 'fixed', top: '16px', right: '16px', zIndex: 50 }}>
        <LanguageSwitcher />
      </div>
      <div className="link-container" style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>

        {/* Hero glow */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '320px',
          height: '220px',
          background: 'radial-gradient(ellipse at top, rgba(6,182,212,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Profile */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
          <h1 className="profile-name">João Pedro</h1>
          <p className="profile-role">{t('profile.role')}</p>
          <div className="status-badge">
            <span className="status-dot" />
            {t('profile.status')}
          </div>
        </div>

        {/* Links */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {links.map((link) => {
            const cardStyle = {
              '--link-accent': link.color,
            } as React.CSSProperties

            const inner = (
              <div className="card-inner">
                <div
                  className="icon-box"
                  style={{
                    color: link.color,
                    background: `${link.color}1a`,
                    border: `1px solid ${link.color}30`,
                  }}
                >
                  {link.icon}
                </div>
                <span className="card-label">{link.label}</span>
                <ChevronRight size={15} className="card-arrow" />
              </div>
            )

            if (link.isProjects) {
              return (
                <button key={link.label} className="card" style={cardStyle} onClick={onNavigateProjects}>
                  {inner}
                </button>
              )
            }

            return (
              <a key={link.label} href={link.href} className="card" style={cardStyle} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            )
          })}
        </div>

        <div className="divider" />

        {/* Social row */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <a
              href="https://github.com/jaopdc11"
              target="_blank"
              rel="noopener noreferrer"
              className="card-social"
              style={{ color: '#CBD5E1' }}
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/joaopedrodevcs/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-social"
              style={{ color: '#06B6D4' }}
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Footer */}
        <p style={{ fontSize: '11px', color: '#334155', letterSpacing: '0.2px' }}>
          {t('footer')}
        </p>

      </div>
    </div>
  )
}
