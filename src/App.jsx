import React, {Component, Fragment} from 'react';
import styles from './assets/scss/style.scss';
import Card from './components/card';

const content = 'Hello world!';

const cardData = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/264/264',
  },
};

const App = () => (
  <Fragment>
    <div className={styles.homepage}>
      <Card
        date={cardData.date}
        text={cardData.text}
        author={cardData.author} 
      />
    </div>
  </Fragment>
);

export default App;