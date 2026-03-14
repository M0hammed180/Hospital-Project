import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Routes , Route
import Dashboard from "./components/Home/Dashboard";
import Patient from "./components/Home/Patient";
import Doctor from "./components/Home/Doctor";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const role = useSelector((state) => state.login.user?.role);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            role == "patient" ? (
              <Patient />
            ) : role == "doctor" ? (
              <Doctor />
            ) : (
              <Dashboard />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
