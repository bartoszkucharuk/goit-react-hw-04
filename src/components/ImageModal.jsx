import React from 'react';
import Modal from "react-modal";

// customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

Modal.setAppElement("#root");

export default function ImageModal() {
  return (
    <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setModalIsOpen(false)}
      >
        
        <h1>obraz duży tutaj</h1>
        <p>obraz duży tutaj</p>
        
        <div>
          <button onClick={() => setModalIsOpen(false)}></button>
        </div>
      </Modal>
  )
};
