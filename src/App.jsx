import './App.css';
import { useGetImages } from './hooks/useGetImages';
import Loader from "./components/Loader"
import ErrorMessage from "./components/ErrorMessage"
import ImageGallery from "./components/ImageGallery"
import SearchBar from "./components/SearchBar"
import Modal from 'react-modal'
import { useState } from 'react';

function App() {
  const { isLoading, error, imagesList, getImage } = useGetImages();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  Modal.setAppElement('#root');


  if (isLoading) {
    return <Loader />
  }
  
  if (error) {
  return <ErrorMessage />
  }
 
  return (
    <>
      <SearchBar getImage={getImage} />
      <ImageGallery frames={imagesList} />

      <button onClick={() => setModalIsOpen(true)}>Open modal</button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setModalIsOpen(false)}
       />
        {/* <h1>duży obraz tutaj + stylizacja</h1> */}

    </>
  )
}

export default App
