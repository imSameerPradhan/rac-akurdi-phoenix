import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Team from "./components/home/Team";
import Login from "./components/home/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Header />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
