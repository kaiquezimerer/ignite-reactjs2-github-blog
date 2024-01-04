import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

import { api } from '../../lib/axios';

import { 
  Content,
  Header,
  Input,
  Post,
  PostList,
} from './styles';
import { useNavigate } from "react-router-dom";

interface User {
  name: string;
  bio?: string;
  url: string;
  login: string;
  company?: string;
  followers: number;
  avatar?: string;
}

interface Post {
  number: number; // id
  title: string;
  body?: string;
  created_at: string;
}

const defaultUserValues: User = Object.freeze({
  name: '',
  bio: '',
  url: '',
  login: '',
  company: '',
  followers: 0,
  avatar: ''
});

export function Blog() {
  const [user, setUser] = useState<User>(defaultUserValues);
  const [posts, setPosts] = useState<Post[]>([] as Post[]);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

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

  function handleChangeSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    fetchGithubIssuesData(encodeURIComponent(search));
  }

  function handleGoToPost(number: number) {
    if (number) {
      navigate(`/post/${number}`);
    }
  }

  async function fetchGithubUserData(): Promise<void> {
    const username = 'rocketseat-education'; 
    const endpoint = `/users/${username}`;

    try {
      const { data } = await api.get(endpoint);

      setUser({
        name: data?.name,
        bio: data?.bio,
        url: data?.html_url,
        login: data?.login,
        company: data?.company,
        followers: data?.followers,
        avatar: data?.avatar_url,
      });
    } catch(err) {
      console.error(err);
    }
  }

  async function fetchGithubIssuesData(query: string = ''): Promise<void> {
    const username = 'rocketseat-education';
    const repo = 'reactjs-github-blog-challenge';

    const endpoint = `/search/issues?q=${query}%20repo:${username}/${repo}`;

    try {
      const { data } = await api.get(endpoint);

      setPosts(data.items);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchGithubUserData();
    fetchGithubIssuesData();
  }, [])

  if (!user?.name.length) {
    return 'Carregando...';
  }

  return (
    <section>
      <Header>
        <img src={user.avatar} alt={user.name} title={user.name} />
        <div>
          <a href={user.url} target="_blank" className="right">
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
          </a>
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              {user.company || '-'}
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              {`${user.followers} ${(user.followers > 1 || !user.followers)? 'seguidores': 'seguidor'}`}
            </li>
          </ul>
        </div>
      </Header>
      <Content>
        <header>
          <h2>Publicações</h2>
          <p>{`${posts?.length} ${posts?.length > 1 || !posts.length? 'publicações' : 'publicação'}`}</p>
        </header>
        <form onSubmit={handleSubmit}>
          <Input 
            placeholder="Buscar conteúdo"
            type="search" 
            name="search"
            value={search}
            maxLength={50}
            onChange={handleChangeSearch}
          />
        </form>
        {
          !!posts.length && (
            <PostList>
              {posts.map(post => (
                <li 
                  key={post.number} 
                  onClick={() => handleGoToPost(post.number)}
                >
                  <Post>
                    <header>
                      <h3>{truncateString(post.title, 50)}</h3>
                      <p>Há {publishedDaterelativeToNow(new Date(post.created_at))}</p>
                    </header>
                    <p>
                      {truncateString(post.body || '', 150)}
                    </p>
                  </Post>
                </li>
              ))}
            </PostList>
          )
        }
      </Content>
    </section>
  )
} 
