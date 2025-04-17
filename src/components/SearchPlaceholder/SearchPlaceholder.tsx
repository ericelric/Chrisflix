import PlaceholderItem from "../PlaceholderItem/PlaceholderItem";
import "./SearchPlaceholder.css";

const SearchPlaceholder = (): React.JSX.Element => {
  return (
    <>
      <div className="search-placeholder__headline"></div>
      <div className="search-results">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i}>
            <PlaceholderItem />
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchPlaceholder;
