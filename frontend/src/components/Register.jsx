import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../features/auth/authSlice";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  function submitHandler(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Password mismatch");
    }
    const userData = {
      name,
      email,
      password,
    };
    dispatch(userRegister(userData));
  }
  {
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
  }
  return (
    <>
      <Header />
      <div className="register-form">
        <div className="register-form-title">Sign Up</div>
        <form onSubmit={submitHandler}>
          <div className="register-form-name">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="register-form-email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="register-form-password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="register-form-password">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </div>
          <div className="form-button">
            <button onSubmit={submitHandler}>Sign Up</button>
          </div>
          <div className="form-new-customer">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
