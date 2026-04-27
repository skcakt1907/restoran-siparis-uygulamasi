import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchCategories, fetchCategory } from '../api/client';
import Loader from '../components/Loader';
import { imgUrl } from '../utils/img';

export default function Menu() {
  const { slug } = useParams();
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    let alive = true;
    setLoading(true);
    fetchCategories().then(res => {
      if (!alive) return;
      const cats = res.data || [];
      setCategories(cats);
      const target = slug ? cats.find(c => c.slug === slug) : cats[0];
      if (target) {
        fetchCategory(target.slug).then(r => {
          if (!alive) return;
          setActiveCategory(r.data);
          setItems(r.data.items || []);
          setLoading(false);
        });
      } else { setLoading(false); }
    });
    return () => { alive = false; };
  }, [slug]);

  const switchTo = (catSlug) => {
    setLoading(true);
    fetchCategory(catSlug).then(r => {
      setActiveCategory(r.data);
      setItems(r.data.items || []);
      setLoading(false);
      window.history.replaceState({}, '', `/menu/${catSlug}`);
    });
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">{t('menuPage.kicker')}</span>
          <h1>{t('menuPage.title')}</h1>
          <p>{t('menuPage.sub')}</p>
          <div className="breadcrumb">
            <Link to="/">{t('common.home')}</Link> /&nbsp; {t('nav.menu')}
            {activeCategory && <> /&nbsp; {activeCategory.title}</>}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cat-filter-bar">
            {categories.map(c => (
              <button
                key={c.id}
                className={`cat-filter ${activeCategory?.id === c.id ? 'active' : ''}`}
                onClick={() => switchTo(c.slug)}
              >
                <span style={{ marginRight: 6 }}>{c.icon}</span>
                {c.title}
              </button>
            ))}
          </div>

          {loading ? (
            <Loader />
          ) : items.length === 0 ? (
            <div className="empty">{t('menuPage.empty')}</div>
          ) : (
            <div className="menu-grid">
              {items.map(it => (
                <article key={it.id} className="menu-card">
                  <div className="menu-card-img">
                    {it.image_url ? <img src={imgUrl(it.image_url)} alt={it.name} loading="lazy" /> : <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>🍗</div>}
                  </div>
                  <div className="menu-card-body">
                    <div className="menu-card-head">
                      <h3>{it.name}</h3>
                      <span className="menu-card-price">{Number(it.price).toFixed(0)} ₺</span>
                    </div>
                    <p>{it.description}</p>
                    <div className="menu-card-tags">
                      {it.is_featured && <span className="menu-tag featured">{t('menuPage.tagFeatured')}</span>}
                      {it.is_vegan && <span className="menu-tag vegan">{t('menuPage.tagVegan')}</span>}
                      {it.is_spicy && <span className="menu-tag spicy">{t('menuPage.tagSpicy')}</span>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
