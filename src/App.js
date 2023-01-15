import './App.css';
import { Signup } from './components/Signup';
import { Container } from "react-bootstrap";
import {Acount} from "./components/Acount"
import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <Container>
      <h1 className="text-center fw-bold m-4">Firebase Auth & Context</h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route
            path="/acount"
            element={
              <ProtectedRoute>
                <Acount />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </AuthContextProvider>
    </Container>
  );
}

export default App;
