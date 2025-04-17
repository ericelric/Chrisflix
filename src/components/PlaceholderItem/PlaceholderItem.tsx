import "./PlaceholderItem.css";

const PlaceholderItem = (): React.JSX.Element => {
  return (
    <div className="placeholder__item">
      <div className="placeholder__image"></div>
      <div className="placeholder__text"></div>
    </div>
  );
};

export default PlaceholderItem;
