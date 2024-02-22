import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {SocialLinks} from "../../components/socialLinks/SocialLinks.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>

                <SocialLinks/>

                <Copyright>
                    @Ilya Skorokhodov
                </Copyright>
            </FlexWrapper>
        </StyledFooter>

    );
};

const StyledFooter = styled.footer`
    background-color: black;
    color: white;
    padding-top: 10px;
    position: relative;
`


const Copyright = styled.small`

`
