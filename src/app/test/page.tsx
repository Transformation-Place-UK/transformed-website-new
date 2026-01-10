import * as motion from "motion/react-client"

export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        className="w-32 h-32 bg-blue-500 flex items-center justify-center text-white font-bold"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      > Rotating Box</motion.div>
    </div>
  );
}
