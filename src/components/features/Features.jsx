import { features, featureTabs } from "../../data/features";
import Button from "../button/Button";
import "./Features.scss";

const Features = () => {
  const [activeFeature] = features;

  return (
    <section
      id="features"
      className="features"
      aria-labelledby="features-title"
    >
      <div className="container">
        <header className="features__intro">
          <h2 id="features-title" className="features__title">
            Features
          </h2>
          <p className="features__text">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </header>

        <div className="features__tabs" role="tablist" aria-label="Features">
          {featureTabs.map((label) => {
            const isActive = label === activeFeature.label;
            return (
              <button
                key={label}
                type="button"
                role="tab"
                className={`features__tab ${isActive ? "features__tab--active" : ""}`}
                aria-selected={isActive}
              >
                <span className="features__tab-label">{label}</span>
              </button>
            );
          })}
        </div>

        <div className="features__panel" role="tabpanel">
          <div className="features__image">
            <img
              src={activeFeature.image.src}
              alt=""
              width={activeFeature.image.width}
              height={activeFeature.image.height}
            />
          </div>

          <div className="features__content">
            <h3 className="features__heading">{activeFeature.title}</h3>
            <p className="features__description">{activeFeature.text}</p>
            <Button className="features__more">More Info</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
