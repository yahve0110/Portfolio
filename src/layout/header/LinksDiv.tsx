
import {SocialLinks} from "../../components/socialLinks/SocialLinks.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {theme} from "../../GlobalStyles.ts";
import Modal from "../../components/Modal.tsx";
import { useState } from "react";


export const LinksDiv = () => {

    const [modalOpen,SetModalOpen] = useState(false)

    function openModal(){
        document.body.style.overflow = 'hidden';
        SetModalOpen(true)
    }

    function closeModal(){
        document.body.style.overflow = 'visible';
        SetModalOpen(false)
    }


 
    return (
        <StyledHeaderList>
            <FlexWrapper  justify={"space-between"}>
           <SocialLinks  />
            {/*<StyledBurger onClick={openModal}>*/}
            {/*    <div></div>*/}
            {/*    <div></div>*/}
            {/*    <div></div>*/}
            {/*</StyledBurger>*/}
            </FlexWrapper>
            <Modal modalOpen={modalOpen} SetModalOpen = {closeModal}/>

        </StyledHeaderList>
    );
};

export default LinksDiv;


const StyledHeaderList = styled.div`
    width: 15%;
    @media ${theme.media.tablet1400}{
        width: 40px;
    }
`

const StyledBurger = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;

    height: 34px;
    div{
        width: 36px;
        height:0.2rem;
        background-color: white;

    }


`