import styled from "styled-components";
import {SectionTitle} from "../../../components/SkillTitle.tsx";

import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import socialImg from "../../../assets/imgs/forum.jpg"
import Work from "./work/Work.tsx";
import {Container} from "../../../components/Container.ts";
import {WhiteBackground} from "../../../GlobalStyles.ts";
import { Fade } from "react-awesome-reveal";


export const Works = () => {
    return (
        <StyledWorks>
            <Container>
            <SectionTitle>My works</SectionTitle>
             <FlexWrapper justify={"space-around"} wrap={"wrap"} gap={"30px"}>
                 <Fade cascade={true} delay={30} direction={"up"}>
                 <Work title={"Social Network"} text={"Social network with buch of cool features - please check on github"} src={socialImg} />
                 <Work title={"Trello board"} text={"Build in team of 5,allows to add posts with images and chat with users"} src={socialImg}/>
                 <Work title={"Trello board"} text={"Build in team of 5,allows to add posts with images and chat with users"} src={socialImg}/>
                 <Work title={"Trello board"} text={"Build in team of 5,allows to add posts with images and chat with users"} src={socialImg}/>
                 <Work title={"Trello board"} text={"Build in team of 5,allows to add posts with images and chat with users"} src={socialImg}/>
                 <Work title={"Trello board"} text={"Build in team of 5,allows to add posts with images and chat with users"} src={socialImg}/>
                 </Fade>
                 </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    height: 100%;
    background-color: ${WhiteBackground};
    position: relative;


`