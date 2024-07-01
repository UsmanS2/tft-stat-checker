import React from 'react';

interface SummonerStatsProps {
  stats: any; // Define a proper type based on the API response
}

const SummonerStats: React.FC<SummonerStatsProps> = ({ stats }) => {
  if (!stats) return null;

  return (
    <div>
      <h2>Summoner Stats</h2>
      {/* Render stats here */}
      <p>{stats.name}</p>
      <p>Level: {stats.summonerLevel}</p>
      {/* Add more stats as needed */}
    </div>
  );
};

export default SummonerStats;
