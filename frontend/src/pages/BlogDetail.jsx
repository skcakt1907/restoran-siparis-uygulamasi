import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchBlogPost } from '../api/client';
import Loader from '../components/Loader';
import { imgUrl } from '../utils/img';

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchBlogPost(slug).then(r => setPost(r.data)).catch(() => setPost(null)).finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Loader />;
  if (!post) return <div className="empty">Yazı bulunamadı.</div>;

  return (
    <>
      <section className="page-hero" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${imgUrl(post.image_url)})`,
      }}>
        <div className="container">
          <span className="kicker">{post.category}</span>
          <h1>{post.title}</h1>
          <p style={{ color: 'var(--gold-light)' }}>📅 {new Date(post.published_at).toLocaleDateString('tr-TR')} &nbsp;·&nbsp; 👤 {post.author} &nbsp;·&nbsp; 👁 {post.views} okunma</p>
          <div className="breadcrumb"><Link to="/">Anasayfa</Link> /&nbsp; <Link to="/blog">Blog</Link> /&nbsp; {post.title}</div>
        </div>
      </section>

      <section className="section">
        <article className="container" style={{ maxWidth: 800 }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--burgundy)', fontStyle: 'italic', marginBottom: 28, padding: '20px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
            {post.excerpt}
          </p>
          <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.85 }}>
            {post.content}
          </div>
          <div className="text-center mt-40">
            <Link to="/blog" className="btn btn-burgundy">← Tüm Yazılar</Link>
          </div>
        </article>
      </section>
    </>
  );
}
