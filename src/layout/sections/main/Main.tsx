
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import avatar from "../../../assets/imgs/avatar2.jpg"
import {Header} from "../../header/Header.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../GlobalStyles.ts";
import {Particle} from "../../../components/Particle/Particle.tsx";
import Typewriter from 'typewriter-effect';

const Main = () => {
    return (
        <StyledMain>
            <Container>
                <Header/>
                <Particle/>
                <StyledMainSection>
                    <FlexWrapper justify={"space-around"} wrap={"wrap"}  >
                        <StyledmainTextBlock >
                            <h1>FULLSTACK DEVELOPER</h1>
                            <p>
                                <Typewriter
                                options={{
                                    strings: ['Hi,', 'I am Ilya,','front-end oriented fullstack developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay:50,
                                }}
                            />
                            </p>

                        </StyledmainTextBlock>
                        <Photo src={avatar} alt="avatar"/>
                    </FlexWrapper>
                </StyledMainSection>

            </Container>
        </StyledMain>
    );
};

export default Main;

const Photo = styled.img`
    width: 500px;
    height: 500px;

    object-fit: cover;
    position: relative;
    right: 100px;
    bottom: 100px;
    border-radius: 50%;
    margin-left: 25px;
    @media ${theme.media.tablet1400}{
        width: 500px;
        height: 500px;
        position: static;
        margin-top: 50px;
    }

    @media screen and (max-width:530px){
        width: 300px;
        height: 300px;
      
    }

    @media screen and (max-width:370px){
        width: 200px;
        height: 200px;

    }
`

const StyledMain = styled.div`
  background-color: black;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;

`

const StyledMainSection = styled.div`
    display: flex;
    align-items: center;
    min-height: 100vh;

`

const StyledmainTextBlock= styled.div`
    color: white;

    h1 {
        font-size: 52px;
    }

    p {
        font-size: 22px;
    }

    div {
        height: 1px;
        width: 100%;
        background: #cac6c4;
        margin-top: 10px;

    }

    background: #FFFCFA;
    background: linear-gradient(to right, #b1aeac 0%, #4d4c4c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 3px;

    @media ${theme.media.tablet1400}{
    
        align-items: center;
        h1 {
            font-size: 42px;
        }

        p {
            font-size: 17px;
        }


    }
`