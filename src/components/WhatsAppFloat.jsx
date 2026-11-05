import { buildGeneralLink } from "../whatsApp";

const WhatsAppFloat = () => {
  return (
    <a
      href={buildGeneralLink()}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      💬 Chat with us
    </a>
  );
};
export default WhatsAppFloat;
