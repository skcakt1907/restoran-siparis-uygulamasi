import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchBlog } from '../api/client';
import Loader from '../components/Loader';
import { imgUrl } from '../utils/img';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    fetchBlog().then(r => setPosts(r.data || [])).catch(() => setPosts([])).finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">{t('section.blog.kicker')}</span>
          <h1>{t('section.blog.title')}</h1>
          <p>{t('section.blog.sub')}</p>
          <div className="breadcrumb"><Link to="/">{t('common.home')}</Link> /&nbsp; {t('nav.blog')}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {loading ? <Loader /> : (
            <div className="grid grid-3">
              {posts.map(p => (
                <article key={p.id} className="blog-card">
                  <div className="blog-card-img">
                    <img src={imgUrl(p.image_url)} alt={p.title} loading="lazy" />
                  </div>
                  <div className="blog-card-body">
                    <div className="meta">
                      <span><span className="gold">📅</span> {new Date(p.published_at).toLocaleDateString('tr-TR')}</span>
                      <span><span className="gold">📁</span> {p.category}</span>
                    </div>
                    <h3><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3>
                    <p>{p.excerpt?.slice(0, 140)}…</p>
                    <Link to={`/blog/${p.slug}`} className="read-more">{t('section.blog.readMore')}</Link>
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
