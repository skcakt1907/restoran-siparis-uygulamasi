import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher({ variant = 'compact' }) {
  const { i18n } = useTranslation();
  const current = i18n.language?.split('-')[0] || 'tr';

  const set = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  if (variant === 'compact') {
    // for topbar
    return (
      <div className="lang-switch">
        <button
          className={current === 'tr' ? 'active' : ''}
          onClick={() => set('tr')}
          aria-label="Türkçe"
        >
          🇹🇷 TR
        </button>
        <button
          className={current === 'en' ? 'active' : ''}
          onClick={() => set('en')}
          aria-label="English"
        >
          🇬🇧 EN
        </button>
      </div>
    );
  }

  // pill variant for footer
  return (
    <div className="pref-group">
      <button
        className={`pref-btn ${current === 'tr' ? 'active' : ''}`}
        onClick={() => set('tr')}
      >
        Türkçe
      </button>
      <button
        className={`pref-btn ${current === 'en' ? 'active' : ''}`}
        onClick={() => set('en')}
      >
        English
      </button>
    </div>
  );
}
