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
            <h2>1950'den Bu Yana<br />Misafir Ağırlıyoruz</h2>
            <div style={{ width: 80, height: 3, background: 'var(--paprika)', margin: '16px 0 22px' }}></div>
            <p>İçmeler'de 1950'li yılların başından bu yana misafir ağırlamaktayız. Buraların ünlü köy tavuğu günümüze yorumlana yorumlana gelse de anlayış ve tavır aynı samimiyeti ile ilerlemektedir.</p>
            <p>Ağırladığımız misafirlere konaklama, gezi ve gastronomi anlamında eşlik eden bir aileyken; şimdilerde geleneğimizin ağırlaması olan, evimizin salonu olarak gördüğümüz İçmeler Tavukçusu'nda sizlerle buluşuyoruz.</p>
            <ul>
              <li>1950'lerden gelen aile geleneği</li>
              <li>İçmeler'in ünlü köy tavuğu</li>
              <li>Samimi, ev sıcaklığında ağırlama</li>
              <li>Yöresel mutfak ve gastronomi anlayışı</li>
              <li>Marmaris'in lezzet adresi</li>
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
