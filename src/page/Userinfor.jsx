import { Link } from 'react-router-dom';
import useToken from '../hooks/userToken';
import useSWR from 'swr';
import { tokenFetcher } from "../utils/axios";

export default function Home() {
   const { token, removeToken } = useToken();
   const { isLoading, error, data } = useSWR("/users/me", tokenFetcher(token));
   const initialData = "";
   return (
      <div style={{ width: '100%', height: '100%', position: 'relative', background: '#D6E0F2' }}>
         <div style={{ width: 1920, height: 150, left: 0, top: 0, position: 'absolute', background: '#9BB1FF' }} />
         <div style={{ width: 1191, height: 828, left: 364, top: 191, position: 'absolute', background: '#7790E7', borderRadius: 96 }} />
         <Link to={"/user/edit"}>
         <button style={{ width: 170, height: 60, left: 875, top: 850, position: 'absolute', background: '#587BF7', borderRadius: 20 }} />
         <div style={{ width: 147, height: 46, left: 887, top: 864, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 26, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>수정</div>
         </Link>
         <div style={{ width: 243, height: 116, left: -14, top: 49, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 40, fontFamily: 'Kavoon', fontWeight: '400', wordWrap: 'break-word' }}>HOxy?</div>
         <Link to={"/Sos"}><div style={{ width: 216, height: 65, left: 1421, top: 55, position: 'absolute', textAlign: 'center', color: '#F44831', fontSize: 35, fontFamily: 'Pretendard', fontWeight: '800', wordWrap: 'break-word' }}>긴급 신고</div></Link>
         <Link to={"/user/infor"}><div style={{ width: 216, height: 65, left: 1572, top: 55, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 35, fontFamily: 'Pretendard', fontWeight: '800', wordWrap: 'break-word' }}>내 정보</div></Link>
         <div onClick={removeToken} style={{ width: 216, height: 65, left: 1704, top: 56, position: 'absolute', textAlign: 'center', color: '#FEFCFC', fontSize: 30, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>로그아웃</div>
         <div style={{ width: 556, height: 153, left: 682, top: 294, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word' }}>회원 정보</div>
         <input
            type="text"
            value={data?.name || initialData}
            disabled
            placeholder={initialData}
            style={{ width: 320, height: 60, left: 587, top: 438, position: 'absolute', background: '#FEFCFC', borderRadius: 20, color: '#000000' }}
         />
         <input
            type="text"
            value={data?.gender || initialData}
            disabled
            placeholder={initialData}
            style={{ width: 320, height: 60, left: 1011, top: 436, position: 'absolute', background: '#FEFCFC', borderRadius: 20, color: '#000000' }}
         />
         <input
            type="text"
            value={data?.birth || initialData}
            disabled
            placeholder={initialData}
            style={{ width: 320, height: 60, left: 587, top: 527, position: 'absolute', background: '#FEFCFC', borderRadius: 20, color: '#000000' }}
         />
         <input
            type="text"
            value={data?.height || initialData}
            disabled
            placeholder={initialData}
            style={{ width: 320, height: 60, left: 1011, top: 527, position: 'absolute', background: '#FEFCFC', borderRadius: 20, color: '#000000' }}
         />
         <input
            type="text"
            value={data?.weight || initialData}
            disabled
            placeholder={initialData}
            style={{ width: 320, height: 60, left: 587, top: 616, position: 'absolute', background: '#FEFCFC', borderRadius: 20, color: '#000000' }}
         />
         <input
            type="text"
            value={data?.disease1 || initialData}
            disabled
            placeholder={initialData}
            style={{ width: 320, height: 60, left: 1011, top: 616, position: 'absolute', background: '#FEFCFC', borderRadius: 20, color: '#000000' }}
         />
      </div>
   );
}
