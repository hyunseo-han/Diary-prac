import React, { useState } from "react";
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

//이거 top 계산할때 posirtion 잘 보기
const DiaryDay = styled.div`
  position: relative;
  width: 100px;
  height: 28px;
  top: 44px;
  left: 30px;
  border-radius: 5px;
  background: #f7f7f7;
`;

//가로 세로 정렬 굿굿~!
const NameDiv = styled.div`
  position: relative;
  font-family: BM DoHyeon OTF;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  line-height: 30px;
`;

const TextDiv = styled.div`
  position: relative;
  width: 72px;
  height: 33px;
  top: 23px;
  left: 145px;
  font-family: BM DoHyeon OTF;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

const SelectImgDiv = styled.div`
  position: relative;
`;

const SelectImg = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  top: 186px;
  left: 12px;
`;

const MainAlbum = styled.div``;

function MainDiaryBox() {
  const [image, setImage] = useState("");

  return (
    <Container>
      <DiaryBox>
        <DiaryPicBox>
          <SelectImgDiv>
            <SelectImg src="image/album.png" />
          </SelectImgDiv>
        </DiaryPicBox>
        <DiaryWho>
          <NameDiv>내 일기장</NameDiv>
        </DiaryWho>
        <DiaryDay>
          <NameDiv>365</NameDiv>
        </DiaryDay>
        <TextDiv>째 작성</TextDiv>
      </DiaryBox>
    </Container>
  );
}

export default MainDiaryBox;
