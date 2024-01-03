import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { 
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import Avatar from '../../assets/Avatar.jpg';

import { Content, Header, Input } from './styles';

export function Blog() {
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
        <Input type="search" name="search" />
        <ol>
          <li>
            <div>
              <h3>JavaScript data types and data structures</h3>
              <p>1 dia</p>
              <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
              Dynamic typing
              JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
              let foo = 42; // foo is now a number
              foo = 'bar'; // foo is now a string
              foo = true; // foo is now a boolean</p>
            </div>
          </li>
        </ol>
      </Content>
    </section>
  )
} 
