import React, { useState } from 'react';
import { Center, Text } from '@mantine/core';
import { fetchSummonerInfo } from '@/api/riotApi';
import { useNavigate } from 'react-router-dom';


// interface SearchFormProps {
//   onSearch: (summonerName: string) => void;
// }

interface SearchFormProps {
    summoner: summoner;
}

export interface summoner {
    name: string;
}

export default function SearchForm(){ //{ React.FC<SearchFormProps> = ({ onSearch }) => {
  const [summonerName, setSummonerName] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/results/${summonerName}`);
    handleSearch(summonerName);
  };
  const [stats, setStats] = useState<any>(null); // Define a proper type based on the API response

  const handleSearch = async (summonerName: string) => {
    const data = await fetchSummonerInfo(summonerName);
    setStats(data);
  };

  return (
    <>
    <Center mt={40}>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={summonerName} 
        onChange={(e) => setSummonerName(e.target.value)} 
        placeholder="Enter Summoner Name" 
      />
      <button type="submit">Search</button>
    </form>
    </Center>
    </>
  );
};


// export default SearchForm;
