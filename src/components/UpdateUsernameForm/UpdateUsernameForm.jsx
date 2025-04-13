import Button from '../Button/Button';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const UpdateUsernameForm = ({ username, setUsername }) => {
  const { currentUser, updateUsername } = useContext(AuthContext);

  const handleUpdateUsername = async (e) => {
    e.preventDefault();
    try {
      if (username !== currentUser.displayName) {
        await updateUsername(username);
        toast.success('Username updated');
      } else {
        toast.info('Username is the same as before.');
      }
    } catch (error) {
      toast.error(error.message);
    }
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
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label className="profile__label" htmlFor="username">
          Username
        </label>
      </div>
      <Button type="submit">Update</Button>
    </form>
  );
};

export default UpdateUsernameForm;
