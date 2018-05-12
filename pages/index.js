import React from 'react';
import style from '../styles/style.scss';
import Header from '../components/header';

const Index = () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: style }} />

    <div className="container">
      <Header time={new Date()} city="London" />
      <div className="notification is-success">
        Hello weatherly!
      </div>
    </div>
  </div>
);

export default Index;

