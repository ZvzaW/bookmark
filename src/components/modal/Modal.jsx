import { useEffect, useRef } from "react";
import CloseIcon from "../../assets/images/icon-close.svg";
import "./Modal.scss";

const Modal = ({ isOpen, onClose, labelledBy, children }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  const handleClick = (event) => {
    if (event.target === dialogRef.current) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby={labelledBy}
      onClose={onClose}
      onClick={handleClick}
    >
      <div className="modal__content">
        <button
          type="button"
          className="modal__close"
          aria-label="Close"
          onClick={onClose}
        >
          <CloseIcon aria-hidden="true" />
        </button>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
