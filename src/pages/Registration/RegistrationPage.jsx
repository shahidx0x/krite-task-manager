import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../../redux/slice/auth.slices";

const RegistrationPage = () => {
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
  console.log(state);
  const onSubmit = (data, event) => {
    const { name, password } = data;
    event.preventDefault();
    dispatch(registerThunk({ name, password }));
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
          <h2>Register here to access the task list</h2>
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
                ? "Sign up"
                : state.auth.isLoading && "Please Wait..."}
            </button>
          </form>
          <p>
            Already have an account ? Login now{" "}
            <Link to="/">
              <span className="registration-click">click here</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
