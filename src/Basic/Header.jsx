import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  /* 흰색 헤더*/
  width: 100%;
  height: 82px;
  background: #ffffff;
`;

const LogoImg = styled.img`
  /* 같이의 가치 로고 이미지*/
  position: relative;
  width: 80px;
  height: 80px;
  cursor: pointer;
  margin: 1px 13.5px 1px 24px;
`;

const Logo = styled.span`
  /* 같이의 가치 글자 로고*/
  position: relative;
  top: -35px;
  width: 77px;
  height: 60px;
  margin-right: 200px;
  font-family: "BM DoHyeon OTF";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  align-items: center;
  color: #84cc16;
  cursor: pointer;
`;

const Diary = styled.span`
  position: relative;
  width: 70px;
  height: 62px;
  margin-right: 200px;
  font-family: "BM DoHyeon OTF";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  align-items: center;
  color: #9b8962;
  top: -35px;
  cursor: pointer;
`;

const Mem = styled.span`
  position: relative;
  width: 46.48px;
  height: 62px;
  font-family: "BM DoHyeon OTF";
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  align-items: center;
  color: #9b8962;
  margin-right: 200px;
  top: -35px;
  cursor: pointer;
`;

const Login = styled.span`
  position: relative;
  font-family: "BM DoHyeon OTF";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  color: #9b8962;
  top: -35px;
  cursor: pointer;
`;

const Bar = styled.span`
  position: relative;
  font-family: "BM DoHyeon OTF";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  color: #9b8962;
  top: -35px;
`;

const Join = styled.span`
  position: relative;
  font-family: "BM DoHyeon OTF";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  color: #9b8962;
  top: -35px;
  cursor: pointer;
`;

function Header() {
  return (
    <div>
      <HeaderDiv>
        <LogoImg src="image/logo.png"></LogoImg>
        <Logo>같이의 가치</Logo>
        <Diary>일기장</Diary>
        <Mem>추억</Mem>
        <Login>로그인</Login>
        <Bar>&nbsp;|&nbsp;</Bar>
        <Join>회원가입</Join>
      </HeaderDiv>
    </div>
  );
}

export default Header;
