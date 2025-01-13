import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
export default function SearchBox({ onSearchQuery }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleOnSearchClick = (event) => {
    event.preventDefault();
    onSearchQuery(searchTerm);
    setSearchTerm('');
  };

  return (
    <>
      <div className="p-2 flex justify-end">
        <form>
          <div className="flex">
            <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
              <input
                type="search"
                id="search-dropdown"
                value={searchTerm}
                onChange={handleOnSearchChange}
                className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
                placeholder="Search Task"
                required
              />
              <button
                onClick={handleOnSearchClick}
                type="submit"
                className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
              >
                <FaSearch />
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
