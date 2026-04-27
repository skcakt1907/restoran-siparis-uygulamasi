import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReservationForm from '../components/ReservationForm';

export default function Reservation() {
  const { t } = useTranslation();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">{t('section.rez.kicker')}</span>
          <h1>{t('section.rez.title')}</h1>
          <p>{t('section.rez.sub')}</p>
          <div className="breadcrumb"><Link to="/">{t('common.home')}</Link> /&nbsp; {t('nav.reservation')}</div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <ReservationForm />
        </div>
      </section>
    </>
  );
}
