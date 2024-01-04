import { Link, Outlet } from 'react-router-dom';

import {
  LayoutContainer,
  LayoutHeader,
  LayoutContent,
 } from './styles';

import Logo from '../../assets/Logo.svg';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <LayoutHeader>
        <Link to="/">
          <img 
            src={Logo} 
            alt="Github Blog" 
            title="Github Blog"
          />
        </Link>
      </LayoutHeader>
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </LayoutContainer>
  );
}
