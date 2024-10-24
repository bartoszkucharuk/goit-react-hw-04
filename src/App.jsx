import './App.css';
import { useState } from 'react';
import { useGetImages } from './hooks/useGetImages';
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import ImageGallery from "./components/ImageGallery";
import SearchBar from "./components/SearchBar";
import ImageModal from './components/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn';

function App() {
  const { isLoading, error, imagesList, getImage, loadMoreImages } = useGetImages();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);


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
      {isLoading && <Loader />}
      {imagesList.length > 0 && !isLoading && (
        <LoadMoreBtn onClickLoad={loadMoreImages} />
      )}
      {error && <ErrorMessage />}
      <ImageModal modalWindowIsOpen={modalIsOpen} onRequestClose={closeModal} currentImage={currentImage} />
    </>
  )
}

export default App
