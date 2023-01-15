import React, { useRef,useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {UserAuth} from "../context/AuthContext"
import { Card, Form, Button } from "react-bootstrap";

export const Login = () => {
    const emailRef = useRef();
  const passwordRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erorr, setError] = useState("");
  const { login } = UserAuth();
  const navigate = useNavigate();
  const formAHandler = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/acount")
    } catch (err) {
      setError(err.message)
      console.log(err.message);
    }
  }
  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={formAHandler}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                placeholder="password"
                type="password"
                ref={passwordRef}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" className="w-100 mt-2">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="text-center w-100 mt-2">
        Need An Acount! <Link to="/signup">SignUp</Link>
      </div>
    </div>
  );
}

