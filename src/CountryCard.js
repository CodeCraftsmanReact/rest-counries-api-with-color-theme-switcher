import { numberWithCommas } from './utils';
import { useNavigate } from 'react-router-dom'

export function CountryCard({ flagURL, countryName, population, region, capital, alpha2Code }) {
  const navigate = useNavigate();
  return (
    <div className='w-72 mx-auto' onClick={() => navigate(`/${alpha2Code}`) }>
      <div className='md:w-[288px] md:flex md:items-start md:h-[200px] dark:bg-blue-main md:overflow-hidden'>
        <img src={flagURL} className='rounded-t-md w-full dark:bg-blue-main' />
      </div>
      <div className=' dark:bg-blue-main dark:text-white p-6  mb-12 rounded-b-md'>
        <div>{countryName}</div>
        <div>Population: {numberWithCommas(population)}</div>
        <div>Region: {region}</div>
        <div>Capital: {capital}</div>
      </div>
    </div>
  );
}
