import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import { Header, Content } from "./styles";

export function Post() {
  return (
    <article>
      <Header>
        <div>
           <a href="#">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </a>
          <a href="#">
            Ver no Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
          </a>
        </div>
        <h1>JavaScript data types and data structures</h1>
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
      </Header>
      <Content>
        <p>
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
        </p>
        <p>
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
        </p>
        <p>
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
        </p>
      </Content>
    </article>
  );
}
