import styled from "styled-components";

const Input = ({ color, width, height, bgcolor, ...rest }) => {
  return (
    <>
      <StInput
        color={color}
        width={width}
        height={height}
        bgcolor={bgcolor}
        {...rest}
      ></StInput>
    </>
  );
};
export default Input;
const StInput = styled.input`
  border: none;
  color: ${({ color }) => color};
  background-color: ${(props) => props.bgcolor};
  width: ${(props) => props.width};
  height: ${({ height }) => height};
  border-radius: ${(props) => props.borderRadio};
`;
