import './App.css';
import { useGetCharacters } from './hooks/useGetCharacters';

function App() {
  const { isLoading, error, charactersList } = useGetCharacters();

  if (isLoading) {
    return <h1>Please wait, loading...</h1>
  }
  
  if (error) {
  return <h1>Ups, something went wrong...</h1>
  }
 
  return (
    <>
      <div>{charactersList.map(character => <p key={character.id}>{character.name}</p>) }</div>
    </>
  )
}

export default App
