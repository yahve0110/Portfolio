import styled from "styled-components";
import {theme} from "../../GlobalStyles.ts";
import { Link } from "react-scroll";


export const Menu = (props: { menuItems: Array<string> }) => {

    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => (
                    <li key={index}>
                        <Link smooth={true} offset={-100} to={item}>{item}</Link>
                    </li>
                ))}
            </ul>
        </StyledMenu>
    );
};


export default Menu


const StyledMenu = styled.nav`
    font-size: 26px;

    margin-top:6rem;

    ul {
        display: flex;
        flex-direction:column;
        gap: 30px;
        justify-content: center;
        margin-top: 2rem;
        @media ${theme.media.mobile}{
         

        }

    }

    a :hover{
        font-size: 35px;


    }
`