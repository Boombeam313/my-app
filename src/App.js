<<<<<<< HEAD
import './App.css';
import Question from './component/Question';
import List from './component/list';




function App() {
  return (
    <div className="App"> <br/>
     <Question />
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
>>>>>>> 89de96929240d293e10cc1493bf38fd1eeb1a289
    </div>
  );
}

export default App;
