import './App.css';
import { AppBar } from './AppBar';
import { CountryCard } from './CountryCard';
import { RegionOptions } from './RegionOptions';
import { SearchBar } from './SearchBar';
import data from './data.json'
import { useEffect, useState } from 'react'


function App() {
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState(data);

  useEffect(() => {
      if(region === ""){
        const filtered = data.filter(country => country.name.toLowerCase().includes(search.toLowerCase()));
        setCountries(filtered)
      }else{
        if(search === "") {
          const filtered = data.filter(country => country.region.toLowerCase().includes(region.toLowerCase()));
          setCountries(filtered);
        }else{
          const filtered = data.filter(country => country.region.toLowerCase().includes(region.toLowerCase()));
          const searchWithFilter = filtered.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
          setCountries(searchWithFilter);
        }
      }
  }, [search, region])

  return (
    <div className="App">
      <AppBar/>
      <div className='dark:bg-blue-background bg-gray-light min-h-screen pt-32'>
        <SearchBar search={search} setSearch={setSearch} />
        <RegionOptions data={data} region={region} setRegion={setRegion}/>
        {countries.map((country) => {
          return(
            <CountryCard alpha2Code={country.alpha2Code} countryName={country.name} population={country.population} capital={country.capital} region={country.region} flagURL={country.flags.svg}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
