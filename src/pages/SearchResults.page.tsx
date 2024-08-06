import { Text } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchForm from '../components/SearchForm/SearchForm';
import SummonerStats from '../components/SummonerStats/SummonerStats';
//import { fetchSummonerStats } from '../api/riotApi';
import { summoner } from '../components/SearchForm/SearchForm';
import { TitleHeader } from '@/components/TitleHeader/TitleHeader';
import ShowingResultsFor from '@/components/ShowingResultsFor/ShowingResultsFor';


export function SearchResultsPage() {
  const { summonerName } = useParams<{ summonerName: string }>();
  
  if (!summonerName){
    return(
      <>
        <Text>no summoner name</Text>
      </>
    );

  }

  return (
    <>
      <TitleHeader />
      <SearchForm />
      <ShowingResultsFor name={summonerName} />
      <ColorSchemeToggle />
    </>
  );
}

