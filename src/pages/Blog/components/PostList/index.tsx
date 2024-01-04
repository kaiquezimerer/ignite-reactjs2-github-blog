import { useNavigate } from "react-router-dom";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Post, PostListStyled } from "./styles";

interface Post {
  number: number; // id
  title: string;
  body?: string;
  created_at: string;
}

interface PostListProps {
  posts: Post[]
}

export function PostList({ posts }: PostListProps) {
  const navigate = useNavigate();

  function handleGoToPost(number: number) {
    if (number) {
      navigate(`/post/${number}`);
    }
  }

  function truncateString(str: string, num: number): string {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  }

  const publishedDaterelativeToNow = (publishedAt: Date): string => (formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: false,
  }).replace('cerca de', '').replace('mais de', ''));

  return (
    <PostListStyled>
      {posts.map(post => (
        <li 
          key={post.number} 
          onClick={() => handleGoToPost(post.number)}
        >
          <Post>
            <header>
              <h3>{truncateString(post.title, 50)}</h3>
              <p>
                Há {publishedDaterelativeToNow(new Date(post.created_at))}
              </p>
            </header>
            <p>
              {truncateString(post.body || '', 150)}
            </p>
          </Post>
        </li>
      ))}
    </PostListStyled> 
  );
}