const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 4000;

const API_KEY = 'RGAPI-3ae034d6-fe24-403d-ad7f-613ea8306877';
const BASE_URL = 'https://americas.api.riotgames.com'; 

//https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/4CheeseHotPocket/NA1?api_key=RGAPI-51f65f1f-babe-4256-bc23-2f92830ff062

// const response = await axios.get(`${BASE_URL}/lol/summoner/v4/summoners/by-name/${encodedSummonerName}`, {
//   headers: {
//     'X-Riot-Token': API_KEY,
//   },
// });

app.use(cors());


// Fetch summoner information
app.get('/summoner/:summonerName', async (req, res) => {
  try {
    const { summonerName } = req.params;
    const encodedSummonerName = encodeURIComponent(summonerName);
    console.log(encodedSummonerName);
    //https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/fispox/NA1?api_key=RGAPI-51f65f1f-babe-4256-bc23-2f92830ff062
    const response = await axios.get(`${BASE_URL}/riot/account/v1/accounts/by-riot-id/${encodedSummonerName}/NA1?api_key=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching summoner stats:', error.response ? error.response.data : error.message);
    if (error.response) {
      console.error('Full Error Response:', error.response);
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

// Fetch match IDs
app.get('/matches/:puuid', async (req, res) => {
  try {
    const { puuid } = req.params;
    const response = await axios.get(`${BASE_URL}/tft/match/v1/matches/by-puuid/${puuid}/ids?count=10`, {
      headers: {
        'X-Riot-Token': API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching match IDs:', error.response ? error.response.data : error.message);
    if (error.response) {
      console.error('Full Error Response:', error.response);
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

// Fetch match details
app.get('/match/:matchId', async (req, res) => {
  try {
    const { matchId } = req.params;
    const response = await axios.get(`${BASE_URL}/tft/match/v1/matches/${matchId}`, {
      headers: {
        'X-Riot-Token': API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching match details:', error.response ? error.response.data : error.message);
    if (error.response) {
      console.error('Full Error Response:', error.response);
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
