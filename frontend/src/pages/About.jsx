import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">{t('section.about.kicker')}</span>
          <h1>{t('section.about.title')}</h1>
          <p>{t('section.about.p')}</p>
          <div className="breadcrumb"><Link to="/">{t('common.home')}</Link> /&nbsp; {t('nav.about')}</div>
        </div>
      </section>

      <section className="section">
        <div className="container about-row">
          <div className="about-img">
            <img src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=900&q=80" alt="ÇITIR mutfak" />
          </div>
          <div>
            <span className="kicker">Lezzet Hikayemiz</span>
            <h2>Bir Aile Tarifinden<br />Şehrin En Sevileni'ne</h2>
            <div style={{ width: 80, height: 3, background: 'var(--paprika)', margin: '16px 0 22px' }}></div>
            <p>ÇITIR'ın hikayesi 15 yıl önce küçük bir aile tezgâhında başladı. Annemizin gizli baharat karışımı, babamızın çift kızartma tekniği ve bizim "her tavuk taze olmalı" ilkemizle bugün şehrin en sevilen tavukçularından biri olduk.</p>
            <p>Asla dondurulmuş ürün kullanmıyoruz, tavuklarımız her gün taze geliyor. Soslarımız ev yapımı, baharatlarımız değirmenden taze öğütülmüş. Çünkü çıtır tavuğun sırrı detaylarda saklı.</p>
            <ul>
              <li>Günlük taze tavuk, asla dondurulmuş değil</li>
              <li>15 yıllık aile tarifi gizli baharat karışımı</li>
              <li>Çift kızartma tekniğiyle ekstra kıtır kaplama</li>
              <li>18 farklı ev yapımı sos</li>
              <li>Trans yağsız, doğal pişirme yağı</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Değerlerimiz</span>
            <h2>Bizi Yönlendiren İlkeler</h2>
            <div className="divider"></div>
          </div>
          <div className="grid grid-3">
            <div className="price-card" style={{ transform: 'none' }}>
              <h3>Tazelik</h3>
              <p style={{ color: 'var(--muted)' }}>Tavuklarımız her sabah taze gelir. Gün sonunda kalan ürünler asla ertesi güne saklanmaz.</p>
            </div>
            <div className="price-card" style={{ transform: 'none' }}>
              <h3>Lezzet</h3>
              <p style={{ color: 'var(--muted)' }}>Gizli baharat karışımı, çift kızartma tekniği ve ev yapımı soslar — her ısırıkta fark ediyorsunuz.</p>
            </div>
            <div className="price-card" style={{ transform: 'none' }}>
              <h3>Hız</h3>
              <p style={{ color: 'var(--muted)' }}>Sipariş anında pişiyoruz; sıcak ve hızlı servis bizim olmazsa olmazımızdır.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
