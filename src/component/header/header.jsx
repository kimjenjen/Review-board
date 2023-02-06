import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout, onUserStateChange } from '../../service/firebase';
import styles from './header.module.css';

export default function Header() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);
  const handleLogout = () => {
    logout().then(setUser);
    navigate('/');
  };
  return (
    <div>
      <h1 className={styles.title}>Review</h1>
      {user && (
        <button className={styles.logout} onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
}
