import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { 
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import Avatar from '../../assets/Avatar.jpg';

import { Content, Header, Input, Post, PostList } from './styles';

export function Blog() {
  function truncateString(str: string, num: number): string {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  }

  return (
    <section>
      <Header>
        <img src={Avatar} alt="" />
        <div>
          <a href="#">
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
          </a>
          <h1>Cameron Williamson</h1>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              cameronwll
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              Rocketseat
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              32 seguidores
            </li>
          </ul>
        </div>
      </Header>
      <Content>
        <header>
          <h2>Publicações</h2>
          <p>6 publicações</p>
        </header>
        <Input placeholder="Buscar conteúdo" type="search" name="search" />
        <PostList>
          <li>
            <Post>
              <header>
                <h3>JavaScript data types and data structures</h3>
                <p>Há 1 dia</p>
              </header>
              <p>
                {
                  truncateString('Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.', 181)
                }
              </p>
            </Post>
          </li>
          <li>
            <Post>
              <header>
                <h3>JavaScript data types and data structures</h3>
                <p>Há 1 dia</p>
              </header>
              <p>
                {
                  truncateString('Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.', 181)
                }
              </p>
            </Post>
          </li>
          <li>
            <Post>
              <header>
                <h3>JavaScript data types and data structures</h3>
                <p>Há 1 dia</p>
              </header>
              <p>
                {
                  truncateString('Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.', 181)
                }
              </p>
            </Post>
          </li>
          <li>
            <Post>
              <header>
                <h3>JavaScript data types and data structures</h3>
                <p>Há 1 dia</p>
              </header>
              <p>
                {
                  truncateString('Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.', 181)
                }
              </p>
            </Post>
          </li>
          <li>
            <Post>
              <header>
                <h3>JavaScript data types and data structures</h3>
                <p>Há 1 dia</p>
              </header>
              <p>
                {
                  truncateString('Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.', 181)
                }
              </p>
            </Post>
          </li>
          <li>
            <Post>
              <header>
                <h3>JavaScript data types and data structures</h3>
                <p>Há 1 dia</p>
              </header>
              <p>
                {
                  truncateString('Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.', 181)
                }
              </p>
            </Post>
          </li>
        </PostList>
      </Content>
    </section>
  )
} 
