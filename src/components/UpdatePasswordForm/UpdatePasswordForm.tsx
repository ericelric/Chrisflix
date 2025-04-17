import Button from "../Button/Button";
import { toast } from "react-toastify";
import { FormEvent, useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

const UpdatePasswordForm = (): React.JSX.Element => {
  const { changePassword } = useContext(AuthContext)!;

  const [currentUserPassword, setCurrentUserPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChangePassword = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (newPassword !== repeatPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      setIsLoading(true);
      await changePassword(currentUserPassword, newPassword);
      toast.success("Password updated");
      setCurrentUserPassword("");
      setNewPassword("");
      setRepeatPassword("");
    } catch (err) {
      if (typeof err === "object" && err !== null && "code" in err && "message" in err) {
        if (err.code === "auth/requires-recent-login") {
          toast.error(`You need to re-login to update your password.`);
        } else {
          toast.error(` ${err.message}`);
        }
      } else {
        toast.error("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleChangePassword}>
      <h2 className="profile__card--headline">Update Password</h2>
      <div className="profile__input-group">
        <input
          id="currentPassword"
          className="profile__input profile__input--current-pw"
          type="password"
          name="currentPassword"
          autoComplete="current-password"
          required
          value={currentUserPassword}
          onChange={(e) => setCurrentUserPassword(e.target.value)}
          aria-label="Current Password"
        />
        <label className="profile__label" htmlFor="currentPassword">
          Enter Current Password
        </label>
      </div>
      <div className="profile__input-group">
        <input
          id="newPassword"
          className="profile__input"
          type="password"
          name="newPassword"
          autoComplete="new-password"
          required
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          aria-label="New Password"
        />
        <label className="profile__label" htmlFor="newPassword">
          Enter New Password
        </label>
      </div>
      <div className="profile__input-group">
        <input
          id="passwordRepeat"
          className="profile__input"
          type="password"
          name="passwordRepeat"
          autoComplete="new-password"
          required
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          aria-label="Repeat Password"
        />
        <label className="profile__label" htmlFor="passwordRepeat">
          Repeat New Password
        </label>
      </div>
      <Button type="submit" aria-busy={isLoading} aria-label={isLoading ? "Updating..." : "Update"}>
        {isLoading ? "Updating..." : "Update"}
      </Button>
    </form>
  );
};

export default UpdatePasswordForm;
