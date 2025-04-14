import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import '../Button/Button.css';

const LinkButton = ({ children, link, icon = false }) => {
  return (
    <Link to={link} className="button button--frost">
      {icon && (
        <span className="button__play-icon">
          <FaPlay />
        </span>
      )}
      {children}
    </Link>
  );
};

export default LinkButton;
