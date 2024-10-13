import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async () => {
    const response = await axios.get("/character");
    return response.data.results;
};

// export const fetchEpisodes = async () => {
//     const response = await axios.get("/episode");
//     return response.data.results;
// };

// export const fetchLocations = async () => {
//     const response = await axios.get("/location");
//     return response.data.results;
// };