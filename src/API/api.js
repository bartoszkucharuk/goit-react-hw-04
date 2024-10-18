import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (name) => {
    const response = await axios.get(`/search/photos`, {
        params:
        {
            query: name,
            per_page: 20,
            page: 1,
        },
        headers: {
            Authorization: "Client-ID hubg1xoHbzezxdG_gVE1Sblwl21-_AMO0bExrhRibGw"
        },

    });

    console.log(response.data); // czytanie wyników z API
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