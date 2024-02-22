import styled from "styled-components"
import { SectionTitle } from "../../../components/SkillTitle.tsx"
import { Button } from "../../../components/Button.tsx"
import { Container } from "../../../components/Container.ts"
import emailjs from '@emailjs/browser';
import {ElementRef, useRef} from "react";
export const Contatcs = () => {
  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

   if(!form.current) return
      emailjs.sendForm('service_13lwoql', 'template_h21vju8', form.current, {
          publicKey: 'Foo4NUqaGe0_huI15',
      })
          .then(
              () => {
                  console.log('SUCCESS!');
              },
              (error) => {
                  console.log('FAILED...', error.text);
              },
          );
   e.target.reset()
  };

  return (
    <StyledContacts id="Contact">
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <StyledForm ref={form} onSubmit={sendEmail}>
          <Field required placeholder={"name"} name={'user_name'} />
            <Field required placeholder={"your email"} name={'email'} />
          <Field required  placeholder={"subject"} name={'subject'} />
          <Textarea required placeholder={"message"} as={"textarea"} name={'message'}/>
          <Button type={"submit"}>Send message</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  )
}

const StyledContacts = styled.section`
  min-height: 80vh;
  position: relative;
  z-index: 5;
`

const StyledForm = styled.form`
  max-width: 900px;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  margin: 2rem auto;
  padding: 1rem;
  min-height: 500px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: relative;
`

const Field = styled.input`
  width: 80%;
  height: 30px;
  margin: 0 auto;
  padding: 8px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`

const Textarea = styled.input`
  width: 80%;
  height: 120px;
  margin: 1rem auto;
  resize: none;
  padding: 8px;
`
