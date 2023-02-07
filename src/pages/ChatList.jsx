import { useEffect, useState } from "react";
import styled from "styled-components";
import Item from "./Item";
import Loader from "./Loader";
const ChatList = () => {
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([1]);

  useEffect(() => {
    console.log(itemLists);
  }, [itemLists]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    setItemLists((itemLists) => itemLists.concat(Items));
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);
  return (
    <>
      <ChatHeader>
        <p>채팅</p>
      </ChatHeader>
      <div>
        <AppWrap>
          {itemLists.map((v, i) => {
            return <Item number={i + 1} key={i} />;
          })}
          <div ref={setTarget} className="Target-Element">
            {isLoaded && <Loader />}
          </div>
        </AppWrap>
      </div>
    </>
  );
};
export default ChatList;
const ChatHeader = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 360px;
  height: 66px;
  left: 0px;
  top: 0px;
  border: 1px solid black;
  /* White */

  background: #ffffff;
  & p {
    position: absolute;
    left: 6.11%;
    right: 85%;
    top: 40.91%;
    bottom: 21.21%;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 25px;
    /* identical to box height */

    /* black */

    color: #242424;
  }
`;
const AppWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  text-align: center;
  align-items: center;

  .Target-Element {
    width: 100vw;
    height: 140px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;
