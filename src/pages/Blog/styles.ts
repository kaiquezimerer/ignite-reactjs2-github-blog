import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${props => props.theme['gray-700']};
  border-radius: 10px;
  padding: 2rem 2.4em;
  margin: 0 0.5rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
  display: flex;
  gap: 2rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 0.5rem;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p, li {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  a, li {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  a {
    float: right;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    gap: 1.5rem;

    svg {
      color: ${props => props.theme['gray-400']}
    }
  }

  /* Viewport <= 610px */
  @media screen and (max-width: 610px) {
    flex-wrap: wrap;
    padding: 2rem 1rem;

    img {
      margin: 0 auto;
    }
  }
`;

export const Content = styled.section`
  margin-top: 4.5rem;
  position: relative;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  h2 {
    font-size: 1.125rem;
  }
`;

export const Input = styled.input`
  color: ${props => props.theme['gray-200']};
  width: 100%;
  outline: none;
  margin: 0.5rem 0;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid ${props => props.theme['gray-500']};
  background-color: ${props => props.theme['gray-900']};
  transition: border-color 200ms ease;

  &:focus {
    border-color: ${props => props.theme['blue']};
  }
`;
