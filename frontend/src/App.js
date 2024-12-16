
import Header from './components/Common/header';
import AddUser from './components/User/AddUser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllUser from './components/User/AllUser';
import AddImages from './components/Images/AddImages';
function App() {
  return (
    
    //Routers
  <>
  <div> <Header/></div>
    <Router>
      <Routes>
        <Route path="/addUser" exact element={<AddUser/>}/>
        <Route path="/User" exact element={<AllUser/>}></Route>
        <Route path="/addImage" exact element={<AddImages/>}></Route>
      </Routes>      
    </Router>
    


  
  </>
  );
}

export default App;
