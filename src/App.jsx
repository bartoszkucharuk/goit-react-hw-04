import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";


const apiUrl = "https://rickandmortyapi.com/api/character";

const useGetCharacters = () => {
  const [charactersList, setCharactersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCharacter = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(apiUrl);
        console.log(response.data);
        setCharactersList(response.data.results);
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
