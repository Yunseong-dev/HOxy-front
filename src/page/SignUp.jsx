import { customAxios } from "../utils/axios";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
   const [id, setId] = useState('');
   const [password, setPassword] = useState('');
   const [name, setName] = useState('');
   const [gender, setGender] = useState('');
   const [birth, setBirth] = useState('');
   const [height, setHeight] = useState('');
   const [weight, setWeight] = useState('');
   const [disease1, setDisease1] = useState('');

   const navigate = useNavigate();

   const joinHandler = async () => {
      try {
         // 필수 입력값 검증
         if (!id || !password || !name || !gender || !birth || !height || !weight) {
            alert('모든 필수 입력란을 작성해주세요.');
            return;
         }

         const response = await customAxios.post('/users', {
            id,
            password,
            name,
            gender,
            birth,
            height,
            weight,
            disease1,
         });

         alert('회원가입이 완료되었습니다. 다시 로그인하여주세요.');
         navigate('/user/signin');
      } catch (error) {
         console.error('회원가입 중 오류 발생', error);
         if (error.response && error.response.status === 400) {
            alert(error.response.data.message);
         } else {
            alert('회원가입 중 오류가 발생했습니다.');
         }
      }
   };

   return (
      <div>
         <div style={{ width: '100%', height: '100%', position: 'relative', background: '#D6E0F2' }}>
            <div style={{ width: 1920, height: 150, left: 0, top: 0, position: 'absolute', background: '#9BB1FF' }} />
            <Link to={"/"}><div style={{ width: 243, height: 116, left: -14, top: 49, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 40, fontFamily: 'Kavoon', fontWeight: '400', wordWrap: 'break-word' }}>HOxy?</div></Link>
            <Link to={"/Sos"}><div style={{ width: 216, height: 65, left: 1421, top: 55, position: 'absolute', textAlign: 'center', color: '#F44831', fontSize: 35, fontFamily: 'Pretendard', fontWeight: '800', wordWrap: 'break-word' }}>긴급 신고</div></Link>
            <Link to={"/user/signup"} style={{ width: 150, height: 65, left: 1572, top: 56, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 30, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>회원가입</Link>
            <Link to={"/user/signin"} style={{ width: 216, height: 65, left: 1704, top: 56, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 30, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>로그인</Link>
            <div style={{ width: 1300, height: 697, left: 310, top: 232, position: 'absolute', background: '#9BB1FF', borderRadius: 50 }}>
               <input
                  type="text"
                  id="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="아이디"
                  style={{ width: 320, height: 60, left: 293, top: 157, position: 'absolute', background: '#FEFCFC', borderRadius: 20, color: '#000000' }}
               />
               <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호"
                  style={{ width: 320, height: 60, left: 717, top: 156, position: 'absolute', background: '#FEFCFC', borderRadius: 20, color: '#000000' }}
               />
               <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="실명"
                  style={{ width: 320, height: 60, left: 293, top: 247, position: 'absolute', background: '#FEFCFC', borderRadius: 20, color: '#000000' }}
               />
               <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  style={{ width: 320, height: 60, left: 717, top: 246, position: 'absolute', background: '#FEFCFC', borderRadius: 20, color: '#000000' }}
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
                  style={{ width: 320, height: 60, left: 293, top: 338, position: 'absolute', background: '#FEFCFC', borderRadius: 20, color: '#000000' }}
               />
               <input
                  type="text"
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="키"
                  style={{ width: 320, height: 60, left: 717, top: 338, position: 'absolute', background: '#FEFCFC', borderRadius: 20, color: '#000000' }}
               />
               <input
                  type="text"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="몸무게"
                  style={{ width: 320, height: 60, left: 293, top: 427, position: 'absolute', background: '#FEFCFC', borderRadius: 20, color: '#000000' }}
               />
               <input
                  type="text"
                  id="disease1"
                  value={disease1}
                  onChange={(e) => setDisease1(e.target.value)}
                  placeholder="질병"
                  style={{ width: 320, height: 60, left: 717, top: 427, position: 'absolute', background: '#FEFCFC', borderRadius: 20, color: '#000000' }}
               />
               <Link to={"/"}>
                  <button onClick={joinHandler} style={{ width: 170, height: 60, left: 571, top: 567, position: 'absolute', background: '#587BF7', borderRadius: 20 }}>회원가입</button>
               <div style={{ width: 146, height: 46, left: 577, top: 49, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 34, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>회원가입</div>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default SignUp;
