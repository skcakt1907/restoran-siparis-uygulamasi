import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <section className="section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <span className="kicker">404</span>
        <h1 style={{ fontSize: '5rem', margin: '20px 0 12px' }}>{t('common.notFound')}</h1>
        <p style={{ color: 'var(--muted)', marginBottom: 28 }}>{t('common.notFoundDesc')}</p>
        <Link to="/" className="btn btn-gold">{t('common.backHome')}</Link>
      </div>
    </section>
  );
}
