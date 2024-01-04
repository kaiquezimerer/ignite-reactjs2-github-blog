import styled from 'styled-components';

export const PostListStyled = styled.ol`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Post = styled.article`
  cursor: pointer;
  width: 416px;
  height: 260px;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${props => props.theme['gray-600']};
  transition: transform 300ms ease, box-shadow 30ms ease;

  &:hover {
    transform: translate(-8px, -8px);
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.40);
  }

  header {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
      color: ${props => props.theme['gray-300']};
    }
  }

  h3 {
    max-width: 260px;
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }
`;
