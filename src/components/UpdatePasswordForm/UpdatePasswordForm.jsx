import Button from '../Button/Button';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';

const UpdatePasswordForm = () => {
  const { changePassword } = useContext(AuthContext);

  const [currentUserPassword, setCurrentUserPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== repeatPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    try {
      await changePassword(currentUserPassword, newPassword);
      toast.success('Password updated');
      setCurrentUserPassword('');
      setNewPassword('');
      setRepeatPassword('');
    } catch (error) {
      if (error.code === 'auth/requires-recent-login') {
        toast.error('You need to re-login to update your password.');
      } else {
        toast.error(error.message);
      }
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
          required
          value={currentUserPassword}
          onChange={(e) => setCurrentUserPassword(e.target.value)}
          placeholder=""
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
          required
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder=""
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
          required
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          placeholder=""
        />
        <label className="profile__label" htmlFor="passwordRepeat">
          Repeat New Password
        </label>
      </div>
      <Button type="submit">Update</Button>
    </form>
  );
};

export default UpdatePasswordForm;
