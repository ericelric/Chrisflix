import { PiImage } from 'react-icons/pi';
import './SwiperImage.css';

const SwiperImage = ({
  backdrop_path,
  poster_path,
  title = null,
  name = null,
}) => {
  const imageUrl =
    backdrop_path || poster_path
      ? `https://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`
      : null;

  return imageUrl ? (
    <img
      src={imageUrl}
      alt={`${title || name || 'Image'} Backdrop`}
      loading="lazy"
      className="swiper-image"
    />
  ) : (
    <div className="swiper-image">
      <PiImage size={48} />
    </div>
  );
};

export default SwiperImage;
