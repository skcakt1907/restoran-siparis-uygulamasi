export default function MenuCard({ item }) {
  return (
    <article className="menu-card">
      <div className="menu-card-img">
        {item.image_url ? (
          <img src={item.image_url} alt={item.name} loading="lazy" />
        ) : (
          <div className="menu-card-placeholder">🍽️</div>
        )}
        {item.is_featured && <span className="badge-featured">Chef's Pick</span>}
      </div>
      <div className="menu-card-body">
        <div className="menu-card-head">
          <h3>{item.name}</h3>
          <span className="menu-card-price">${Number(item.price).toFixed(2)}</span>
        </div>
        <p>{item.description}</p>
        <span className="menu-card-tag">{item.category}</span>
      </div>
    </article>
  );
}
