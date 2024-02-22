import Icon from "../icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {theme} from "../../GlobalStyles.ts";

export  const SocialLinks = () => {
    return (
        <SocialIconsList>
            <FlexWrapper justify={"space-between"}>
            <SocialItem>
                <SocialIconLink>
                    <Icon  iconId={"githubSvg"}/>
                </SocialIconLink>
            </SocialItem>
            <SocialItem>
                <SocialIconLink>
                    <Icon iconId={"linkdedInSvg"}/>
                </SocialIconLink>
            </SocialItem>
            <SocialItem>
                <SocialIconLink>
                    <Icon iconId={"telegramSvg"}/>
                </SocialIconLink>
            </SocialItem>
            </FlexWrapper>
        </SocialIconsList>
    );
};


const SocialIconsList = styled.ul`
width: 150px;
    @media ${theme.media.tablet1400}{
        display: none;
    }
`


const SocialIconLink = styled.a`
cursor: pointer;

`

const SocialItem = styled.li`

`