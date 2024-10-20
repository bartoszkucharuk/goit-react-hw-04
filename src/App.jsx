import './App.css';
import { useGetImages } from './hooks/useGetImages';
import Loader from "./components/Loader"
import ErrorMessage from "./components/ErrorMessage"
import ImageGallery from "./components/ImageGallery"
import SearchBar from "./components/SearchBar"
import ImageModal from './components/ImageModal';
import { useState } from 'react'

function App() {
  const { isLoading, error, imagesList, getImage } = useGetImages();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  if (isLoading) {
    return <Loader />
  }
  
  if (error) {
  return <ErrorMessage />
  }

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage(null);
  };

  const openModal = (currentImageInfos) => {
    setCurrentImage(currentImageInfos);
    setModalIsOpen(true);
  };
 
  return (
    <>
      <SearchBar getImage={getImage} />
      <ImageGallery frames={imagesList} openModal={openModal} />

      <button onClick={openModal}>Open modal</button>
      <ImageModal modalWindowIsOpen={modalIsOpen} onRequestClose={closeModal} currentImage={currentImage} />

    </>
  )
}

export default App
