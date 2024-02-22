
import styled from "styled-components";

type WorksPropsType={
    title:string
    text:string
    src:string
}
export const Work = (props:WorksPropsType) => {
    return (
        <StyledWork id="Works" >
            <Image src={props.src} alt={""}/>

            <Title>
                {props.title}
            </Title>
            <Text>
                {props.text}
            </Text>
            <Link href={"#"}>
                demo
              </Link>

            <Link href={"#"}>
                code
            </Link>
        </StyledWork>
    );
};

export default Work;

const StyledWork = styled.div`
    background-color: #fbfbfb;
    max-width: 540px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    padding: 20px;
    color: #000000;
`

const Image = styled.img`
width: 100%;
    height: 220px;
    object-fit:contain;
`

const Link = styled.a`
    margin-right: 10px;
    font-size: 18px;
    color: #010100;
    font-weight: bold;
`

const Title = styled.h3`
`

const Text = styled.p`
`