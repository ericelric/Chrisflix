import "./SwiperTitle.css";

interface SwiperTitleProps {
  title?: string | null;
  name?: string | null;
}

const SwiperTitle = ({ title = null, name = null }: SwiperTitleProps): React.JSX.Element => {
  return <div className="swiper-title">{title || name || "Title"}</div>;
};

export default SwiperTitle;
