import styled from "styled-components"
import { Logo } from "../../components/logo/Logo.tsx"

import { Container } from "../../components/Container.ts"
import { FlexWrapper } from "../../components/FlexWrapper.tsx"
import LinksDiv from "./LinksDiv.tsx"

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"}  align={"center"}>
          <Logo />
          <LinksDiv />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100vw;
  padding-top: 30px;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  a {
    color: white;
  }
  ul li a {
    color: white;
    font-size: 18px;
  }
`
