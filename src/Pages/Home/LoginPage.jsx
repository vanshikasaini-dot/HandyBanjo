import { useState } from "react";
import { Mail, Lock, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Apis/authService";
import AuthPopup from "../../components/Model/AuthPopup";

import bgVideo from "../../assets/vdo.mp4";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [popup, setPopup] = useState({
    isOpen: false,
    type: "",
    title: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        email,
        password,
      });

      if (response?.token) {
        localStorage.setItem("token", response.token);

        setPopup({
          isOpen: true,
          type: "success",
          title: "Login Successful 🎉",
          message: "Welcome back! Redirecting to dashboard...",
        });

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        setPopup({
          isOpen: true,
          type: "error",
          title: "Login Failed",
          message: "Token not received from server",
        });
      }
    } catch (error) {
      setPopup({
        isOpen: true,
        type: "error",
        title: "Login Failed ❌",
        message: error?.response?.data?.message || "Invalid email or password",
      });
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-20 w-full max-w-[420px] rounded-[30px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-6 sm:p-8">
          <div className="mx-auto mb-6 flex items-center justify-center w-[75px] h-[75px] rounded-[25px] bg-red-500 text-white">
            <Sparkles size={38} />
          </div>

          <h2 className="text-center text-white font-bold text-3xl">
            Welcome Back
          </h2>

          <p className="text-center text-gray-200 mt-2 mb-6">
            Login to continue
          </p>

          <form onSubmit={handleSubmit}>
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

            <button
              type="submit"
              className="w-full h-[52px] rounded-[14px] font-bold text-white bg-red-500 hover:bg-red-600 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <AuthPopup
        isOpen={popup.isOpen}
        type={popup.type}
        title={popup.title}
        message={popup.message}
        onClose={() =>
          setPopup({
            isOpen: false,
            type: "",
            title: "",
            message: "",
          })
        }
      />
    </>
  );
}
