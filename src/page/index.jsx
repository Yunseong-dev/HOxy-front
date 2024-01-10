import useToken from '../hooks/userToken.js';
import { customAxios } from "../utils/axios.js";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
   const { token, removeToken } = useToken();

   return (
      <div style={{ width: '100%', height: '100%', position: 'relative', background: '#D6E0F2' }}>
         <div style={{ width: 1191, height: 828, left: 364, top: 187, position: 'absolute', background: '#7790E7', borderRadius: 96 }} />
         <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            style={{ width: 320, height: 60, left: 589, top: 392, position: 'absolute', background: '#FEFCFC', borderRadius: 20 }} />
         <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="실명"
            style={{ width: 320, height: 60, left: 1013, top: 391, position: 'absolute', background: '#FEFCFC', borderRadius: 20 }} />
         <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            style={{ width: 320, height: 60, left: 589, top: 482, position: 'absolute', background: '#FEFCFC', borderRadius: 20 }}
         >
            <option value="">성별을 선택하세요</option>
            <option value="남">남성</option>
            <option value="여">여성</option>
         </select>
         <input
            type="text"
            id="birth"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            placeholder="생년월일"
            style={{ width: 320, height: 60, left: 1013, top: 481, position: 'absolute', background: '#FEFCFC', borderRadius: 20 }} />
         <input
            type="text"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="키"
            style={{ width: 320, height: 60, left: 589, top: 571, position: 'absolute', background: '#FEFCFC', borderRadius: 20 }}></input>
         <input
            type="text"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="몸무게"
            style={{ width: 320, height: 60, left: 1013, top: 571, position: 'absolute', background: '#FEFCFC', borderRadius: 20 }} />
         <input
            type="text"
            id="disease1"
            value={disease1}
            onChange={(e) => setDisease1(e.target.value)}
            placeholder="질병" style={{ width: 320, height: 60, left: 589, top: 661, position: 'absolute', background: '#FEFCFC', borderRadius: 20 }} />
         <input
            type="password"
            id="chackpassword"
            value={chackpassword}
            onChange={(e) => setChackPassword(e.target.value)}
            placeholder="비밀번호"
            style={{ width: 320, height: 60, left: 1013, top: 661, position: 'absolute', background: '#FEFCFC', borderRadius: 20 }} />
         <div style={{ width: 170, height: 60, left: 875, top: 850, position: 'absolute', background: '#587BF7', borderRadius: 20 }} />
         <div style={{ width: 1920, height: 150, left: 0, top: 0, position: 'absolute', background: '#9BB1FF' }} />
         <div style={{ width: 147, height: 46, left: 887, top: 864, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 26, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>확인</div>
         <Link to={"/"}><div style={{ width: 243, height: 116, left: -14, top: 49, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 40, fontFamily: 'Kavoon', fontWeight: '400', wordWrap: 'break-word' }}>HOxy?</div></Link>
         <Link to={"/Sos"}><div style={{ width: 216, height: 65, left: 1421, top: 55, position: 'absolute', textAlign: 'center', color: '#F44831', fontSize: 35, fontFamily: 'Pretendard', fontWeight: '800', wordWrap: 'break-word' }}>긴급 신고</div></Link>
         <Link to={"/user/infor"}><div style={{ width: 216, height: 65, left: 1572, top: 55, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 35, fontFamily: 'Pretendard', fontWeight: '800', wordWrap: 'break-word' }}>내 정보</div></Link>
         <Link to={"/"}><div onClick={removeToken} style={{ width: 216, height: 65, left: 1704, top: 56, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 30, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>로그아웃</div></Link>
         <div style={{ width: 556, height: 153, left: 682, top: 294, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>회원 정보 수정<br /></div>
      </div>
   );
};

export default SignUp;
