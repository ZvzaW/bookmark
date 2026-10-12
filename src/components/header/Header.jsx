import { useEffect, useState } from "react";
import Logo from "../../assets/images/logo-bookmark.svg";
import HamburgerIcon from "../../assets/images/icon-hamburger.svg";
import CloseIcon from "../../assets/images/icon-close.svg";
import FacebookIcon from "../../assets/images/icon-facebook.svg";
import TwitterIcon from "../../assets/images/icon-twitter.svg";
import { navLinks, socialLinks } from "../../data/navigation";
import Button from "../button/Button";
import "./Header.scss";

const socialIcons = { Facebook: FacebookIcon, Twitter: TwitterIcon };

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    const desktopQuery = window.matchMedia("(min-width: 768px)");

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", closeMenu);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", closeMenu);
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${isMenuOpen ? "header--open" : ""}`}>
      <div className="container header__container">
        <a
          href="/"
          className={`header__logo ${isMenuOpen ? "logo--menu" : ""}`}
          aria-label="Bookmark - home"
        >
          <Logo aria-hidden="true" />
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <CloseIcon aria-hidden="true" />
          ) : (
            <HamburgerIcon aria-hidden="true" />
          )}
        </button>

        <div id="main-menu" className="header__menu">
          <nav aria-label="Main">
            <ul className="header__list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="header__link" onClick={closeMenu}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Button variant="accent" className="header__login">
            Login
          </Button>

          <ul className="header__social">
            {socialLinks.map(({ label, href }) => {
              const Icon = socialIcons[label];
              return (
                <li key={label}>
                  <a
                    href={href}
                    className="header__social-link"
                    aria-label={label}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
