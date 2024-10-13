import './App.css';
import { useGetCharacters } from './hooks/useGetCharacters';
import Loader from "./components/Loader"
import Error from "./components/Error"
import CharactersList from "./components/CharactersList"
import SearchForm from "./components/SearchForm"

function App() {
  const { isLoading, error, charactersList } = useGetCharacters();

  if (isLoading) {
    return <Loader />
  }
  
  if (error) {
  return <Error />
  }
 
  return (
    <>
      <div>
        <SearchForm />
        <CharactersList characters={charactersList} />
      </div>
    </>
  )
}

export default App
