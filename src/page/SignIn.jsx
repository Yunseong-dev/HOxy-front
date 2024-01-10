import useToken from '../hooks/userToken.js';
import { customAxios } from "../utils/axios.js";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const { token, setToken } = useToken();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(window.location.search);
  const redirectTo = searchParams.get("redirect-to") || "/";

  const someValue = "your_value_here";

  useEffect(() => {
    if (!!token) {
      alert("이미 로그인이 되어있습니다.");
      navigate(redirectTo);
    }
  }, [token, navigate, redirectTo]);

  const loginHandler = async () => {
    try {
      const response = await customAxios.post("/auth/login", {
        id,
        password
      });
  
      const token = response.data.token;
      setToken(token);
      navigate(redirectTo);
    } catch (error) {
      console.error("로그인 중 오류 발생", error);
      if (axios.isAxiosError(error)) {
        const response = error.response;
        alert(
          "로그인 중 오류가 발생했습니다. " +
            (response?.data.message ?? response?.status)
        );
      }
    }
  };
  
  return (
    <div>
      <div style={{ width: '100%', height: '100%', position: 'relative', background: '#D6E0F2' }}>
        <div style={{ width: 1300, height: 697, left: 310, top: 237, position: 'absolute', background: '#9BB1FF', borderRadius: 50 }} />
        <div style={{ width: 1920, height: 150, left: 0, top: 0, position: 'absolute', background: '#9BB1FF' }} />
        <Link to={"/Sos"}><div style={{ width: 216, height: 65, left: 1421, top: 55, position: 'absolute', textAlign: 'center', color: '#F44831', fontSize: 35, fontFamily: 'Pretendard', fontWeight: '800', wordWrap: 'break-word' }}>긴급 신고</div></Link>
        <Link to={"/"}><div style={{ width: 243, height: 116, left: -14, top: 49, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 40, fontFamily: 'Kavoon', fontWeight: '400', wordWrap: 'break-word' }}>HOxy?</div></Link>
        <Link to={"/user/signup"}><div style={{ width: 216, height: 65, left: 1572, top: 56, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 30, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>회원가입</div></Link>
        <Link to={"/user/signin"}><div style={{ width: 216, height: 65, left: 1704, top: 56, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 30, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>로그인</div></Link>
        <div style={{ width: 146, height: 46, left: 887, top: 367, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 34, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>로그인</div>
        <input
          id="id"
          type="text"
          placeholder="아이디를 입력해주세요."
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={{ width: 320, height: 60, left: 805, top: 482, position: 'absolute', background: '#FEFCFC', borderRadius: 20, color: '#000000' }} />
        <input
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: 320, height: 60, left: 805, top: 592, position: 'absolute', background: '#FEFCFC', borderRadius: 20, color: '#000000' }} />
        <button onClick={loginHandler} style={{ width: 170, height: 60, left: 881, top: 749, position: 'absolute', background: '#587BF7', borderRadius: 20 }}>로그인</button>
      </div>
    </div>
  );
}
export default SignIn;
