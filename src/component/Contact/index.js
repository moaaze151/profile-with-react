import React from "react";
import {
  Drop,
  DropTitle,
  DropTitleSpan,
  DropForm,
  FormInputDiv,
  FormTextarea,
  FormSubmit,
  FormInput
} from "./style";
const Contact = () => {
  return (
    <Drop>
      <div class="container">
        <DropTitle>
          <DropTitleSpan>Drop </DropTitleSpan>Me A line
        </DropTitle>
        <DropForm action="">
          <FormInputDiv>
            <FormInput formInput text type="text" placeholder="Your Name" />
            <FormInput formInput email type="email" placeholder="Your Email" />
          </FormInputDiv>
          <FormInput type="text" sub placeholder="Your Subject" />
          <FormTextarea cols="30" rows="10" placeholder="Your Message"></FormTextarea>
          <FormSubmit type="submit" value="Send Message" />
        </DropForm>
      </div>
    </Drop>
  );
};

export default Contact;
