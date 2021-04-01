import React, { Component } from 'react';
import Nav from "./Nav";
import styled from 'styled-components';

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

class Header extends Component {

  render () {

    return (
      <HeaderSection>
        <HeaderWrapper> Currently reworking my website. </HeaderWrapper>
      </HeaderSection>
    );

  }

}

export default Header;
