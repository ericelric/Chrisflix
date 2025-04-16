import { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { GoX } from 'react-icons/go';
import { GrSearch } from 'react-icons/gr';
import useDebounce from '../../hooks/useDebounce';
import './Search.css';

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // Get search term from URL (if any)
  const initialQuery = searchParams.get('query') || '';
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Get search term from search input
  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    if (location.pathname === '/search') {
      setSearchParams({ query: searchTerm });
    } else {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  // Instantly update the url when typing, but only on the search page
  useEffect(() => {
    if (location.pathname !== '/search') return;
    setSearchParams({ query: debouncedSearchTerm });
  }, [debouncedSearchTerm, location.pathname, setSearchParams]);

  // Open search if user clicks on the search icon
  const focus = () => inputRef.current?.focus();

  return (
    <div className="search">
      <div className="search__dummy"></div>
      <div className="search__container">
        <input
          ref={inputRef}
          name="search_chrisflix_global"
          type="search"
          placeholder="Search"
          className="search__input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button className="search__icon" onClick={focus}>
          <GrSearch />
        </button>
        <button className="search__clear" onClick={() => setSearchTerm('')}>
          <GoX />
        </button>
      </div>
    </div>
  );
};

export default Search;
