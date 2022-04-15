import React from "react";
import google from "../../../images/google.png";
import facebook from "../../../images/facebook.png";
import github from "../../../images/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  if (loading || loading1) {
    return <Loading />;
  }

  let errorElement;
  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-danger text-center">
          Error: {error?.message} {error1?.message}
        </p>
      </div>
    );
  }

  if (user || user1) {
    navigate("/");
  }

  return (
    <div className="container">
      <div className="d-flex align-items-center w-50 mx-auto">
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className=" btn btn-outline-primary d-block mx-auto my-3"
        >
          <img src={google} alt="" />
          <span className="px-2">Sign in with Google</span>
        </button>
        <button className=" btn btn-outline-dark d-block mx-auto my-3">
          <img src={facebook} alt="" />
          <span className="px-2">Sign in with Facebook</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className=" btn btn-outline-secondary d-block mx-auto my-3"
        >
          <img src={github} alt="" />
          <span className="px-2">Sign in with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
