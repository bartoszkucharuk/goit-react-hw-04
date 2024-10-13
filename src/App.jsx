import { useEffect, useState } from 'react';
import './App.css';
import { fetchCharacters } from './API/api';

const useGetCharacters = () => {
  const [charactersList, setCharactersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCharacter = async () => {
      try {
        setIsLoading(true);
        const characters = await fetchCharacters();
        setCharactersList(characters);
       } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCharacter();
  }, []);

  return {
    isLoading,
    error,
    charactersList
  }
 }

function App() {
  const { isLoading, error, charactersList } = useGetCharacters();

  if (isLoading) {
    return <h1>loading...</h1>
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
