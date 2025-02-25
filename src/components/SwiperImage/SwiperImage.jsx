import { PiImage } from 'react-icons/pi';

const SwiperImage = ({ backdrop_path, poster_path, title, name }) => {
  const imageUrl =
    backdrop_path || poster_path
      ? `https://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`
      : null;

  return imageUrl ? (
    <img
      src={imageUrl}
      alt={`${title || name || 'Media'} backdrop`}
      loading="lazy"
    />
  ) : (
    <div className="swiper-slide-no-image">
      <PiImage size={48} />
    </div>
  );
};

export default SwiperImage;
