import { BUSINESS_NAME, WHATSAPP_NUMBER } from "./config";

// 15000 becomes "₦15,000"
export const formatPrice = (price) => `₦${price.toLocaleString("en-NG")}`;

// Takes a LIST of items, even though v1 only ever sends one.
// That's what lets the cart in v2 reuse this same function.
export const buildOrderLink = (items) => {
  const lines = items.map(
    (item) =>
      `${item.quantity ?? 1} x ${item.title} (${formatPrice(item.price)})`,
  );

  const message = `Hello ${BUSINESS_NAME}, I'd like to order:\n${lines.join("\n")}`;

  // encodeURIComponent makes the text safe for a web address
  // (spaces, ₦, and line breaks all need converting)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const buildGeneralLink = () => {
  const message = `Hello ${BUSINESS_NAME}, I have a question.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};