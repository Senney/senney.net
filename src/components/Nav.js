import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-right: 16px;
  margin-left: 16px;
  border-bottom: 1px solid #99999945;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.28);
  &:hover {
    color: rgba(0, 0, 0, 0.75);
  }

  padding: 0px 8px;
`;

const activeStyle = {
  color: 'rbga(0, 0, 0, 0.88)',
};

const Nav = () => {
  return (
    <NavContainer>
      <NavLink to="/" activeStyle={activeStyle}>
        Home
      </NavLink>
    </NavContainer>
  );
};

export default Nav;
