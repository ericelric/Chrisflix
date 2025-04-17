import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import "../Button/Button.css";

interface LinkButtonProps {
  children: React.ReactNode;
  link: string;
  icon?: boolean;
}

const LinkButton = ({ children, link, icon = false }: LinkButtonProps): React.JSX.Element => {
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
