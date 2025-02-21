import { useRef, useState, useEffect } from 'react';
import { GoSearch, GoX } from 'react-icons/go';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce';
import './Search.css';

const Search = () => {
  const inputRef = useRef();
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
  const focus = () => inputRef.current.focus();

  return (
    <div className="search-wrapper">
      <div className="search-dummy"></div>
      <div className="search">
        <input
          ref={inputRef}
          type="search"
          placeholder="Search"
          className="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button className="search-icon" onClick={focus}>
          <GoSearch />
        </button>
        <button className="x-icon" onClick={() => setSearchTerm('')}>
          <GoX />
        </button>
      </div>
    </div>
  );
};

export default Search;
