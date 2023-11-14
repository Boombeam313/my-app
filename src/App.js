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
    </div>
  );
}

export default App;
