import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Regiser.css";

const Register = () => {
  //   const navigate = useNavigate();

  //   const navigateLogin = () => {
  //     navigate("/login");
  //   };

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
  };
  return (
    <div>
      <h2 className="text-center text-primary my-4">Register</h2>
      <form onSubmit={handleRegister} className="register-form">
        <input type="text" name="text" placeholder="Your Name" id="" />
        <input type="email" placeholder="Your Email" name="email" id="" />
        <input type="password" name="password" placeholder="Password" id="" />
        <input type="submit" value="Register" />
        <p>
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-danger text-decoration-none"
            // onClick={navigateLogin}
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
