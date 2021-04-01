import React, { Component } from 'react';
import styled from 'styled-components';

const NavSection = styled.section`
    width: 100%;
    color: #2E3440;
`;

const NavWrapper = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const NavItem = styled.div`
    padding-top: 1%;
    cursor: pointer;
`;

class Nav extends Component {

  render () {

    return (
        <NavSection>
            <NavWrapper>
                {/* <NavItem> FR </NavItem> */}
            </NavWrapper>
        </NavSection>
    );
  }

}

export default Nav;
