import { LogOut } from "lucide-react";

export default function LogoutModal({ isOpen, onClose, onLogout }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 animate-in fade-in duration-300">
      <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-gray-100 animate-[popup_0.3s_ease-out]">
        <h2 className="text-2xl font-bold text-center mb-2">Confirm Logout</h2>

        <p className="text-gray-500 text-center mb-6">
          Are you sure you want to logout from your account?
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-gray-300 font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105"
          >
            Cancel
          </button>

          <button
            onClick={onLogout}
            className="flex-1 py-3 rounded-xl bg-red-500 text-white font-medium transition-all duration-300 hover:bg-red-600 hover:scale-105 active:scale-95"
          >
            Logout
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes popup {
            0% {
              opacity: 0;
              transform: scale(0.85) translateY(20px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
