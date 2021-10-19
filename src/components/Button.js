import { Link } from "react-router-dom";

import "./Button.css";

function Button({ link, onClick, href, children }) {
  return link ? (
    <Link to={link} onClick={onClick} className="button">
      {children}
    </Link>
  ) : (
    href && (
      <a href={href} className="button">
        Login
      </a>
    )
  );
}
export default Button;
