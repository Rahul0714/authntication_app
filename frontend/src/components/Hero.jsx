import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero-container">
        <div className="hero-title">MERN Authentication</div>
        <div className="hero-paragraph">
          This is a boilerplate for MERN authentication that stores a JWT in an
          HTTP-Only cookie. It also uses Redux Toolkit and Simple css as I am
          not using that React bootstrap library as of now.
        </div>
        <div className="hero-buttons">
          <div className="hero-signin" onClick={() => navigate("/login")}>
            Sign In
          </div>
          <div className="hero-signup" onClick={() => navigate("/register")}>
            Sign Up
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
