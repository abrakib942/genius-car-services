import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import "./Regiser.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import SocialLogin from "../Shared/socialLogin/SocialLogin";
import { sendEmailVerification } from "firebase/auth";
import { async } from "@firebase/util";
import Loading from "../loading/Loading";
import PageTitle from "../Shared/pageTitle/PageTitle";

const Register = () => {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);

  //   const navigateLogin = () => {
  //     navigate("/login");
  //   };

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  if (loading) {
    return <Loading />;
  }

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger text-center">Error: {error?.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/home");
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

  return (
    <div className="container">
      <PageTitle title="Register"></PageTitle>

      <h2 className="text-center text-primary my-4">Register</h2>
      <form onSubmit={handleRegister} className="register-form">
        <input type="text" name="text" placeholder="Your Name" id="" />
        <input type="email" placeholder="Your Email" name="email" id="" />
        <input type="password" name="password" placeholder="Password" id="" />
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          className={agree ? "ps-2 text-primary" : " ps-2 text-danger"}
          htmlFor="terms"
        >
          Accept Genius Car Terms and Conditions
        </label>
        {/* or */}
        {/* <label
          className={`ps-2 ${agree ? "text-primary" : "text-danger"}`}
          htmlFor="terms"
        >
          Accept Genius Car Terms and Conditions
        </label> */}
        {errorElement}
        <input
          disabled={!agree}
          className="btn btn-primary text-white mt-2"
          type="submit"
          value="Register"
        />
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
      <SocialLogin />
    </div>
  );
};

export default Register;
