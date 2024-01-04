import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ptBR } from 'date-fns/locale';
import { formatDistanceToNow } from 'date-fns';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faArrowUpRightFromSquare,
  faComment,
  faCalendarDay,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import { Header, Content } from './styles';
import { api } from '../../lib/axios';

interface Post {
  title: string;
  url: string;
  body?: string;
  username: string;
  comments: number;
  created_at: string | Date;
}

const defaultPostValues: Post = Object.freeze({
  title: '',
  url: '',
  body: '',
  username: '',
  comments: 0,
  created_at: new Date(),
});

export function Post() {
  const [post, setPost] = useState<Post>(defaultPostValues);

  const { number } = useParams();

  const publishedDaterelativeToNow = (publishedAt: Date): string => (formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: false,
  }).replace('cerca de', '').replace('mais de', ''));

  async function fetchGithubIssueData(): Promise<void> {
    const username = 'rocketseat-education';
    const repo = 'reactjs-github-blog-challenge';
    const endpoint = `repos/${username}/${repo}/issues/${number}`;

    try {
      const { data } = await api.get(endpoint);

      setPost({
        title: data.title,
        url: data.html_url,
        body: data.body,
        username: data?.user.login,
        comments: data.comments,
        created_at: data.created_at,
      });
    } catch(error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    fetchGithubIssueData();
  }, []);

  return (
    <article>
      <Header>
        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>
          <a href={post.url} target="_blank">
            Ver no Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
          </a>
        </div>
        <h1>{post.title}</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            {post.username}
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há {publishedDaterelativeToNow(new Date(post.created_at))}
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
            {`${post.comments} ${(post.comments > 1 || !post.comments)? 'comentários': 'comentário'}`}
          </li>
        </ul>
      </Header>
      <Content>
        <p>
          {post.body}
        </p>
      </Content>
    </article>
  );
}
