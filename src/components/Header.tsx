import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from "styled-components";

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
    transition: all 0.3s ease-in-out;
    &:hover {
        .icon_arrow, span {
            color: ${(props) => props.theme.accentColor};
        }
    }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: ${(props) => props.theme.pointColor};
    transition: all 0.3s ease-in-out;
`;

const TextHome = styled.span`
    color: ${(props) => props.theme.pointColor};
    margin-left: 0.5rem;
    transition: all 0.3s ease-in-out;
`;

function Header () {
    return (
        <Nav>
          <BtnToHome>
            <Link to={`/coin-tracker`}>
              <StyledFontAwesomeIcon className="icon_arrow" icon={faAngleLeft}/>
              <TextHome>Go To Home</TextHome>
            </Link>
          </BtnToHome>
        </Nav>
    )
}

export default Header;