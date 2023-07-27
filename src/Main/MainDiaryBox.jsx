//다이어리들 map
import React, { useState, useRef } from "react";
import styled from "styled-components";
import data from "../data.json";

//display: flex
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 64px;
  width: 1152px;
  height: 340px;
  left: 64px;
  top: 88px;
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

const DiaryPic = styled.img`
  position: relative;
  width: 240px;
  height: 220px;
  border-radius: 10px 10px 0px 0px;
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

//label: input보다 좀 더 넓은 범위
const SelectImgDiv = styled.label`
  position: relative;
  width: 24px;
  height: 24px;
  top: -33px;
  left: 12px;
`;

//detail: cursor pointer
const SelectImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const SelectInput = styled.input`
  display: none;
`;

function MainDiaryBox({ choosePage, setChoosePage }) {
  const [image, setImage] = useState("");

  const imgRef = useRef();

  const changeImg = () => {
    const file = imgRef.current.files[0]; //type error
    const reader = new FileReader(); //FileReader는 파일을 읽는 데 사용되는 Web API
    reader.readAsDataURL(file); //파일을 Data URL 형태로 읽을 수 있다
    reader.onloadend = () => {
      //파일의 읽기 작업이 끝났을 때 호출
      setImage(reader.result); //이미지 보여줌
    };
  };

  return (
    <Container>
      {data.map((list) => (
        <DiaryBox key={list.id}>
          <DiaryPicBox>
            <DiaryPic
              src={image ? image : `image/example.png`}
              alt="diary image"
            ></DiaryPic>
            <SelectImgDiv>
              <SelectImg src="image/album.png" />
              <SelectInput
                type="file"
                accept="image/*"
                onChange={changeImg}
                ref={imgRef}
              />
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
      ))}
    </Container>
  );
}

export default MainDiaryBox;
