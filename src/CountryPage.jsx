import React from 'react'
import { AppBar } from './AppBar';
import  data  from './data.json'
import { useNavigate, useParams } from 'react-router-dom';
import { convertBorderCode, numberWithCommas } from './utils';
import LeftArrow from './assets/left-arrow.jsx';



const CountryPage = () => {
    const {countryID} = useParams();
    let country = data.filter((country) => country.alpha2Code === countryID);
    let countryData = country[0];
    const navigate = useNavigate();
  return (
    <div>
        <AppBar/>
        <div className='dark:bg-blue-background bg-gray-light min-h-screen px-8 py-32 dark:text-white'>
                <div onClick={()=> navigate('/')} className='flex items-center dark:bg-blue-main w-fit px-4 py-2 shadow-lg gap-2 mb-8'>
                    <LeftArrow className="dark:stroke-white w-6 stroke-black"/>
                    <div>Back</div>
                </div>
            <img src={countryData.flags.svg} alt={`${countryData.name} flag`}/>
            <div className='text-xl font-bold my-6'>{countryData.name}</div>
            <div className='text-sm'>
                <div>Native name: <span className='dark:text-white/40'>{countryData.nativeName}</span></div>
                <div>Population: <span className='dark:text-white/40'>{numberWithCommas(countryData.population)}</span></div>
                <div>Region: <span className='dark:text-white/40'>{countryData.region}</span></div>
                <div>Sub Region: <span className='dark:text-white/40'>{countryData.subregion}</span></div>
                <div>Capital: <span className='dark:text-white/40'>{countryData.capital}</span></div>
                <div>Top Level Domain: <span className='dark:text-white/40'>{countryData.topLevelDomain[0]}</span></div>
                <div className='py-4 flex gap-1'>
                    <div className='font-semibold'>Currencies:</div>
                    {countryData.currencies?.map((currency, index) => {
                        return(
                            <span className='dark:text-white/40'>{currency.name}{countryData.currencies.length === index+1 ? "" : ","}</span>
                        )
                    })}
                </div>
                <div className='py-4 flex gap-1'>
                    <div className='font-semibold'>Languages: </div>
                    {
                        countryData.languages?.map((language, index) => {
                            return(
                                <div className='dark:text-white/40'>{language.name}{countryData.languages.length === index + 1 ? "" : ","}</div>
                            )
                        })
                    }
                </div>
                <div>
                    {countryData.borders && <div className='mb-4'>Border Countries: </div>}
                    <div className='flex flex-wrap w-64 gap-2'>
                        {
                            countryData.borders?.map((border) => {
                                return(
                                    <>
                                    
                                        <div className='px-6 shadow-md bg-gray-light dark:dark:text-white/40 py-1 dark:bg-blue-main'>{convertBorderCode(border)}</div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CountryPage