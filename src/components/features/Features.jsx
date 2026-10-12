import { useRef, useState } from "react";
import { features } from "../../data/features";
import Button from "../button/Button";
import "./Features.scss";

const PANEL_ID = "features-panel";
const getTabId = (id) => `features-tab-${id}`;

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const activeFeature = features[activeIndex];

  const selectTab = (index) => {
    setActiveIndex(index);
    tabRefs.current[index].focus();
  };

  const handleKeyDown = (event) => {
    const lastIndex = features.length - 1;
    const nextIndex = {
      ArrowRight: activeIndex === lastIndex ? 0 : activeIndex + 1,
      ArrowLeft: activeIndex === 0 ? lastIndex : activeIndex - 1,
      Home: 0,
      End: lastIndex,
    }[event.key];

    if (nextIndex === undefined) return;
    event.preventDefault();
    selectTab(nextIndex);
  };

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

        <div
          className="features__tabs"
          role="tablist"
          aria-label="Features"
          onKeyDown={handleKeyDown}
        >
          {features.map(({ id, label }, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={id}
                ref={(element) => (tabRefs.current[index] = element)}
                id={getTabId(id)}
                type="button"
                role="tab"
                className={`features__tab ${isActive ? "features__tab--active" : ""}`}
                aria-selected={isActive}
                aria-controls={PANEL_ID}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndex(index)}
              >
                <span className="features__tab-label">{label}</span>
              </button>
            );
          })}
        </div>

        <div
          id={PANEL_ID}
          className="features__panel"
          role="tabpanel"
          aria-labelledby={getTabId(activeFeature.id)}
        >
          <div
            className={`features__image features__image--${activeFeature.id}`}
          >
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
