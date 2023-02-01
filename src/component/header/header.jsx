import React, { useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from '../../service/firebase';
import styles from './header.module.css';

export default function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);
  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogout = () => {
    logout().then(setUser);
  };
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Review</h1>
      {!user && (
        <button className={styles.button} onClick={handleLogin}>
          Login
        </button>
      )}
      {user && (
        <button className={styles.button} onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
}
