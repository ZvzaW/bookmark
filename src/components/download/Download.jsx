import { browsers } from "../../data/browsers";
import Button from "../button/Button";
import "./Download.scss";

const Download = () => {
  return (
    <section
      id="download"
      className="download"
      aria-labelledby="download-title"
    >
      <div className="container">
        <div className="download__intro">
          <h2 id="download-title" className="download__title">
            Download the extension
          </h2>
          <p className="download__text">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>

        <ul className="download__list">
          {browsers.map(({ name, minVersion, logo, href }) => (
            <li key={name} className="download__card">
              <img
                className="download__logo"
                src={logo.src}
                alt=""
                width={logo.width}
                height={logo.height}
              />
              <h3 className="download__name">Add to {name}</h3>
              <p className="download__version">Minimum version {minVersion}</p>
              <div className="download__footer">
                <Button
                  href={href}
                  className="download__button"
                  aria-label={`Add & Install Extension for ${name}`}
                >
                  Add & Install Extension
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Download;
