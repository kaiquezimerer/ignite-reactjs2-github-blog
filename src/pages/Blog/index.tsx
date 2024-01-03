import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { 
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import Avatar from '../../assets/Avatar.jpg';

import { Header } from './styles';

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
    </section>
  )
} 
