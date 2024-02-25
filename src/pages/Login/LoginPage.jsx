import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/slice/auth.slices";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);

  useEffect(() => {
    if (state.auth.isLoggedIn) {
      navigate("/dashbord");
    }
  }, [state, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    const { name, password } = data;
    event.preventDefault();
    dispatch(loginThunk({ name, password }));
  };

  return (
    <div className="flex">
      <div className="login-left-side">
        <div className="flex lls-header-group">
          <img className="lls-icon" src="./task-icon.svg" alt="" srcset="" />
          <h2 className="lls-header">Task Manager</h2>
        </div>
        <div className="lls-quote-container"></div>
        <div className="lls-quote">
          <h2>
            " Productivity is never an accident. It is always the result of a
            commitment to excellence, intelligent planning, and focused effort "
          </h2>
          <p> - Paul J. Meyer</p>
        </div>
      </div>
      <div className="login-right-side">
        <div className="llr-div-container">
          <h2>Sign in to access your task list</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <input
              {...register("name", { required: true, maxLength: 80 })}
              className="input-login"
              type="text"
              placeholder="username"
            />
            <input
              {...register("password", { required: true, maxLength: 80 })}
              className="input-password"
              type="password"
              placeholder="password"
            />
            <button type="submit" className="input-button">
              {!state.auth.isLoggedIn && !state.auth.isLoading
                ? "Sign In"
                : state.auth.isLoading && "Please Wait..."}
            </button>
          </form>
          <p>
            Dont have an account ? Register now{" "}
            <Link to="/registration">
              <span className="registration-click">click here</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
