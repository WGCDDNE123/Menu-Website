import { BUSINESS_NAME } from "../config";
import logo from "../assets/logo.png";

const BusinessName = () => {
  return (
    <div className="brand-container">
      <img src={logo} alt={BUSINESS_NAME} className="logo" />
    </div>
  );
};
export default BusinessName;
