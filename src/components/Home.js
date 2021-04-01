import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import styled from 'styled-components';

const Page = styled.div`
`;

class Home extends Component {

  render () {

    return (
      <Page>
        <Nav />
        <Header />
      </Page>
    );

  }

}

export default Home;
