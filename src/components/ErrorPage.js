import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import styled from 'styled-components';

const Page = styled.div`
`;

const HeaderSection = styled.section`
  overflow: hidden;
  position: absolute;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  font-size: 3rem;
  color: #D8DEE9;
`;

class ErrorPage extends Component {

  render () {

    return (
        <HeaderSection>
        <HeaderWrapper> Still working on it. </HeaderWrapper>
      </HeaderSection>
    );

  }

}

export default ErrorPage;
