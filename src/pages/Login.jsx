import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState(""); // 🔥 ইমেইল স্টেট

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Trying to login with:", email, password);

    signIn(email, password)
      .then((result) => {
        console.log("Login successful:", result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Firebase Login Error:", error.code, error.message);
        alert(`${error.code}: ${error.message}`);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login Your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} // 🔥 email ধরে রাখে
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <Link
                className="link link-hover text-blue-600"
                to="/auth/forgot-password"
                state={{ email }} // ✅ 🔥 স্টেট দিয়ে ইমেইল পাঠানো হচ্ছে
              >
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

            <p className="font-semibold text-center pt-5">
              Don't have an account?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
