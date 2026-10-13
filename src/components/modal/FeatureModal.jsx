import { features } from "../../data/features";
import Button from "../button/Button";
import Modal from "./Modal";
import "./FeatureModal.scss";

const feature = features[1];

const FeatureModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="feature-modal-title">
      <div className="feature-modal">
        <div className="feature-modal__image">
          <img
            src={feature.image.src}
            alt=""
            width={feature.image.width}
            height={feature.image.height}
          />
        </div>

        <div className="feature-modal__content">
          <p className="feature-modal__label">{feature.label}</p>
          <h2 id="feature-modal-title" className="feature-modal__title">
            {feature.title}
          </h2>
          <p className="feature-modal__text">{feature.text}</p>
          <Button href="#faq" className="feature-modal__more" onClick={onClose}>
            More Info
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default FeatureModal;
