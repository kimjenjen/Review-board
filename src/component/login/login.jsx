import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from '../../service/firebase';
import Header from '../header/header';

export default function Login() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    onUserStateChange((user) => {
      if (user) {
        navigate('/main');
      } else {
        logout();
        navigate('/');
      }
    });
  }, []);

  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogout = () => {
    logout().then(setUser);
  };
  return (
    <div>
      <Header handleLogout={handleLogout} />
      <h2>Login</h2>
      <button onClick={handleLogin}>Google</button>
    </div>
  );
}
