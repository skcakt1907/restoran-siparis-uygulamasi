import { createContext, useContext, useEffect, useState } from 'react';
import client from '../api/client';

const SettingsContext = createContext({});

const FALLBACK = {
  site_name:      'İçmeler Tavukçusu',
  site_tagline:   "Marmaris'in Lezzet Adresi",
  site_about:     "İçmeler'de 1950'lerden bu yana misafir ağırlıyoruz. Yöresel köy tavuğu, samimi atmosfer ve aile sıcaklığında ağırlama anlayışıyla Marmaris'in lezzet adresi.",
  site_phone:     '0533 514 40 15',
  site_gsm:       '0533 514 40 15',
  site_email:     'info@ornek-restoran.com',
  site_address:   'İçmeler, Kayabal Cd., 48720 Marmaris/Muğla',
  site_hours:     'Her gün 11:00 — 00:00',
  site_facebook:  '#',
  site_twitter:   '#',
  site_instagram: '#',
  site_youtube:   '#',
  site_linkedin:  '#',
  site_logo:      'logos/icmeler-tavukcusu-logo.png',
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
