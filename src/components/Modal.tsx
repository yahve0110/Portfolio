import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import closeImg from "../assets/icons/close.png"
import Menu from "./menu/Menu"

interface ModalProps {
  modalOpen: boolean
  SetModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const items = ["Home", "Skills", "Works", "About", "Contact"];


const Modal: React.FC<ModalProps> = ({ modalOpen, SetModalOpen }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal()
      }
    }

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    document.addEventListener("keydown", handleEscapeKey)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [modalOpen])

  const closeModal = () => {
    document.body.style.overflow = "visible"
    SetModalOpen(false)
  }

  return (
    <StyledModalContainer modalOpen={modalOpen}>
      <StyledModal ref={modalRef}>
        <StyledImg src={closeImg} alt="close" onClick={closeModal} />
         <Menu menuItems={items}/>
      </StyledModal>
    </StyledModalContainer>
  )
}

const StyledModalContainer = styled.div<{ modalOpen: boolean }>`
  display: ${(props) => (props.modalOpen ? "block" : "none")};
`

const StyledModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 100vh;
  z-index: 2000;
  background-color: #3c3c3cfb;


  animation: myAnim 0.8s ease 0s 1 normal forwards;
  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: translateX(250px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`

export default Modal
