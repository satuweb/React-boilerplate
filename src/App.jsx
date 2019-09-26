import React, { Component, Fragment } from 'react';
import styles from './assets/scss/style.scss';
import Card from './components/card';
import Header from './components/header';
import Sorting from './components/sorting'
import cardData from './api/data';


const App = () => (
  <Fragment>
    <div className={styles.homepage}>
      <Header />
      <div className="main">
        <Sorting />
        {cardData.map((card) =>
          <Card
            key={card.id.toString()}
            date={card.date}
            text={card.text}
            author={card.author}
          />
        )}
      </div>

    </div>
  </Fragment>
);

export default App;