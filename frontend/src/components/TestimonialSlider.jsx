import { useEffect, useRef, useState } from 'react';
import { imgUrl } from '../utils/img';

export default function TestimonialSlider({ items = [] }) {
  const [page, setPage] = useState(0);
  const [perView, setPerView] = useState(window.innerWidth <= 720 ? 1 : 2);
  const timer = useRef(null);

  useEffect(() => {
    const onResize = () => setPerView(window.innerWidth <= 720 ? 1 : 2);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const pages = Math.max(1, Math.ceil(items.length / perView));

  useEffect(() => {
    if (pages < 2) return;
    timer.current = setInterval(() => setPage(p => (p + 1) % pages), 5500);
    return () => clearInterval(timer.current);
  }, [pages]);

  if (!items.length) return null;

  const handleEnter = () => clearInterval(timer.current);
  const handleLeave = () => {
    if (pages < 2) return;
    timer.current = setInterval(() => setPage(p => (p + 1) % pages), 5500);
  };

  return (
    <>
      <div className="t-slider-outer" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <div
          className="t-slider-inner"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {items.map((tr) => (
            <div key={tr.id} className="testimonial-card" style={{ minWidth: `${100 / perView}%` }}>
              <div className="t-inner">
                <div className="t-quote">"</div>
                <div className="t-stars">
                  {'★'.repeat(tr.rating)}{'☆'.repeat(5 - tr.rating)}
                </div>
                <p className="t-comment">{tr.comment}</p>
                <div className="t-author">
                  <div className="t-avatar">
                    {tr.photo_url
                      ? <img src={imgUrl(tr.photo_url)} alt={tr.full_name} />
                      : <span>{tr.full_name.charAt(0).toUpperCase()}</span>}
                  </div>
                  <div>
                    <strong>{tr.full_name}</strong>
                    <em>{tr.title}</em>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {pages > 1 && (
        <div className="t-controls">
          <button className="t-prev" onClick={() => setPage(p => (p - 1 + pages) % pages)} aria-label="Önceki">‹</button>
          <div className="t-dots">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                className={i === page ? 'active' : ''}
                onClick={() => setPage(i)}
                aria-label={`Sayfa ${i + 1}`}
              />
            ))}
          </div>
          <button className="t-next" onClick={() => setPage(p => (p + 1) % pages)} aria-label="Sonraki">›</button>
        </div>
      )}
    </>
  );
}
