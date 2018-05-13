import React from 'react';
import Head from 'next/head'
import style from '../styles/style.scss';
import Header from '../components/header';
import Temperature from '../components/temperature';

const Index = () => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <title>Weatherly</title>
      <meta name="description" content="Weather conditions as experienced by humans." />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      <style dangerouslySetInnerHTML={{ __html: style }} />
    </Head>

    <div className="container has-text-centered">
      <Header time={new Date()} city="London" />
      <Temperature value={3} unit="celsius" />
      <div>
        <span>Much colder than</span>
        <div>
          <a className="button is-text">London</a>
          <a className="button is-text">Yesterday</a>
        </div>
      </div>

      <br />
      
      <div className="box" style={{ margin: '.5rem' }}>
        <div className="columns is-mobile">
          <div className="column">
            <img className="image is-64x64" src="static/sunny-rain.png" />
          </div>
          <div className="column is-8">
            <span>{'12℃ is the high, it will rain this afternoon'}</span>
          </div>
        </div>
      </div>

      <div className="box has-background-light" style={{ margin: '.5rem' }}>
        This is the coldest day so far this year.
      </div>
    </div>
  </div>
);

export default Index;

