import React, { useState } from 'react';
import { Text } from '@mantine/core';
import { fetchSummonerStats } from '@/api/riotApi';

// interface SearchFormProps {
//   onSearch: (summonerName: string) => void;
// }

interface SearchFormProps {
    summoner: summoner;
}

export interface summoner {
    name: string;
}

export default function SearchForm({ summoner }: SearchFormProps){ //{ React.FC<SearchFormProps> = ({ onSearch }) => {
 const [summonerName, setSummonerName] = useState('');

 const handleSearch = async (summonerName: string) => {
   const data = await fetchSummonerStats(summonerName);
   <Text> {data} </Text>
   //setStats(data);
 }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(summonerName);
  };
  const [stats, setStats] = useState<any>(null); // Define a proper type based on the API response


  return (
    <>
    <Text>SearchForm + {summoner.name }</Text>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={summonerName} 
        onChange={(e) => setSummonerName(e.target.value)} 
        placeholder="Enter Summoner Name" 
      />
      <button type="submit">Search</button>
    </form>
    </>
  );
};

// export default SearchForm;
