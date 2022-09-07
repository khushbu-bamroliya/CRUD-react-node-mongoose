import "./App.css";
import AddUser from "./components/addUser";
import NavBar from "./components/navbar";
import CodeForInterview from "./components/codeForInterview";
import AllUser from "./components/allUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditUser from "./components/editUser";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element={ <CodeForInterview />}/>
      <Route path='/all' element={  <AllUser />}/>
      <Route path='/add' element={<AddUser />}/>
      <Route path='/edit/:id' element={<EditUser />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
