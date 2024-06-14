import Switcher from './components/Switcher';

export function AppBar() {
  return (
    <div className='fixed z-10 left-0 right-0 flex justify-between px-3 py-8 dark:bg-blue-main dark:text-white font-semibold bg-gray-light'>
      <div>Where in the world?</div>
      <div><Switcher /></div>
    </div>
  );
}
