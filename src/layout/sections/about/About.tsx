import styled from "styled-components"
import { SectionTitle } from "../../../components/SkillTitle.tsx"
import { FlexWrapper } from "../../../components/FlexWrapper.tsx"
import { WhiteBackground } from "../../../GlobalStyles.ts"

export const About = () => {
  return (
    <StyledAbout id="About">
      <SectionTitle>About</SectionTitle>
      <FlexWrapper direction={"column"} align={"center"}>
        <StyledAbouText>
          Ilya Skorokhodov is a seasoned full-stack developer with a passion for
          crafting innovative and efficient solutions across the entire software
          development lifecycle. With a solid foundation in both frontend and
          backend technologies, Ilya brings a unique blend of skills that
          enables him to create seamless, user-centric applications. On the
          frontend, Ilya excels in designing intuitive and responsive user
          interfaces. Proficient in HTML, CSS, and JavaScript, he has a keen eye
          for detail and a commitment to delivering a superb user experience.
          His expertise extends to popular frontend frameworks like React,
          Angular, and Vue.js, allowing him to build dynamic and interactive web
          applications. In the backend realm, Ilya is well-versed in a variety
          of programming languages, including but not limited to Python,
          JavaScript (Node.js), and Java. His backend development skills
          encompass database design, server-side logic, and API development.
          Ilya is adept at working with databases such as MySQL, MongoDB, and
          PostgreSQL, ensuring data is managed efficiently and securely.
        </StyledAbouText>
      </FlexWrapper>
    </StyledAbout>
  )
}

const StyledAbout = styled.section`
  min-height: 50vh;
  background-color: ${WhiteBackground};
  position: relative;
`

const StyledAbouText = styled.p`
  margin-top: 2rem;
  max-width: 70%;
  font-size: 20px;
`
