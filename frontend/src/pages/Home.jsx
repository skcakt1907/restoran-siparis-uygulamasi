import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchHomepage } from '../api/client';
import Loader from '../components/Loader';
import StatsCounter from '../components/StatsCounter';
import TestimonialSlider from '../components/TestimonialSlider';
import ReservationForm from '../components/ReservationForm';
import HeroSlider from '../components/HeroSlider';
import { imgUrl } from '../utils/img';

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    fetchHomepage()
      .then(res => setData(res.data))
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader text={t('common.loading')} />;
  if (!data) return <div className="empty">—</div>;

  const { categories, stats, testimonials, blog } = data;

  return (
    <>
      <HeroSlider />

      {/* ABOUT */}
      <section className="section">
        <div className="container about-row">
          <div className="about-img">
            <img src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=900&q=80" alt="" />
          </div>
          <div>
            <span className="kicker">{t('section.about.kicker')}</span>
            <h2>{t('section.about.title')}</h2>
            <div style={{ width: 80, height: 3, background: 'var(--paprika)', margin: '16px 0 22px' }}></div>
            <p>{t('section.about.p')}</p>
            <ul>
              <li>{t('section.about.li1')}</li>
              <li>{t('section.about.li2')}</li>
              <li>{t('section.about.li3')}</li>
              <li>{t('section.about.li4')}</li>
            </ul>
            <Link to="/hakkimizda" className="btn btn-burgundy" style={{ marginTop: 18 }}>{t('section.about.btnMore')}</Link>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* MENU CATEGORIES */}
      <section className="section home-menu">
        <span className="deco deco-left" style={{ top: 30, fontSize: '4rem', '--rot': '-15deg' }}>🌿</span>
        <span className="deco deco-right" style={{ bottom: 60, fontSize: '3rem', '--rot': '15deg' }}>🌶</span>
        <img src="/rooster-mascot.png" alt="" className="home-menu-mascot" aria-hidden="true" />
        <div className="container">
          <div className="section-head">
            <span className="kicker">{t('section.menu.kicker')}</span>
            <h2>{t('section.menu.title')}</h2>
            <div className="divider"></div>
            <p>{t('section.menu.sub')}</p>
          </div>
          <div className="grid grid-4">
            {categories.map(c => (
              <Link key={c.id} to={`/menu/${c.slug}`} className="category-tile">
                <div className="category-tile-img">
                  <img src={imgUrl(c.image_url)} alt={c.title} loading="lazy" />
                </div>
                <div className="category-tile-content">
                  <span className="icon">{c.icon}</span>
                  <h3>{c.title}</h3>
                  <p>{c.description?.slice(0, 80)}…</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-40">
            <Link to="/menu" className="btn btn-burgundy">{t('section.menu.btnAll')}</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsCounter stats={stats} />

      <div className="section-divider"></div>

      {/* TESTIMONIALS */}
      <section className="section testimonials-section">
        <img src="/rooster-mascot.png" alt="" className="home-test-mascot" aria-hidden="true" />
        <div className="container">
          <div className="section-head">
            <span className="kicker">{t('section.testimonials.kicker')}</span>
            <h2>{t('section.testimonials.title')}</h2>
            <div className="divider"></div>
            <p>{t('section.testimonials.sub')}</p>
          </div>
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      <div className="section-divider"></div>

      {/* BLOG */}
      <section className="section home-blog">
        <img src="/rooster-mascot.png" alt="" className="home-blog-mascot" aria-hidden="true" />
        <div className="container">
          <div className="section-head">
            <span className="kicker">{t('section.blog.kicker')}</span>
            <h2>{t('section.blog.title')}</h2>
            <div className="divider"></div>
            <p>{t('section.blog.sub')}</p>
          </div>
          <div className="grid grid-3">
            {blog.map(p => (
              <article key={p.id} className="blog-card">
                <div className="blog-card-img">
                  <img src={imgUrl(p.image_url)} alt={p.title} loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="meta">
                    <span><span className="gold">📅</span> {new Date(p.published_at).toLocaleDateString()}</span>
                    <span><span className="gold">📁</span> {p.category}</span>
                  </div>
                  <h3><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3>
                  <p>{p.excerpt?.slice(0, 140)}…</p>
                  <Link to={`/blog/${p.slug}`} className="read-more">{t('section.blog.readMore')}</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-40">
            <Link to="/blog" className="btn btn-burgundy">{t('section.blog.btnAll')}</Link>
          </div>
        </div>
      </section>

      {/* INLINE RESERVATION */}
      <section className="rez-inline">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 10 }}>
            <span className="kicker">{t('section.rez.kicker')}</span>
            <h2>{t('section.rez.title')}</h2>
            <div className="divider"></div>
            <p>{t('section.rez.sub')}</p>
          </div>
          <ReservationForm inline />
        </div>
      </section>
    </>
  );
}
