import React from 'react';
import { images } from '../../constants';
import { Navbar } from '../../components';
import {Chef,Video,Gallery,Laurels} from '../../container'

import './Intro.css';

const Intro = () => (
  <section className="intro">
    <Navbar/>
    <div className="intro__container">
      <Chef/>
      <Video/>
      <Laurels/>
      <Gallery/>
    </div>
  </section>
);

export default Intro;
