import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 64px;
  position: absolute;
  width: 1152px;
  height: 340px;
  left: 64px;
  top: 270px;
`;

const DiaryBox = styled.div`
  position: relative;
  width: 240px;
  height: 340px;
  border-radius: 10px;
  background: #ffffff;
`;

const DiaryPicBox = styled.div`
  position: relative;
  width: 240px;
  height: 220px;
  border-radius: 10px 10px 0px 0px;
  background: #f7f7f7;
`;

const DiaryWho = styled.div`
  position: relative;
  width: 180px;
  height: 28px;
  top: 23px;
  left: 30px;
  border-radius: 5px;
  background: #f7f7f7;
`;

const DiaryDay = styled.div`
  position: relative;
  width: 100px;
  height: 28px;
  top: 44px;
  left: 30px;
  border-radius: 5px;
  background: #f7f7f7;
`;

function MainDiaryBox() {
  return (
    <Container>
      <DiaryBox>
        <DiaryPicBox></DiaryPicBox>
        <DiaryWho></DiaryWho>
        <DiaryDay></DiaryDay>
      </DiaryBox>
    </Container>
  );
}

export default MainDiaryBox;
