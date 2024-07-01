import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}

// import React, { useState } from 'react';
// import SearchForm from './components/SearchForm/SearchForm';
// import SummonerStats from './components/SummonerStats/SummonerStats';
// import { fetchSummonerStats } from './api/riotApi';

// const App: React.FC = () => {
  // const [stats, setStats] = useState<any>(null); // Define a proper type based on the API response

  // const handleSearch = async (summonerName: string) => {
  //   const data = await fetchSummonerStats(summonerName);
  //   setStats(data);
  // };

//   return (
//     <div className="App">
//       <h1>Teamfight Tactics Stats</h1>
//       <SearchForm onSearch={handleSearch} />
//       <SummonerStats stats={stats} />
//     </div>
//   );
// };

// export default App;
