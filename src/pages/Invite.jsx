import { useState } from "react";

const userData = [
  {
    id: 1,
    name: "김철수",
    email: "abc@naver.com",
    profile: "https://cdn-icons-png.flaticon.com/512/5312/5312933.png",
  },
  {
    id: 2,
    name: "김영희",
    email: "eieke@naver.com",
    profile: "https://cdn-icons-png.flaticon.com/512/5312/5312933.png",
  },
  {
    id: 1,
    name: "이수",
    email: "3209@naver.com",
    profile: "https://cdn-icons-png.flaticon.com/512/5312/5312933.png",
  },
];
const Invite = () => {
  const [name, setName] = useState("");
  const [showUserForm, setShowUserForm] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const nameChangeHandle = (event) => {
    setName(event.target.value);
  };
  const searchNameClickHandle = () => {
    if (name === "") {
      console.log("X");
    } else {
      userData.map((user) => {
        if (user.name === name) {
          setUserInfo({ ...user });
        }
        setShowUserForm(!showUserForm);
      });
    }
  };
  return (
    <>
      <div>
        <input
          type="text"
          onChange={nameChangeHandle}
          value={name}
          placeholder="초대할 친구의 이름을 입력하세요."
        />
        <button onClick={searchNameClickHandle}>검색</button>
      </div>
      {showUserForm && (
        <div style={{ display: "flex" }}>
          <div>
            <img src={userInfo.profile} style={{ width: "30px" }} />
          </div>
          <div>
            <span>{userInfo.name}</span>
          </div>
          <div>
            <button>초대하기</button>
          </div>
        </div>
      )}
    </>
  );
};
export default Invite;
