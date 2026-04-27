import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const IMAGES = [
  'https://images.unsplash.com/photo-1562967914-608f82629710?w=1920&q=80',
  'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=1920&q=80',
  'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=1920&q=80',
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const timer = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    timer.current = setInterval(() => setActive(a => (a + 1) % IMAGES.length), 6500);
    return () => clearInterval(timer.current);
  }, []);

  return (
    <section className="hero">
      {IMAGES.map((img, i) => {
        const k = `slide${i + 1}`;
        return (
          <div
            key={i}
            className={`hero-slide ${i === active ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.72), rgba(0,0,0,0.32)), url(${img})` }}
          >
            <div className="container hero-content">
              <span className="hero-kicker">{t(`hero.${k}.kicker`)}</span>
              <h1>{t(`hero.${k}.title1`)} <em>{t(`hero.${k}.title2`)}</em></h1>
              <p>{t(`hero.${k}.sub`)}</p>
              <div className="hero-actions">
                <Link to="/menu" className="btn btn-gold">{t('hero.ctaMenu')}</Link>
                <Link to="/rezervasyon" className="btn btn-outline">{t('hero.ctaReservation')}</Link>
              </div>
            </div>
          </div>
        );
      })}
      <div className="hero-dots">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            className={i === active ? 'active' : ''}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
