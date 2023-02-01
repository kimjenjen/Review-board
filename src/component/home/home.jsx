import React from 'react';
import Header from '../header/header';
import styles from './home.module.css';

function Home(props) {
  return (
    <section>
      <Header />
      <div>
        <h3 className={styles.title}>로그인후 이용가능합니다.</h3>
      </div>
    </section>
  );
}

export default Home;
