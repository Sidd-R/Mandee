import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import Upload from './pages/Upload';
import Guidelines from './pages/Guidelines';
import './styles/App.css';
import { Route, Routes, NavLink, Link, useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Sales from './pages/Sales';
import DashboardB from './pages/DashboardB';
import Nearby from './pages/Nearby';
import Footer from './components/Footer';
import CommoditiesData from './pages/CommoditiesData';
import Landing from './pages/Landing';


function App() {
  useEffect(() => {
    // if(localStorage.getItem("login")) {
    //   setProfile(localStorage.getItem("profile"))
    //   setLogin(true)
    // }
  
  }, [])
  
  const [type, setType] = useState(0) // 0-farmer 1-buyer
  const [login, setLogin] = useState(false) 
  const [ search,setSearch ] = useState('');
  const [profile, setProfile] = useState({
    uid: 0,
    company: null,
    email: null,
    password: null,
    contact: null,
    profile: 0,
    location: null,
    rating: null,
    picture: null,
    name: null
  })
  const nav = useNavigate()

  return (
    <div className="App">
      {profile.uid != 0?<Navbar setLogin={setLogin} setProfile={setProfile} profile={profile.profile}/>:null}
      {/* <Products/> */}
      {/* <Dashboard/> */}
      {/* <Upload/> */}
      <Routes>
        {profile.profile==0?
        <Route path='/dashboard' element={<Dashboard type={type} profile={profile} setProfile={setProfile}/>}/>:
        <Route path='/dashboard' element={<DashboardB type={type} profile={profile} setProfile={setProfile}/>}/> 
        }
        <Route path='/upload' element={<Upload type={type} profile={profile}/>}/>
        <Route path='/register' element={<Register  login={login} setLogin={setLogin} profile={profile} setProfile={setProfile}/>}/>
        <Route path='/login' element={<Login login={login} setLogin={setLogin} setProfile={setProfile}/>}/>
        <Route path='/guidelines' element={<Guidelines/>}/>
        <Route path='/products' element={<Products setSearch={setSearch} search={search} profile={profile}/>}/>
        <Route path='/sales' element={<Sales setSearch={setSearch} search={search}/>}/>
        <Route path='/nearby' element={<Nearby/>}/>
        <Route path='/livemarket' element={<CommoditiesData/>}/>
        <Route path='/home' element={<Landing/>}/>
      </Routes>
      {login?<Footer/>:null}
    </div>
  );
}

export default App;
