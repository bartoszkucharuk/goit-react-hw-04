import { useState } from "react";
import { fetchImages } from "../API/api";

export const useGetImages = () => {
  const [imagesList, setImagesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);


  //const getImage is a call to API site
  const getImage = async (inputValue) => {
    try {
      setIsLoading(true);
      const images = await fetchImages(inputValue);
      setImagesList(images);
      // VVV ustalanie stanu wyszukiwania inputValue
      setInputValue(inputValue);
      // ^^^ ustalanie stanu wyszukiwania inputValue
      setCurrentPage(1);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreImages = async () => {
    const nextPage = currentPage + 1;  
    try {
      setIsLoading(true);
      const newImages = await fetchImages(inputValue, nextPage);
      setCurrentPage(nextPage);
      setImagesList((prevImages) => [...prevImages, ...newImages ]);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
      scrollDownToButton();
    }
  };

 const scrollDownToButton = () => {
      setTimeout(() => {
        window.scrollBy({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    };

  return {
    isLoading,
    error,
    imagesList,
    getImage,
    loadMoreImages,
  };
 }
