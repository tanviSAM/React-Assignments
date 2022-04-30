import styled from "styled-components";

const Button = styled.button`
  margin: 2em 0.5em;
  padding: 18px;
  border-radius: 0.3em;
  cursor: pointer;
  position: relative;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;

  color: ${(props) =>
    props.variant === "primary"
      ? "white"
      : props.variant === "link"
      ? "#0086ff"
      : "black"};

  background-color: ${(props) =>
    props.variant === "primary" ? "#0086ff" : "white"};

  border: ${(props) =>
    props.variant === "default"
      ? "1px solid #b2b2b2"
      : props.variant === "dashed"
      ? "1px dashed #b2b2b2"
      : props.variant === "dotted"
      ? "1px dotted #b2b2b2"
      : "none"};

  &:after {
    content: "";
    background: ${(props) =>
      props.variant === "primary"
        ? "#65b7ff67"
        : props.variant === "text" || props.variant === "link"
        ? "none"
        : "#cecece3d"};
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }
  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
`;

export default Button;
