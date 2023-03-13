import "./App.css";
import {Routes, Route} from "react-router";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

// pages
import Home from "./pages/Home.jsx";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Group from "./pages/Group";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/groups" element={<Group/>} />

        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
