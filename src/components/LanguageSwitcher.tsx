import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const isPT = i18n.language.startsWith('pt');

    return (
        <button
            onClick={() => i18n.changeLanguage(isPT ? 'en' : 'pt')}
            style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                color: '#9ca3af',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.5px',
                padding: '5px 10px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f0f0f8')}
            onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
        >
            <span style={{ fontSize: '16px', lineHeight: 1 }}>
                {isPT ? '🇺🇸' : '🇧🇷'}
            </span>
            {isPT ? 'EN' : 'PT'}
        </button>
    );
}
