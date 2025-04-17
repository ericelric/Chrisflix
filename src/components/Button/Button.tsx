import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  ariaBusy?: boolean;
}

const Button = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  ariaLabel,
  ariaBusy = false,
}: ButtonProps): React.JSX.Element => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${className}`}
      aria-label={ariaLabel}
      aria-busy={ariaBusy}
    >
      {children}
    </button>
  );
};

export default Button;
