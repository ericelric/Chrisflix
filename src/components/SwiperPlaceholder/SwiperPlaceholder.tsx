import PlaceholderItem from "../PlaceholderItem/PlaceholderItem";
import "./SwiperPlaceholder.css";

const SwiperPlaceholder = (): React.JSX.Element => {
  return (
    <div className="swiper-placeholder__container">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="swiper-placeholder__slide">
          <PlaceholderItem />
        </div>
      ))}
    </div>
  );
};

export default SwiperPlaceholder;
