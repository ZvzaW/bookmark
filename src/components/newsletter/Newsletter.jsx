import { useState } from "react";
import ErrorIcon from "../../assets/images/icon-error.svg";
import Button from "../button/Button";
import { emailSchema } from "../../utils/schemas";
import { validate } from "../../utils/schemas";
import "./Newsletter.scss";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleChange = (event) => {
    setEmail(event.target.value);
    setIsSubscribed(false);
    if (error) setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = validate(emailSchema, email);

    setError(message);
    if (message) return;

    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section
      id="contact"
      className="newsletter"
      aria-labelledby="newsletter-title"
    >
      <div className="container newsletter__container">
        <p className="newsletter__joined">35,000+ already joined</p>
        <h2 id="newsletter-title" className="newsletter__title">
          Stay up-to-date with what we’re doing
        </h2>

        <form className="newsletter__form" noValidate onSubmit={handleSubmit}>
          <div
            className={`newsletter__field ${error ? "newsletter__field--error" : ""}`}
          >
            <input
              id="newsletter-email"
              className="newsletter__input"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleChange}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "newsletter-error" : undefined}
            />
            {error && (
              <>
                <ErrorIcon
                  className="newsletter__error-icon"
                  aria-hidden="true"
                />
                <p id="newsletter-error" className="newsletter__error">
                  {error}
                </p>
              </>
            )}
          </div>

          <Button type="submit" variant="accent" className="newsletter__submit">
            Contact Us
          </Button>
        </form>

        <p className="newsletter__status" role="status">
          {isSubscribed && "Thanks! We’ll keep you posted."}
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
