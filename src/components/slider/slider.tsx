import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";


export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
            <Slide>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur cum, delectus dolor,
                    enim eum id ipsam mollitia numquam porro qui ratione saepe, sit soluta voluptatem! Dolores error
                    nostrum quibusdam!</Text>
                <Name>@ivan ivanov</Name>
            </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
border:1px solid red;
    max-width: 500px;
`

const Slide = styled.div`
  
    text-align: center;
`

const Text = styled.div`

`

const Name = styled.span`

`

const Pagination = styled.span`
    span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 5px;
        background-color: #be8627;
    }
`