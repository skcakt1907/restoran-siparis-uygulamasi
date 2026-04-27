import { createContext, useContext, useEffect, useState } from 'react';
import client from '../api/client';

const SettingsContext = createContext({});

const FALLBACK = {
  site_name:      'ÇITIR Tavuk & Cafe',
  site_tagline:   'Çıtır Lezzetler',
  site_about:     '',
  site_phone:     '0 (212) 000 00 00',
  site_gsm:       '0 (532) 000 00 00',
  site_email:     'info@ornek-restoran.com',
  site_address:   'Kalamış Caddesi No:42, Kadıköy / İstanbul',
  site_hours:     'Her gün 11:00 — 00:00',
  site_facebook:  '#',
  site_twitter:   '#',
  site_instagram: '#',
  site_youtube:   '#',
  site_linkedin:  '#',
};

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(FALLBACK);

  useEffect(() => {
    client.get('/settings')
      .then(r => setSettings(s => ({ ...s, ...(r.data?.data || {}) })))
      .catch(() => {});
  }, []);

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext);
