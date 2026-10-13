import Logo from "../../assets/images/logo-bookmark.svg";
import { navLinks, socialLinks } from "../../data/navigation";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <a
          href="/"
          className="footer__logo logo--footer"
          aria-label="Bookmark - home"
        >
          <Logo aria-hidden="true" />
        </a>

        <nav className="footer__nav" aria-label="Footer">
          <ul className="footer__list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="footer__link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="footer__social">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a href={href} className="footer__social-link" aria-label={label}>
                <Icon aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
