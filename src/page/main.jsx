import React from "react";
import dia from '../assets/img/free-icon-diagnose-5560119 1.png'
import sic from '../assets/img/free-icon-sick-2302658 1.png'
import vir from '../assets/img/free-icon-anti-virus-4564189 1.png'
import { Link } from 'react-router-dom';
import useToken from "../hooks/userToken";

const Screen = () => {
   const { token, removeToken } = useToken();

   return (
      <div style={{ width: '100%', height: '100%', position: 'relative', background: '#D6E0F2' }}>
         <div style={{ width: 1920, height: 150, left: 0, top: 0, position: 'absolute', background: '#9BB1FF' }} />
         <div style={{ width: 243, height: 116, left: -14, top: 49, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 40, fontFamily: 'Kavoon', fontWeight: '400', wordWrap: 'break-word' }}>HOxy?</div>
         <a href="../../public/infor/질병 안내/introduce.html">
            <div style={{ width: 1300, height: 200, left: 310, top: 203, position: 'absolute', background: '#83BCFF', borderRadius: 50 }} />
            <div style={{ width: 745, height: 93, left: 613, top: 280, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>HOxy 내가? 여러 질병들 보러 가기</div>
            <img style={{ width: 66, height: 65, left: 581, top: 271, position: 'absolute' }} src={dia} />
         </a>
         <a href="../../public/infor/v/virus.html">
            <div style={{ width: 1300, height: 200, left: 310, top: 483, position: 'absolute', background: '#ADCEF8', borderRadius: 50 }} />
            <div style={{ width: 745, height: 146, left: 640, top: 559, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>내가 제일 잘 나가~ 유행 바이러스 보러 가기</div>
            <img style={{ width: 63, height: 64, left: 581, top: 551, position: 'absolute' }} src={vir} />
         </a>
         <Link to={"/user/infor"}>
            <div style={{ width: 1300, height: 200, left: 310, top: 763, position: 'absolute', background: '#BED7F8', borderRadius: 50 }} />
            <div style={{ width: 745, height: 146, left: 587, top: 839, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>내 질병 내역 보러가기</div>
            <img style={{ width: 47, height: 48, left: 589, top: 839, position: 'absolute' }} src={sic} />
         </Link>
         {!!token ? (
            <>
               <Link to={"/Sos"}><div style={{ width: 216, height: 65, left: 1421, top: 55, position: 'absolute', textAlign: 'center', color: '#F44831', fontSize: 35, fontFamily: 'Pretendard', fontWeight: '800', wordWrap: 'break-word' }}>긴급 신고</div></Link>
               <Link to={"/user/infor"}><div style={{ width: 216, height: 65, left: 1572, top: 55, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 35, fontFamily: 'Pretendard', fontWeight: '800', wordWrap: 'break-word' }}>내 정보</div></Link>
               <div onClick={removeToken} style={{ width: 216, height: 65, left: 1704, top: 56, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 30, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>로그아웃</div>
            </>
         ) : (
            <>
               <Link to={"/Sos"}><div style={{ width: 216, height: 65, left: 1421, top: 55, position: 'absolute', textAlign: 'center', color: '#F44831', fontSize: 35, fontFamily: 'Pretendard', fontWeight: '800', wordWrap: 'break-word' }}>긴급 신고</div></Link>
               <Link to={"/user/signin"}><div style={{ width: 216, height: 65, left: 1704, top: 56, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 30, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>로그인</div></Link>
               <Link to={"/user/signup"}><div style={{ width: 216, height: 65, left: 1572, top: 56, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 30, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>회원가입</div></Link>
            </>
         )}
      </div>
   );
};

export default Screen;
