import styled from "styled-components";

const Login = () => {
  return (
    <StContainer>
      <div>
        <input type="text" placeholder="이메일을 입력해주세요" />
      </div>
      <div>
        <input type="text" placeholder="비밀번호를 입력해주세요" />
      </div>
      <div>
        <button>로그인</button>
      </div>
    </StContainer>
  );
};
export default Login;
const StContainer = styled.div``;
