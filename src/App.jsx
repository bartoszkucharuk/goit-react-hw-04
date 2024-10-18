import './App.css';
import { useGetCharacters } from './hooks/useGetCharacters';
import Loader from "./components/Loader"
import ErrorMessage from "./components/ErrorMessage"
import ImageGallery from "./components/ImageGallery"
import SearchBar from "./components/SearchBar"

function App() {
  const { isLoading, error, charactersList, getCharacter } = useGetCharacters();

  if (isLoading) {
    return <Loader />
  }
  
  if (error) {
  return <ErrorMessage />
  }
 
  return (
    <>
      <div>
        <SearchBar getCharacter={getCharacter} />
        <ImageGallery characters={charactersList} />
      </div>
    </>
  )
}

export default App
