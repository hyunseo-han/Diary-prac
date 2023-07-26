import React from "react";
import styled from "styled-components";
import Header from "../Basic/Header";
import MainDiaryBox from "./MainDiaryBox";
import data from "../data.json";

//높이 고치기
const Background = styled.div`
  background: #f6faf1;
  width: 100%;
  height: 1000px;
`;

const Title = styled.div`
  position: relative;
  width: 240.41px;
  height: 50px;
  left: 67px;
  top: 50px;
  font-family: "BM DoHyeon OTF";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  color: #9b8962;
`;

const TitleColor = styled.div`
  color: #65a30d;
`;

const Title2 = styled.div`
  position: relative;
  width: 500.33px;
  height: 50px;
  left: 67px;
  top: 50px;
  font-family: "BM DoHyeon OTF";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #9b8962;
`;

//10뒤에는 px 생략?
function Main() {
  return (
    <div>
      <Header />
      <Background>
        <Title>
          그 날 하루의 <TitleColor>&nbsp;가치</TitleColor>
        </Title>
        <Title2>
          기억하고 싶은 하루를 기억하고 싶은 상대와 같이 기록하세요
        </Title2>
        <MainDiaryBox />
      </Background>
    </div>
  );
}

export default Main;
