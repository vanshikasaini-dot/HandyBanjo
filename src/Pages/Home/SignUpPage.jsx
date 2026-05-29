import { useState } from "react";
import { Mail, Lock, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import bgVideo from "../../assets/vdo.mp4";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple signup (demo)
    alert("Signup Successful");

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-10">

      {/* BACKGROUND */}
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      {/* CARD */}
      <div className="relative z-20 w-full max-w-[420px] rounded-[30px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-6 sm:p-8">

        {/* LOGO */}
        <div className="mx-auto mb-6 flex items-center justify-center w-[75px] h-[75px] rounded-[25px] bg-red-500 text-white">
          <Sparkles size={38} />
        </div>

        {/* TITLE */}
        <h2 className="text-center text-white font-bold text-3xl">
          Create Account
        </h2>

        <p className="text-center text-gray-200 mt-2 mb-6">
          Signup to continue
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit}>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="text-white mb-2 block">Email</label>

            <div className="flex items-center rounded-xl overflow-hidden bg-white/20 border border-white/20">
              <span className="px-4 text-white">
                <Mail size={18} />
              </span>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter email"
                className="w-full h-[50px] bg-transparent outline-none text-white placeholder:text-gray-300 px-2"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="text-white mb-2 block">Password</label>

            <div className="flex items-center rounded-xl overflow-hidden bg-white/20 border border-white/20">
              <span className="px-4 text-white">
                <Lock size={18} />
              </span>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter password"
                className="w-full h-[50px] bg-transparent outline-none text-white placeholder:text-gray-300 px-2"
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            className="w-full h-[52px] rounded-[14px] font-bold text-white bg-red-500 hover:bg-red-600 transition"
          >
            Signup
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="text-center text-white mt-5">
          Already have an account ?
          <Link to="/login" className="text-red-400 ml-2">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}