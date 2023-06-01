import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Team from "./components/home/Team";
import Login from "./components/home/Login";
import AllMembers from "./components/AllMembers/AllMembers";
import AddUser from "./components/AdminPanel/AddUser";
import AddEvent from "./components/AdminPanel/AddEvent";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Header />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/team/all" element={<AllMembers />} />
          <Route exact path="/admin" element={<AddUser />} />
          <Route exact path="/addEvent" element={<AddEvent />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
