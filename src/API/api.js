import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (inputValue, page=1) => {
    const response = await axios.get(`/search/photos`, {
        params:
        {
            query: inputValue,
            per_page: 5,
            page: page,
        },
        headers: {
            Authorization: "Client-ID hubg1xoHbzezxdG_gVE1Sblwl21-_AMO0bExrhRibGw"
        },

    });

    return response.data.results;
};