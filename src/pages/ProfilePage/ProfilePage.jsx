import { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import UpdateUsernameForm from '../../components/UpdateUsernameForm/UpdateUsernameForm';
import UpdatePasswordForm from '../../components/UpdatePasswordForm/UpdatePasswordForm';
import './ProfilePage.css';

const ProfilePage = () => {
  const { currentUser } = useContext(AuthContext);
  const [username, setUsername] = useState(currentUser?.displayName || '');

  return (
    <div className="profile">
      <h1 className="profile__headline">Hi {username || 'User'}</h1>

      <div className="profile__card">
        <UpdateUsernameForm username={username} setUsername={setUsername} />
      </div>

      <div className="profile__card">
        <UpdatePasswordForm />
      </div>

      <div className="profile__card">
        <LogoutButton />
      </div>
    </div>
  );
};

export default ProfilePage;
