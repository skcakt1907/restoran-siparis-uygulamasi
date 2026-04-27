import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Topbar from './Topbar';
import LanguageSwitcher from './LanguageSwitcher';
import { useSettings } from '../context/SettingsContext';
import { imgUrl } from '../utils/img';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const s = useSettings();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const social = [
    { url: s.site_facebook,  icon: 'f',  label: 'Facebook' },
    { url: s.site_twitter,   icon: '𝕏',  label: 'Twitter' },
    { url: s.site_instagram, icon: '📷', label: 'Instagram' },
    { url: s.site_youtube,   icon: '▶',  label: 'YouTube' },
  ].filter(x => x.url && x.url !== '#');

  return (
    <>
      <Topbar />
      <header className="site-header">
        <div className="container header-wrap">
          <Link to="/" className="logo">
            {s.site_logo ? (
              <img src={imgUrl(s.site_logo)} alt={s.site_name || 'Logo'} className="logo-img" />
            ) : (
              <>
                <span className="logo-mark">Ç</span>
                <span className="logo-text">
                  <strong>{s.site_name || 'ÇITIR'}</strong>
                  <small>{s.site_tagline || 'Tavuk & Cafe'}</small>
                </span>
              </>
            )}
          </Link>

          <button
            className={`nav-toggle ${open ? 'open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menü"
            aria-expanded={open}
          >
            <span></span><span></span><span></span>
          </button>

          <nav className={`main-nav ${open ? 'open' : ''}`}>
            <ul>
              <li><NavLink to="/" end>{t('nav.home')}</NavLink></li>
              <li><NavLink to="/hakkimizda">{t('nav.about')}</NavLink></li>
              <li><NavLink to="/menu">{t('nav.menu')}</NavLink></li>
              <li><NavLink to="/ekibimiz">{t('nav.team')}</NavLink></li>
              <li><NavLink to="/blog">{t('nav.blog')}</NavLink></li>
              <li><NavLink to="/iletisim">{t('nav.contact')}</NavLink></li>
              <li><NavLink to="/rezervasyon" className={({isActive}) => `rez-btn ${isActive ? 'active' : ''}`}>📅 {t('nav.reservation')}</NavLink></li>
            </ul>

            {/* Mobil ekstralar — dil seçici + iletişim + sosyal */}
            <div className="nav-extras">
              <div className="nav-extras-section">
                <span className="nav-extras-title">{t('footer.lang')}</span>
                <LanguageSwitcher variant="pill" />
              </div>

              <div className="nav-extras-section">
                <span className="nav-extras-title">{t('footer.contactInfo')}</span>
                <ul className="nav-contact">
                  <li>📞 <a href={`tel:${s.site_phone}`}>{s.site_phone}</a></li>
                  <li>✉ <a href={`mailto:${s.site_email}`}>{s.site_email}</a></li>
                  <li>🕒 <span>{t('topbar.hours')}</span></li>
                </ul>
              </div>

              {social.length > 0 && (
                <div className="nav-extras-section">
                  <span className="nav-extras-title">Sosyal</span>
                  <div className="nav-social">
                    {social.map(sm => (
                      <a key={sm.label} href={sm.url} target="_blank" rel="noopener" aria-label={sm.label}>
                        {sm.icon}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      {open && (
        <div
          className="nav-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
