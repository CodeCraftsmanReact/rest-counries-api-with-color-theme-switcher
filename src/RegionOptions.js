import { getRegions } from './utils';

export function RegionOptions({ data, region, setRegion }) {
  const regions = getRegions(data).map(function (value) {
    return value.region;
  });

  return (
    <form class="w-[50%] ml-6 mb-6">
      <div className='rounded'>
        <select id="countries" value={region} onChange={(e) => setRegion(e.target.value)} class="bg-white text-blue-text text-sm rounded-lg block w-full p-2.5 dark:bg-blue-main dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="" selected>Filter by region</option>
          {regions.map((region) => (
            <option className='first:rounded-t-xl'>{region}</option>
          ))}
        </select>
      </div>

    </form>
  );
}
