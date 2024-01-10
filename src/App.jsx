import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';
import UserInfor from './page/Userinfor';
import Sos from './page/Sos';
import Index from './page/index';
import Main from  './page/main';
import UserUp from './page/userUp';

const App = () => {
  return (
    <Routes>
      <Route path="/user/signin" element={<SignIn />} />
      <Route path="/user/signup" element={<SignUp />} />
      <Route path="/user/infor" element={<UserInfor />} />
      <Route path="/Sos" element={<Sos />} />
      <Route path="/Index" element={<Index />} />
      <Route path="/" element={<Main />} />
      <Route path="/user/edit" element={<UserUp />} />

    </Routes>
  );
};

export default App;
