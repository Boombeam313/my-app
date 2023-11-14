<<<<<<< HEAD
import './App.css';
import Question from './component/Question';

function App() {
  return (
    <div className="App" >
      <Question/>
=======
import { Route,  Router } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" element={<Login />} />
        <Route path="Login" element={<Login />} />
        <Route path="profile" element={<profile />} />
      </Router>
>>>>>>> 0c83db154517f8acafcc287c37e75e1a3ca67cb6
    </div>
  );
}

export default App;
