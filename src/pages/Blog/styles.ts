import styled from 'styled-components';

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

export const EmptyMessage = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 3rem;
  padding: 1rem;
`;
