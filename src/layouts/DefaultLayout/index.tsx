import { Outlet } from 'react-router-dom';

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
        <img 
          src={Logo} 
          alt="Github Blog" 
          title="Github Blog"
        />
      </LayoutHeader>
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </LayoutContainer>
  );
}
