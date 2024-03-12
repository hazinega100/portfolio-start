import React from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Contact} from "../../../components/contact/Contact";
import location from "../../../assets/images/icons/location.svg"
import phone from "../../../assets/images/icons/phone.svg"
import email from "../../../assets/images/icons/email.svg"
import {Social} from "../../../components/social/Social";

export const Contacts = () => {
    return (
        <ContactsStyle>
            <SectionTitle title="Contact Us"/>
            <ContactsWrapper>
                <FormStyle>
                    <h3>Get in touch</h3>
                    <div>
                        <Field placeholder="email"/>
                        <Field placeholder="phone"/>
                    </div>
                    <Field as={"textarea"} placeholder="message"/>
                    <div>
                        <Button type="submit">Send</Button>
                    </div>
                </FormStyle>
                <FlexWrapper flexDirection={"column"}>
                    <Contact src={location} title={"Location"} data={"Russia, SPb"} />
                    <Contact src={phone} title={"Phone"} data={"+79502231886"} href={"tel:+79502231886"}/>
                    <Contact src={email} title={"Email"} data={"hazinega@gmail.com"} href={"mailto:hazinega@gmail.com"}/>
                </FlexWrapper>
            </ContactsWrapper>
            <Social />
        </ContactsStyle>
    );
};

const ContactsStyle = styled.section`

  padding-bottom: 70px;
`
const ContactsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 932px;
  max-height: 462px;
  padding: 50px 80px;
  box-shadow: 8px 8px 34px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 65px;
`
const FormStyle = styled.form`
  max-width: 430px;
  h3 {
    font-size: 36px;
    font-weight: 500;
  }
`
const Field = styled.input`
  max-width: 100%;
  padding: 10px 30px;
  border-radius: 9px;
  background: rgb(245, 245, 245);
  outline: none;
`
const ContactsBox = styled.div`

`
