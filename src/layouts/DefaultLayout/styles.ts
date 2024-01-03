import styled from 'styled-components'

import Cover from '../../assets/Cover.png';

export const LayoutContainer = styled.main`
  background-color: ${props => props.theme['gray-900']};
`;

export const LayoutHeader = styled.header`
  background-image: url(${Cover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  width: 100%;
  height: 296px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: inline-block;
  }
`; 

export const LayoutContent = styled.div`
  max-width: 864px;
  margin: -4rem auto 0;
`;
