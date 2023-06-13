import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import "./Login.css";
import { userLogin } from "../features/auth/authSlice";
// import { reset } from "../features/auth/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    console.log(user);
    if (isError) {
      console.log(message);
      navigate("/login");
    } else if (isSuccess || user) {
      console.log(isSuccess, user);
      console.log("Success");
      navigate("/");
    }
  }, [isError, message, isSuccess, navigate, user, dispatch]);

  function submitHandler(e) {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(userLogin(user));
    // dispatch(reset());
    setEmail("");
    setPassword("");
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Header />
      <div className="login-form">
        <div className="login-form-title">Sign In</div>
        <form onSubmit={submitHandler}>
          <div className="login-form-email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-form-password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-button">
            <button onSubmit={submitHandler}>Sign In</button>
          </div>
          <div className="form-new-customer">
            New Customer? <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
