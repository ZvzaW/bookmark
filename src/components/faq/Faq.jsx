import { useState } from "react";
import ArrowIcon from "../../assets/images/icon-arrow.svg";
import { faq } from "../../data/faq";
import Button from "../button/Button";
import "./Faq.scss";

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <section id="faq" className="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="faq__intro">
          <h2 id="faq-title" className="faq__title">
            Frequently Asked Questions
          </h2>
          <p className="faq__text">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>

        <ul className="faq__list">
          {faq.map(({ id, question, answer }) => {
            const isOpen = id === openId;
            return (
              <li
                key={id}
                className={`faq__item ${isOpen ? "faq__item--open" : ""}`}
              >
                <h3 className="faq__question">
                  <button
                    type="button"
                    id={`faq-question-${id}`}
                    className="faq__toggle"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${id}`}
                    onClick={() => toggle(id)}
                  >
                    {question}
                    <ArrowIcon className="faq__arrow" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={`faq-answer-${id}`}
                  className="faq__answer"
                  role="region"
                  aria-labelledby={`faq-question-${id}`}
                >
                  <div className="faq__answer-inner">
                    <p className="faq__answer-text">{answer}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="faq__actions">
          <Button className="faq__more">More Info</Button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
