import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { useSettings } from '../context/SettingsContext';
import { imgUrl } from '../utils/img';

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { t } = useTranslation();
  const s = useSettings();

  const subscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const social = [
    { url: s.site_facebook,  icon: 'f',   label: 'Facebook' },
    { url: s.site_twitter,   icon: '𝕏',   label: 'Twitter' },
    { url: s.site_linkedin,  icon: 'in',  label: 'LinkedIn' },
    { url: s.site_instagram, icon: '📷',  label: 'Instagram' },
    { url: s.site_youtube,   icon: '▶',   label: 'YouTube' },
  ].filter(x => x.url && x.url !== '#');

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              {s.site_logo ? (
                <img src={imgUrl(s.site_logo)} alt={s.site_name || 'Logo'} className="logo-img" style={{ maxHeight: 80, maxWidth: 280 }} />
              ) : (
                <>
                  <span className="logo-mark">Ç</span>
                  <span>{s.site_name?.split(' ')[0] || 'ÇITIR'}</span>
                </>
              )}
            </div>
            <h4>{t('footer.corporate')}</h4>
            <p>{s.site_about || t('footer.corporateDesc')}</p>
            {social.length > 0 && (
              <div className="footer-social" style={{ marginTop: 22 }}>
                {social.map(sm => (
                  <a key={sm.label} href={sm.url} target="_blank" rel="noopener" aria-label={sm.label}>{sm.icon}</a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h4>{t('footer.quickMenu')}</h4>
            <ul>
              <li><Link to="/hakkimizda">{t('footer.links.about')}</Link></li>
              <li><Link to="/menu">{t('footer.links.menu')}</Link></li>
              <li><a href="#">{t('footer.links.certs')}</a></li>
              <li><a href="#">{t('footer.links.photos')}</a></li>
              <li><a href="#">{t('footer.links.videos')}</a></li>
              <li><a href="#">{t('footer.links.hr')}</a></li>
              <li><a href="#">{t('footer.links.reviews')}</a></li>
              <li><a href="#">{t('footer.links.branches')}</a></li>
              <li><Link to="/blog">{t('footer.links.blog')}</Link></li>
              <li><Link to="/iletisim">{t('footer.links.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4>{t('footer.contactInfo')}</h4>
            <div className="ci-mini">
              <p><span className="ic">📍</span> {s.site_address}</p>
              <p><span className="ic">📞</span> {s.site_phone}</p>
              {s.site_gsm && <p><span className="ic">📱</span> {s.site_gsm}</p>}
              <p><span className="ic">✉</span> {s.site_email}</p>
              <p><span className="ic">🕒</span> {s.site_hours}</p>
            </div>
          </div>

          <div>
            <h4>{t('footer.newsletter')}</h4>
            <p style={{ fontSize: '13.5px', marginBottom: 14 }}>{t('footer.newsletterDesc')}</p>
            <form onSubmit={subscribe} className="newsletter">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t('footer.newsletterPh')}
                required
              />
              <button type="submit">{t('footer.newsletterBtn')}</button>
            </form>
            {subscribed && <small style={{ color: 'var(--gold)', display: 'block', marginTop: 8 }}>{t('footer.subscribed')}</small>}

            <div style={{ marginTop: 24 }}>
              <Link to="/rezervasyon" className="btn btn-gold" style={{ padding: '11px 20px', fontSize: 12 }}>
                📅&nbsp; {t('nav.reservation')}
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="copyright">
              Copyright © {year}. {t('footer.rights')} <strong>{s.site_name}</strong>
            </div>
            <div className="footer-prefs">
              <div className="pref-group">
                <span className="pref-label">{t('footer.lang')}:</span>
                <LanguageSwitcher variant="pill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
