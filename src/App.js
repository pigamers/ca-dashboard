import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Forget from "./components/Forget";
import Otp from "./components/Otp";
import Reset from "./components/Reset";
import ProfileUser from "./pages/ProfileUser";
import HomeUser from "./pages/HomeUser";
import HomeAdmin from "./pages/HomeAdmin";
import Clients from "./pages/Clients";
import Announcements from "./pages/Announcements";
import Employees from "./pages/Employees";
import CalenderUser from "./pages/CalenderUser";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forget' element={<Forget />} />
        <Route path='/otp' element={<Otp />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/home-user' element={<HomeUser />} />
        <Route path='/home-user/profile' element={<ProfileUser />} />
        <Route path='/home-user/calender' element={<CalenderUser />} />
        <Route path='/home-admin' element={<HomeAdmin />} />
        <Route path='/home-admin/clients' element={<Clients />} />
        <Route path='/home-admin/announcements' element={<Announcements />} />
        <Route path='/home-admin/employees' element={<Employees />} />
      </Routes>
    </div>
  );
}