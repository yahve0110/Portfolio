import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

import {SectionTitle} from "../../../components/SkillTitle.tsx";
import {Skill} from "./Skill.tsx";
import cert from "../../../assets/imgs/cert.png"
import {Container} from "../../../components/Container.ts";
import {WhiteBackground} from "../../../GlobalStyles.ts";
import { Fade } from "react-awesome-reveal";


export const Skills = () => {
    return (
        <StyledSkills>

            <Container>
                <SectionTitle>
                    My achivments
                </SectionTitle>

                <FlexWrapper justify={"space-around"} wrap={"wrap"} gap={"5px"}>
                    <Fade cascade={true}>
                    <Skill imageSrc={cert} title="CS50" text="   orem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque doloremque laborum
                quaerat quo ullam!
"/>
                    <Skill imageSrc={cert} title="Project managment" text="   orem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque doloremque laborum
                quaerat quo ullam!
"/>
                    <Skill imageSrc={cert} title="UX/UI Design" text="   orem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque doloremque laborum
                quaerat quo ullam!
"/>

                    <Skill imageSrc={cert} title="Cloud" text="   orem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque doloremque laborum
                quaerat quo ullam!
"/>

                    <Skill imageSrc={cert} title="Cybersecyrity" text="   orem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque doloremque laborum
                quaerat quo ullam!
"/>

                    <Skill imageSrc={cert} title="Frontend" text="   orem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque doloremque laborum
                quaerat quo ullam!
"/>
                    </Fade>
                </FlexWrapper>
            </Container>

        </StyledSkills>

    );
};

const StyledSkills = styled.section`

    background-color: ${WhiteBackground};
    min-height: 100vh;
    gap: 90px;
    z-index: 2;
    position: relative;
    animation: skillsAnim 6s ease 0s 1 normal forwards;

    @keyframes skillsAnim {
        0% {
            opacity: 0;
            transform: translateY(250px);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`