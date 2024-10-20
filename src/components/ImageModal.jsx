import React from 'react';
import Modal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement("#root");

export default function ImageModal({ modalWindowIsOpen, onRequestClose, currentImage}) {
  return (
    <Modal
      isOpen={modalWindowIsOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      {currentImage && <img src={currentImage.urls.regular} alt={currentImage.alt_description} />}
        
      </Modal>
  )
};
