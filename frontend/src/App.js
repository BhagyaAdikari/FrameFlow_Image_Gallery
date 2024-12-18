
import AddUser from './components/User/AddUser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllUser from './components/User/AllUser';
import AddImages from './components/Images/AddImages';
import LoginUser from './components/User/LoginUser';
import UpdateUser from './components/User/UpdateUser';
function App() {
  return (
    
    //Routers
  <>
  <div> </div>
    <Router>
      <Routes>
        <Route path="/addUser" exact element={<AddUser/>}/>
        <Route path="/User" exact element={<AllUser/>}></Route>
        <Route path="/addImage" exact element={<AddImages/>}></Route>
        <Route path="/LoginUser" exact element={<LoginUser/>}></Route>
        <Route path="/updateUser/:id" exact element={<UpdateUser/>}></Route>
      </Routes>      
    </Router>
    


  
  </>
  );
}

export default App;
