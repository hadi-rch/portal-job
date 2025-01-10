import './App.css';
// import Footer from './Components/Footer';
// import Navbar from './Components/Navbar';
import Home from './Layout/Body';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Auth/Register';
import Login from './Auth/Login';
import ChangePassword from './Auth/ChangePassword';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import CreateData from './Dashboard/CreateData';
import Sidebar from './Dashboard/Sidebar';
import Dashboard from './Dashboard/Dashboard';
import JobDetail from './Components/JobDetail';
import LoadingPage from './Components/LoadingPage';
import Vacancy from './Dashboard/Vacancy';
import Admin from './Components/Admin';
import Profile from './Dashboard/Profile';
import UpdateData from './Dashboard/UpdateData';
import Cookies from 'js-cookie';

function App() {
  const isLoggedIn = Cookies.get('token') !== undefined;
  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>

            <Route path='/dashboard/admin' element={<Admin/>}/>
            <Route path='/dashboard/list-job-vacancy' element={<Dashboard/>}/>
            <Route path='/dashboard/list-job-vacancy/form' element={<CreateData/>}/>
            <Route path='/dashboard/profile' element={<Profile/>}/>
            <Route path='/dashboard/change-password' element={<ChangePassword/>}/>
            <Route path='/dashboard/update-data/:id' element={<UpdateData/>}/>

            <Route path='/job-vacancy' element={<Vacancy/>}/>
            <Route path='/sidebar' element={<Sidebar/>}/>
            <Route path='/vacancy/job-detail/:id' element={<JobDetail/>}/>
            <Route path='/loading-page' element={<LoadingPage/>}/>
          
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
