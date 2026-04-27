import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchService } from '../api/client';
import Loader from '../components/Loader';

export default function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchService(slug)
      .then(r => setService(r.data))
      .catch(() => setService(null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Loader />;
  if (!service) return <div className="empty">Hizmet bulunamadı.</div>;

  return (
    <>
      <section className="page-hero" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${service.image_url})`,
      }}>
        <div className="container">
          <span className="kicker">Hizmet</span>
          <h1>{service.icon} {service.title}</h1>
          <div className="breadcrumb">
            <Link to="/">Anasayfa</Link> /&nbsp;
            <Link to="/hizmetlerimiz">Hizmetlerimiz</Link> /&nbsp;
            {service.title}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: 24 }}>{service.short_desc}</p>
          <p style={{ lineHeight: 1.85 }}>{service.full_desc}</p>
          <div className="text-center mt-40">
            <Link to="/rezervasyon" className="btn btn-gold">📅 Bilgi Al &amp; Rezerve Et</Link>
          </div>
        </div>
      </section>
    </>
  );
}
