import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchTeam } from '../api/client';
import Loader from '../components/Loader';
import { imgUrl } from '../utils/img';

export default function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    fetchTeam().then(r => setTeam(r.data || [])).catch(() => setTeam([])).finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">{t('section.team.kicker')}</span>
          <h1>{t('section.team.title')}</h1>
          <p>{t('section.team.sub')}</p>
          <div className="breadcrumb"><Link to="/">{t('common.home')}</Link> /&nbsp; {t('nav.team')}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {loading ? <Loader /> : (
            <div className="grid grid-4">
              {team.map(m => (
                <div key={m.id} className="team-card">
                  <div className="team-photo">
                    <img src={imgUrl(m.photo_url)} alt={m.full_name} loading="lazy" />
                  </div>
                  <div className="team-info">
                    <h3>{m.full_name}</h3>
                    <div className="role">{m.title}</div>
                    {m.bio && <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 12 }}>{m.bio}</p>}
                    {m.specialty && <div className="specialty">🍽️ {m.specialty}</div>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
