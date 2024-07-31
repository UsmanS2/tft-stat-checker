import axios from 'axios';

export const fetchSummonerStats = async (summonerName: string) => {
  try {
    const response = await axios.get(`http://localhost:4000/tft/summoner/${summonerName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching summoner stats:', error);
    return null;
  }
};

export const fetchSummonerInfo = async (summonerName: string) => {
  try {
    console.log('name RAPI: ', summonerName);
    const response = await axios.get(`http://localhost:4000/summoner/${summonerName}`);
    console.log('response RAPI: ', response)
    return response.data;
  } catch (error) {
    console.error('Error fetching summoner info:', error);
    return null;
  }
};


