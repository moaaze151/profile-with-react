import styled from "styled-components";

export const Drop = styled.div`
  padding: 50px 0;
  text-align: center;
`;
export const DropTitle = styled.h2`
  font-size: 60px;
  margin-bottom: 30px;
`;

export const DropTitleSpan = styled.span`
  font-weight: normal;
`;
export const DropForm = styled.form`
  width: 70%;
  margin: auto;
`;
export const FormInputDiv = styled.div`
  overflow: hidden;
`;
export const FormInput = styled.input`
  box-sizing: border-box;
  outline: 0;
  padding: 5px;
  margin-bottom: 10px;
  width: ${(props) => (props.formInput ? "49%" : props.sub ? "100%" : "60%")};
  float: ${(props) => (props.text ? "left" : props.email ? "right" : "")};
`;
export const FormTextarea = styled.textarea`
  width: 100%;
  outline: 0;
  background: #ccc;
`;
export const FormSubmit = styled(FormInput)`
  width: 60%;
  background: #fff;
  border: 1px solid #ccc;
  color: #888;
  cursor: pointer;
`;
