import { NavLink, Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const Layout = () => {
  return (
    <>
      <StyledList>
        <li>
          <StyledNavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            to='/about'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            to='/contact'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contact
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            to='/post'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Post
          </StyledNavLink>
        </li>
      </StyledList>
      <StyledContainer>
        <Outlet />
      </StyledContainer>
    </>
  );
};

export default Layout;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #2b2e63;
  justify-content: end;
`;

const StyledNavLink = styled(NavLink)`
  color: #ccc;
  text-decoration: none;
  font-weight: bold;
  transition: 0.2s all;

  &.active,
  &:hover {
    color: white;
    text-decoration: underline;
    font-size: 18px;
  }
`;

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
