import Button from "../Button/Button";
import { toast } from "react-toastify";
import { FormEvent, useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

interface UpdateUsernameFormProps {
  username: string;
  setUsername: (username: string) => void;
}

const UpdateUsernameForm = ({
  username,
  setUsername,
}: UpdateUsernameFormProps): React.JSX.Element => {
  const { currentUser, updateUsername } = useContext(AuthContext)!;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (!currentUser) {
    return <p className="profile__card--error">User not logged in.</p>;
  }

  const handleUpdateUsername = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      if (username !== currentUser.displayName) {
        setIsLoading(true);
        await updateUsername(username);
        toast.success("Username updated");
        setIsLoading(false);
      } else {
        toast.info("Username is the same as before.");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred.");
      }
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  return (
    <form onSubmit={handleUpdateUsername}>
      <h2 className="profile__card--headline">Update Username</h2>
      <div className="profile__input-group">
        <input
          id="username"
          name="username"
          className="profile__input"
          type="text"
          value={username}
          onChange={handleChange}
          required
        />
        <label className="profile__label" htmlFor="username">
          Username
        </label>
      </div>
      <Button type="submit">{isLoading ? "Updating..." : "Update"}</Button>
    </form>
  );
};

export default UpdateUsernameForm;
