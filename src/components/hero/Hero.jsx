import heroIllustration from "../../assets/images/illustration-hero.svg?url";
import Button from "../button/Button";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__container">
        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">
            A Simple Bookmark Manager
          </h1>
          <p className="hero__text">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="hero__actions">
            <Button
              href="https://chromewebstore.google.com"
            >
              Get it on Chrome
            </Button>
            <Button
              variant="secondary"
              href="https://addons.mozilla.org"
            >
              Get it on Firefox
            </Button>
          </div>
        </div>

        <div className="hero__image">
          <img src={heroIllustration} alt="" width="657" height="466" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
