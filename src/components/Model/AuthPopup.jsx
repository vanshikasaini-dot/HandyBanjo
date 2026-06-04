import { motion } from "framer-motion";
import { CheckCircle2, XCircle, X } from "lucide-react";

export default function AuthPopup({ isOpen, type, title, message, onClose }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-lg px-4"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
        }}
        className="relative w-full max-w-md overflow-hidden rounded-[35px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_0_50px_rgba(255,255,255,0.15)]"
      >
        {/* Top Border */}
        <div
          className={`absolute top-0 left-0 w-full h-1 ${
            type === "success" ? "bg-green-400" : "bg-red-400"
          }`}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/70 hover:text-white transition cursor-pointer"
        >
          <X size={24} />
        </button>

        <div className="p-8 text-center">
          {/* Title + Icon */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            {type === "success" ? (
              <CheckCircle2 size={34} className="text-green-400" />
            ) : (
              <XCircle size={34} className="text-red-400" />
            )}

            <h2 className="text-3xl font-bold text-white">{title}</h2>
          </motion.div>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-lg leading-relaxed"
          >
            {message}
          </motion.p>

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={onClose}
            className={`mt-8 w-full h-14 rounded-2xl font-semibold text-white transition-all duration-300 ${
              type === "success"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            Continue
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
