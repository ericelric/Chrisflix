import Button from "../Button/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

const LogoutButton = (): React.JSX.Element => {
  const { logout } = useContext(AuthContext)!;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogout = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await logout();
      toast("Successfully logged out.");
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred.");
      }
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={handleLogout} className="button--secondary">
      {isLoading ? "Logging Out..." : "Logout"}
    </Button>
  );
};

export default LogoutButton;
