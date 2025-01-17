
import AddUser from './components/User/AddUser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllUser from './components/User/AllUser';
import AddImages from './components/Images/AddImages';
import LoginUser from './components/User/LoginUser';
import UpdateUser from './components/User/UpdateUser';
import SignUp from './components/User/SignUp';
import Profile from './components/Pages/Profile';
import PublicProfile from './components/Pages/PublicProfile';
import ImageUpload from './components/Pages/ImageUpload';
import Home from './components/Pages/Home';
import Profile1 from './components/Pages/Profile1';
import PProfile from './components/Pages/PProfile';
import Memory from './components/Images/Memory';
import Header from './components/Header/Header';
import About from './components/About/About';
import Sample from './components/Sample/Sample';
import ContactUs from './components/Contact/Contact';
function App() {
  return (
    
    //Routers
  <>
  <Header/> 
    <Router>
      <Routes>
      <Route path="/" exact element={<Home/>}/>
        <Route path="/addUser" exact element={<AddUser/>}/>
        <Route path="/User" exact element={<AllUser/>}></Route>
        <Route path="/addImage" exact element={<AddImages/>}></Route>
        <Route path="/LoginUser" exact element={<LoginUser/>}></Route>
        <Route path="/SignUp" exact element={<SignUp/>}></Route>
        <Route path="/updateUser/:id" exact element={<UpdateUser/>}></Route>
        <Route path="/userProfile" exact element={<Profile/>}></Route>
        <Route path="/PublicProfile/:id" exact element={<PublicProfile/>}></Route>
        <Route path="/ImageUpload/:id" exact element={<ImageUpload/>}></Route>
        <Route path="/Profile1/:id" exact element={<Profile1/>}></Route>
        <Route path="/PProfile/:id" exact element={<PProfile/>}></Route>
        <Route path="/Memory/:id" exact element={<Memory/>}></Route>
        <Route path="/About" exact element={<About/>}></Route>
        <Route path="/Sample" exact element={<Sample/>}></Route>
        <Route path="/Contact" exact element={<ContactUs/>}></Route>
      </Routes>      
    </Router>
    


  
  </>
  );
}

export default App;
