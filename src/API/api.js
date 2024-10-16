import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const API_KEY = "hubg1xoHbzezxdG_gVE1Sblwl21-_AMO0bExrhRibGw";
const image_per_page = 20;

export const fetchCharacters = async (name) => {
    const response = await axios.get(`/character?name=${name}`);
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