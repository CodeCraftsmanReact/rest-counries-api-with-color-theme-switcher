export function SearchBar({ search, setSearch }) {

  return (
    <div className='mx-6 mb-8'>
      <form class="">
        <label for="default-search" class="mb-2 text-sm font-medium text-blue-text sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-blue-text dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input onChange={(e) => { setSearch(e.target.value); }} value={search} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-blue-text  rounded-lg dark:bg-blue-main focus:ring-blue-background focus:border-blue-main bg-white  dark:placeholder-white dark:text-white  " placeholder="Search for a country..." required />
        </div>
      </form>
    </div>

  );
}
