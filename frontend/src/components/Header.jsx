import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSignInAlt, FaUserAlt } from "react-icons/fa";
import "./Header.css";
import { userLogout } from "../features/auth/authSlice";
// import { reset } from "nodemon";
import { reset } from "../features/auth/authSlice";

function Header() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleLogout() {
    await dispatch(userLogout());
    await dispatch(reset());
    navigate("/");
  }

  return (
    <>
      <div className="header-container">
        <div className="header-appname">Authentication App</div>
        <div className="header-buttons">
          {user ? (
            <div className="dropdown">
              {console.log(user)}
              <button className="dropbtn">{user.name}</button>
              <div className="dropdown-content">
                <Link to="/profile">Profile</Link>
                <div onClick={handleLogout}>
                  <Link>Logout</Link>
                </div>
              </div>
            </div>
          ) : (
            <>
              {console.log(user)}
              <div className="header-signin" onClick={() => navigate("/login")}>
                <FaSignInAlt /> Sign In
              </div>
              <div
                className="header-signup"
                onClick={() => navigate("/register")}
              >
                <FaUserAlt />
                Sign Up
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
