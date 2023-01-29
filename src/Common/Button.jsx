import styled from "styled-components";

//버튼 추상화 연습
const Button = ({ children, color, width, height, bgcolor, ...rest }) => {
  return (
    <StButton
      color={color}
      width={width}
      height={height}
      bgcolor={bgcolor}
      {...rest}
    >
      {children}
    </StButton>
  );
};
export default Button;
const StButton = styled.button`
  border: none;
  color: ${({ color }) => color};
  background-color: ${(props) => props.bgcolor};
  width: ${(props) => props.width};
  height: ${({ height }) => height};
  border-radius: ${(props) => props.borderRadio};
  transition: ${(props) => props.hoverTransition};
  &:hover {
    width: ${(props) => props.hoverWidth};
    height: ${(props) => props.hoverHeight};
  }
`;
