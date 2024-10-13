import { useEffect, useState } from "react";
import { fetchCharacters } from "../API/api";

export const useGetCharacters = () => {
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
