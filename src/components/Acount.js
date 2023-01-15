import React from 'react';
import {UserAuth} from "../context/AuthContext"
import { useNavigate } from 'react-router-dom';
export const Acount = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const logoutHandller =async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/");
      console.log("you have logged out")
    }    catch (err) {
      console.log(err.message);
    }
  }
  return (
    <div className="max-w-600px mx-auto my-16 p-4">
      <h1 className="text-2xl fw-bold py-4">Account</h1>
      <p>Username:{user && user.email}</p>
      <button className="border px-6 py-2 btn my-4" onClick={logoutHandller}>Logout</button>
    </div>
  )
}
