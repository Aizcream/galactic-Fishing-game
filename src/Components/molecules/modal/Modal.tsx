import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;
  const modalRoot = document.getElementById("modal-root")!;

  const content = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer" />
      <div
        className="relative bg-white rounded-lg shadow-lg p-6 max-w-md w-full z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, modalRoot);
};

export default Modal;
