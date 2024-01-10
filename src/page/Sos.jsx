import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useToken from "../hooks/userToken";
import useSWR from 'swr';
import { tokenFetcher } from "../utils/axios";


import'../css/global.css';

function Sos() {
   const { token, removeToken } = useToken();
   const { isLoading, error, data } = useSWR("/users/me", tokenFetcher(token));
   const initialData = "";

   const loginMessage = (
      <div style={{ width: '100%', height: '100%', position: 'relative', background: '#D6E0F2', textAlign: 'center', paddingTop: '20%' }}>
         <div style={{ fontSize: 30, color: '#F44831', fontWeight: '800' }}>로그인이 필요합니다.</div>
         <Link to="/user/signin" style={{ fontSize: 20, color: '#F44831', fontWeight: '700', marginTop: '20px' }}>로그인하러 가기</Link>
      </div>
   );

   const handleButtonClick = async () => {
      try {
         const { coords } = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
         });
         const { latitude, longitude } = coords;

         alert(`이용자의 모든 정보와 함께\n현재 위치 위도 ${latitude}, 경도 ${longitude}\n도 함께 전송하였습니다.`);
      } catch (error) {
         console.error('위치 정보를 가져오는 데 실패했습니다.', error);
      }
   };

   useEffect(() => {
      navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {
         if (permissionStatus.state === 'prompt') {
            navigator.geolocation.getCurrentPosition(() => {}, () => {});
         }
      });
   }, []);

   return (
      <div style={{ width: '100%', height: '100%', position: 'relative', background: '#D6E0F2' }}>
         <div style={{ width: 1920, height: 150, left: 0, top: 0, position: 'absolute', background: '#9BB1FF' }} />
         <Link to={"/"}><div style={{ width: 243, height: 116, left: -14, top: 49, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 40, fontFamily: 'Kavoon', fontWeight: '400', wordWrap: 'break-word' }}>HOxy?</div></Link>
         {token ? (
            <>
               <button className='button' onClick={handleButtonClick}  style={{ width: 600, height: 600, left: 660, top: 241, position: 'absolute', background: '#F44831', borderRadius: 350, border: '15px #960000 solid', color: 'black', fontSize: 85, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word', cursor: 'pointer'}}>119 긴급 신고</button>
               <div style={{ width: 808, height: 73, left: 556, top: 932, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>*누르면 119로 바로 신고가 되니 조심하세요*</div>
               <Link to={"/Sos"}><div style={{ width: 216, height: 65, left: 1421, top: 55, position: 'absolute', textAlign: 'center', color: '#F44831', fontSize: 35, fontFamily: 'Pretendard', fontWeight: '800', wordWrap: 'break-word' }}>긴급 신고</div></Link>
               <Link to={"/user/infor"}><div style={{ width: 216, height: 65, left: 1572, top: 55, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 35, fontFamily: 'Pretendard', fontWeight: '800', wordWrap: 'break-word' }}>내 정보</div></Link>
               <Link to={"/"}><div onClick={removeToken} style={{ width: 216, height: 65, left: 1704, top: 56, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 30, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>로그아웃</div></Link>
            </>
         ) : (
            <>
               {loginMessage}
            </>
         )}
      </div>
   );
}

export default Sos;
