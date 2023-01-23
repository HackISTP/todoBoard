const Signup = () => {
  return (
    <>
      <form>
        <div>
          <label>아이디</label>
          <input type="text" />
        </div>
        <div>
          <label>비밀번호</label>
          <input type="password" />
        </div>
        <div>
          <label>비밀번호 확인</label>
          <input type="password" />
        </div>
        <div>
          <button>회원가입</button>
        </div>
      </form>
    </>
  );
};
export default Signup;
