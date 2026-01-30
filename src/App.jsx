import EmployeeTable from "./components/EmployeeTable";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterComponent from "./components/RegisterComponent";
import HelloComponent from "./components/helloComponent";
import Welcome from "./components/welcome";

function App() {
  return (
    <div>
      {/* <HelloComponent />
      <RegisterComponent /> */}
      {/* <EmployeeTable /> */}
      {/* <Welcome />
      <Login /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
