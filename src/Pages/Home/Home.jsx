import { useState } from "react";
import { Mail, Lock, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/dashboard");
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        relative
        overflow-hidden
        px-4
        py-10
        bg-white
      "
    >
      {/* Glow Left */}
      <div
        className="
          absolute
          w-[220px]
          h-[220px]
          md:w-[300px]
          md:h-[300px]
          rounded-full
          bg-amber-300
          opacity-20
          blur-[120px]
          top-[-80px]
          left-[-50px]
        "
      />

      {/* Glow Right */}
      <div
        className="
          absolute
          w-[200px]
          h-[200px]
          md:w-[250px]
          md:h-[250px]
          rounded-full
          bg-orange-300
          opacity-20
          blur-[120px]
          bottom-[-80px]
          right-[-50px]
        "
      />

      {/* Login Card */}
      <div
        className="
          relative
          z-20
          w-full
          max-w-[420px]
          rounded-[30px]
          border
          border-gray-200
          bg-white
          shadow-2xl
          p-6
          sm:p-8
          md:p-10
        "
      >
        {/* Logo */}
        <div
          className="
    mx-auto
    mb-6
    flex
    items-center
    justify-center
    w-[75px]
    h-[75px]
    sm:w-[85px]
    sm:h-[85px]
    rounded-[25px]
    bg-red-500
    text-white
  "
        >
          <Sparkles size={38} />
        </div>

        {/* Heading */}
        <h2
          className="
            text-center
            text-black
            font-bold
            text-3xl
            sm:text-4xl
          "
        >
          Welcome Back
        </h2>

        <p
          className="
            text-center
            text-gray-500
            mt-2
            mb-6
            text-sm
            sm:text-base
          "
        >
          Login to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="text-gray-700 mb-2 block">Email</label>

            <div
              className="
                flex
                items-center
                rounded-xl
                overflow-hidden
                bg-gray-100
                border
                border-gray-200
              "
            >
              <span className="px-4 text-gray-600">
                <Mail size={18} />
              </span>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter email"
                className="
                  w-full
                  h-[50px]
                  bg-transparent
                  outline-none
                  border-none
                  text-black
                  placeholder:text-gray-400
                  px-2
                "
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-gray-700 mb-2 block">Password</label>

            <div
              className="
                flex
                items-center
                rounded-xl
                overflow-hidden
                bg-gray-100
                border
                border-gray-200
              "
            >
              <span className="px-4 text-gray-600">
                <Lock size={18} />
              </span>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter password"
                className="
                  w-full
                  h-[50px]
                  bg-transparent
                  outline-none
                  border-none
                  text-black
                  placeholder:text-gray-400
                  px-2
                "
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
    w-full
    h-[52px]
    rounded-[14px]
    font-bold
    text-white
    transition-all
    duration-300
    bg-red-500
    hover:bg-red-600
    hover:scale-[1.02]
  "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
