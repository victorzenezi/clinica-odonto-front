import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FirstSection from './firstSection';
import SecondSection from './secondSection';

export class Home extends Component {
  constructor (props: any) {
    super(props)
  };

render() {
  return (
    <>
    <Header/>
      <FirstSection/>
      <SecondSection/>
    <Footer/>
    </>
  );
};

} export default Home