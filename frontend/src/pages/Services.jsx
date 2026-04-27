import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchServices } from '../api/client';
import Loader from '../components/Loader';

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices()
      .then(r => setServices(r.data || []))
      .catch(() => setServices([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Hizmetlerimiz</span>
          <h1>Özel Organizasyonlar</h1>
          <p>Düğünden iftar yemeğine, hayatınızın her özel anına özel paketler hazırlıyoruz.</p>
          <div className="breadcrumb"><Link to="/">Anasayfa</Link> /&nbsp; Hizmetlerimiz</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {loading ? <Loader /> : (
            <div className="grid grid-3">
              {services.map(s => (
                <Link key={s.id} to={`/hizmetlerimiz/${s.slug}`} className="service-card">
                  <div className="service-card-img">
                    <img src={s.image_url} alt={s.title} loading="lazy" />
                  </div>
                  <div className="service-card-body">
                    <h3><span className="ic">{s.icon}</span> {s.title}</h3>
                    <p>{s.short_desc}</p>
                    <span className="service-card-more">Detaylı Bilgi</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
