import { buildOrderLink, formatPrice } from "./whatsApp";

const MenuItem = ({ title, price, img, desc, available }) => {
  // console.log(title, price);
  const orderLink = buildOrderLink([{title, price}]);
  return (
    <article className={`menu-item ${available ? "" : "sold-out"}`}>
      <div className="img-wrapper">
        <img src={img} alt={title} className="img" />
        {!available && <span className="sold-out-ribbon">SOLD OUT</span>}
      </div>
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price"> {formatPrice(price)} </span>
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
