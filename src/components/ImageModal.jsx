import React from 'react';
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ modalWindowIsOpen, onRequestClose, currentImage}) {
  return (
    <Modal
      className={styles.ImageModal}
      isOpen={modalWindowIsOpen}
      onRequestClose={onRequestClose}
      overlayClassName={styles.overlay}
    >
      {currentImage && <img className={styles.modalImage} src={currentImage.urls.regular} alt={currentImage.alt_description} />}
        
      </Modal>
  )
};
