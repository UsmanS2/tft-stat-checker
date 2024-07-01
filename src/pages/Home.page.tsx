import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import React, { useState } from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import SummonerStats from '../components/SummonerStats/SummonerStats';
import { fetchSummonerStats } from '../api/riotApi';
import { summoner } from '../components/SearchForm/SearchForm';

const testName: summoner = {
  name: "hello",
}

export function HomePage() {
  const [stats, setStats] = useState<any>(null); // Define a proper type based on the API response

  const handleSearch = async (summonerName: string) => {
    const data = await fetchSummonerStats(summonerName);
    setStats(data);
  };
  return (
    <>
      <Welcome />
      <SearchForm summoner = {testName} />
      {/* <SummonerStats stats={stats} /> */}
      <ColorSchemeToggle />
    </>
  );
}

