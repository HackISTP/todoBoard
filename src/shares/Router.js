import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "../pages/Chat";
import Chatting from "../pages/Chatting";
import Invite from "../pages/Invite";
import Main from "../pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Invite />} />
        <Route path="/chatting" element={<Chatting />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
