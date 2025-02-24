import './SwiperPlaceholder.css';

const SwiperPlaceholder = () => {
  return (
    <div className="swiper-placeholder-container">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="swiper-placeholder-slide">
          <div className="swiper-placeholder-image"></div>
          <div className="swiper-placeholder-text"></div>
        </div>
      ))}
    </div>
  );
};

export default SwiperPlaceholder;
