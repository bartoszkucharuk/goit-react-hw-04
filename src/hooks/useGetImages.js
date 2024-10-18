import { useState } from "react";
import { fetchImages } from "../API/api";

export const useGetImages = () => {
  const [imagesList, setImagesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);


  //const getImage is a call to API site
  const getImage = async (name) => {
    try {
      setIsLoading(true);
      const images = await fetchImages(name);
      setImagesList(images);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    imagesList,
    getImage,
  }
 }
