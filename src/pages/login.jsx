import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const signUpOnclick = () => {
    navigate("/signup");
  };

  const loginOnclickHandle = () => {
    if (loginInfo.email === "") {
      alert("이메일을 입력해주세요");
    } else if (loginInfo.password === "") {
      alert("비밀번호를 입력해주세요");
    } else {
    }
  };
  return (
    <>
      <StContainer>
        <div>
          <input
            type="text"
            name="email"
            value={loginInfo.email}
            onChange={onChangeHandle}
            placeholder="이메일을 입력해주세요"
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            value={loginInfo.password}
            onChange={onChangeHandle}
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <div>
          <button onClick={loginOnclickHandle}>로그인</button>
          <button onClick={signUpOnclick}>회원가입</button>
        </div>
      </StContainer>
    </>
  );
};
export default Login;
const StContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4rem;
  background-color: #ffffff;
  border-radius: 1rem;
  opacity: 0.8;
`;
