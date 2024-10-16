import { useState } from "react";
import { fetchCharacters } from "../API/api";

export const useGetCharacters = () => {
  const [charactersList, setCharactersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);


  //const getCharacter is a call to API site
  const getCharacter = async (name) => {
    try {
      setIsLoading(true);
      const characters = await fetchCharacters(name);
      setCharactersList(characters);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    charactersList,
    getCharacter,
  }
 }
