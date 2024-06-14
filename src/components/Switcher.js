import React, { useState } from 'react';
import useDarkSide from '../useDarkSide';
import moonIcon from '../assets/moon.svg';
import sunIcon from '../assets/sun.svg';


export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };


  return (
    <>
      <div>
        <div checked={darkSide} onClick={toggleDarkMode} className='text-xs cursor-pointer flex gap-2'>
          <div className='w-4'>
            {colorTheme==='light' ?  <img src={moonIcon} /> : <img src={sunIcon}/>}
          </div>
          {colorTheme==='light' ? "Dark mode" : "Light Mode"}
        </div>
      </div>
    </>
  );
}