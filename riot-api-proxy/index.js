const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 4000;

const API_KEY = 'RGAPI-960f8640-3c22-4865-ae33-075632661ee5';
const BASE_URL = 'https://na1.api.riotgames.com';

app.use(cors());

app.get('/tft/summoner/:summonerName', async (req, res) => {
  try {
    const { summonerName } = req.params;
    const response = await axios.get(`${BASE_URL}/tft/summoner/v1/summoners/by-name/${summonerName}`, {
      headers: {
        'X-Riot-Token': API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching summoner stats' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
