import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { theme } from '../theme';

const Nav = styled.div`
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5rem;
`;

const BtnToHome = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.grayText};
`;

function Header () {
    return (
        <Nav>
          <BtnToHome>
            <Link to={`/coin-tracker`}>
              <FontAwesomeIcon icon={faAngleLeft} style={{ color: theme.pointColor }}/>
              <span style={{ color: theme.pointColor, marginLeft : "0.5rem" }}>Go To Home</span>
            </Link>
          </BtnToHome>
        </Nav>
    )
}

export default Header;