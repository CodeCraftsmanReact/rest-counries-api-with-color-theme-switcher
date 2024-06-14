import { numberWithCommas } from './utils';
import { useNavigate } from 'react-router-dom'

export function CountryCard({ flagURL, countryName, population, region, capital, alpha2Code }) {
  const navigate = useNavigate();
  return (
    <div className='w-72 mx-auto' onClick={() => navigate(`/${alpha2Code}`) }>
      <img src={flagURL} className='rounded-t-md' />
      <div className=' dark:bg-blue-main dark:text-white p-6  mb-12 rounded-b-md'>
        <div>{countryName}</div>
        <div>Population: {numberWithCommas(population)}</div>
        <div>Region: {region}</div>
        <div>Capital: {capital}</div>
      </div>
    </div>
  );
}
