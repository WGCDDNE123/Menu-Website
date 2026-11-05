import { buildOrderLink, formatPrice } from "./whatsApp";

const MenuItem = ({ title, price, img, desc, available }) => {
  const orderLink = buildOrderLink([title, price]);
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price"> ${price} </span>
        </header>
        <p className="item-text">{desc}</p>

        {available ? (
          <a
            href={orderLink}
            target="_blank"
            rel="noreferrer"
            className="order-btn"
          >
            Order on WhatsApp
          </a>
        ) : (
          <button className="order-btn" disabled>
            Sold Out
          </button>
        )}
      </div>
    </article>
  );
};
export default MenuItem;
