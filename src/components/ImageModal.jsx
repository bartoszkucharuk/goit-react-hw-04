import React from 'react';
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    },  
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: 0,
    margin: 0,
    scroll: 'auto',
  },
};

Modal.setAppElement("#root");

export default function ImageModal({ modalWindowIsOpen, onRequestClose, currentImage}) {
  return (
    <Modal
      className={styles.ImageModal}
      isOpen={modalWindowIsOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      {currentImage && <img src={currentImage.urls.regular} alt={currentImage.alt_description} />}
        
      </Modal>
  )
};
