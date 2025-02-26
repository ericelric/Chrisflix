import PlaceholderItem from '../PlaceholderItem/PlaceholderItem';

const SearchPlaceholder = () => {
  return (
    <div className="search-results">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i}>
          <PlaceholderItem />
        </div>
      ))}
    </div>
  );
};

export default SearchPlaceholder;
