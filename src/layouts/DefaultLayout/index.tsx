import { Outlet } from 'react-router-dom';

import {
  LayoutContainer,
  ContentLayout,
 } from './styles';

import Logo from '../../assets/Logo.svg';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <header>
        <img 
          src={Logo} 
          alt="Github Blog" 
          title="Github Blog"
        />
      </header>
      <ContentLayout>
        <Outlet />
      </ContentLayout>
    </LayoutContainer>
  );
}