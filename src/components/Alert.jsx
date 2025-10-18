import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, AlertTriangle, X } from "lucide-react";

const icons = {
  success: <CheckCircle className="text-green-500 w-6 h-6" />,
  error: <XCircle className="text-red-500 w-6 h-6" />
};

const bgColors = {
  success: "bg-green-100 border-green-500",
  error: "bg-red-100 border-red-500"
};

export default function Alert({ type = "success", message, show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 120 }}
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md rounded-xl border-l-4 p-4 shadow-md flex items-center justify-between ${bgColors[type]}`}
        >
          <div className="flex items-center gap-3">
            {icons[type]}
            <span className="text-gray-800 font-medium">{message}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 cursor-pointer rounded-full hover:bg-gray-200 transition"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
