import { useEffect, useRef, useState } from 'react';

function useCountUp(target, duration = 1500, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf, startTime;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return val;
}

function StatItem({ stat, animate }) {
  const v = useCountUp(stat.value, 1500, animate);
  return (
    <div className="stat-item">
      <div className="icon">{stat.icon}</div>
      <div>
        <span className="stat-num">{v.toLocaleString('tr-TR')}</span>
        <span className="stat-suffix">{stat.suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function StatsCounter({ stats = [] }) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setAnimate(true)),
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((s) => <StatItem key={s.id} stat={s} animate={animate} />)}
        </div>
      </div>
    </section>
  );
}
