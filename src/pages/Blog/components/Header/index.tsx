import { HeaderStyled } from './styles';

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

interface User {
  name: string;
  bio?: string;
  url: string;
  login: string;
  company?: string;
  followers: number;
  avatar?: string;
}

interface HeaderProps {
  user: User;
}

export function Header({ user }: HeaderProps) {
  return (
    <HeaderStyled>
      <img 
        src={user.avatar}
        alt={user.name}
        title={user.name}
      />
      <div>
        <a href={user.url} target="_blank">
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
    </HeaderStyled>
  );
}
