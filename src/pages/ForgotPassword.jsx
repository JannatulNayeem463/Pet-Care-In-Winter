import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Prefill email from login page if available
  const initialEmail = location.state?.email || "";
  const [email, setEmail] = useState(initialEmail);

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");

      // ✅ Redirect user to Gmail
      window.location.href = "https://mail.google.com";
    } catch (error) {
      console.error("Reset error:", error.message);
      alert("Something went wrong. Please check the email address.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md p-8 rounded-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        <form onSubmit={handleReset}>
          <label className="block mb-2 font-medium text-gray-700">Enter your email</label>
          <input
            type="email"
            className="input input-bordered w-full mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
