import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { useSettings } from '../context/SettingsContext';

export default function Topbar() {
  const { t } = useTranslation();
  const s = useSettings();
  return (
    <div className="topbar">
      <div className="container">
        <div className="tb-info">
          <span><span className="tb-icon">📞</span> {s.site_phone}</span>
          <span><span className="tb-icon">✉</span> {s.site_email}</span>
          <span className="tb-hours"><span className="tb-icon">🕒</span> {t('topbar.hours')}</span>
        </div>
        <div className="tb-right">
          <LanguageSwitcher variant="compact" />
          <div className="tb-social">
            {s.site_instagram && s.site_instagram !== '#' && <a href={s.site_instagram} target="_blank" rel="noopener" aria-label="Instagram">📷</a>}
            {s.site_youtube   && s.site_youtube   !== '#' && <a href={s.site_youtube}   target="_blank" rel="noopener" aria-label="YouTube">▶</a>}
            {s.site_facebook  && s.site_facebook  !== '#' && <a href={s.site_facebook}  target="_blank" rel="noopener" aria-label="Facebook">f</a>}
          </div>
        </div>
      </div>
    </div>
  );
}
