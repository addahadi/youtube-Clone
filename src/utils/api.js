import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'c21a759ab7msh1d11cb213d36bf9p10e441jsn82a9681bb8fa',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const FetchData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};