import './App.css';
import { useGetImages } from './hooks/useGetImages';
import Loader from "./components/Loader"
import ErrorMessage from "./components/ErrorMessage"
import ImageGallery from "./components/ImageGallery"
import SearchBar from "./components/SearchBar"

function App() {
  const { isLoading, error, imagesList, getImage } = useGetImages();

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
    </>
  )
}

export default App
