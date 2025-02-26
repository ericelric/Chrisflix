import './SwiperTitle.css';

const SwiperTitle = ({ title = null, name = null }) => {
  return <div className="swiper-title">{title || name || 'Title'}</div>;
};

export default SwiperTitle;
