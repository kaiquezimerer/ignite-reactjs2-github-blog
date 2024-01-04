import { useState, useEffect } from 'react';

import { api } from '../../lib/axios';

import { Header } from './components/Header';
import { PostList } from './components/PostList';

import { 
  Content,
  EmptyMessage,
  Input,
} from './styles';

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

  function handleChangeSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    fetchGithubIssuesData(encodeURIComponent(search));
  }

  async function fetchGithubUserData(): Promise<void> {
    const username = import.meta.env.VITE_USERNAME; 
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
    const username = import.meta.env.VITE_USERNAME;
    const repo = import.meta.env.VITE_REPO;
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

  const publications = `${posts?.length} ${posts?.length > 1 || !posts.length? 'publicações' : 'publicação'}`;

  return (
    <section>
      <Header user={user} />
      <Content>
        <header>
          <h2>Publicações</h2>
          <p>{publications}</p>
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
          !!posts.length ? (
            <PostList posts={posts}/>
          ) :
          (
            <EmptyMessage>{`Nenhuma issue com o termo "${search}" foi encontrada.`}</EmptyMessage>
          )
        }
      </Content>
    </section>
  )
} 
