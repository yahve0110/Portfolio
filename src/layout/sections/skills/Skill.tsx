import styled from "styled-components";


type SkillPropsType = {
    imageSrc: string
    title:string
    text:string
}
export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill id="Skills">
            <img src={props.imageSrc} alt="certificate"/>
            <SkillTitle>
                {props.title}
            </SkillTitle>
            <SkillText>
                {props.text}
            </SkillText>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
    max-width:400px;
    width: 100%;
    background-color: #f0f0f0;
    margin: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;


    img {
        width: 80%;
        margin: 0 auto;
        height: 50%;
        object-fit: cover;
        margin-bottom: 20px;
    }
`

const SkillTitle = styled.h3`

`

const SkillText = styled.p`

`