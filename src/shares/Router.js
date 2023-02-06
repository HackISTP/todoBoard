import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import ChatList from "../pages/ChatList";
import Chatting from "../pages/Chatting";
import Invite from "../pages/Invite";
import Main from "../pages/Main";
import Login from "../pages/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/invite" element={<Invite />} />
        <Route path="/chatlist" element={<ChatList />} />
        <Route path="/chatting" element={<Chatting />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
