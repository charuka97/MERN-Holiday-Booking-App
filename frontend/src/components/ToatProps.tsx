import { useEffect } from "react";

type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  // set timer for toast message
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    // clear timer
    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const styles =
    type === "SUCCESS"
      ? "fixed top-4 right-4 z-50 p-4 rounded-md bg-green-600 yexy-white max-w-md"
      : "fixed top-4 right-4 z-50 p-4 rounded-md bg-red-600 yexy-white max-w-md";

  return (
    <div className={styles}>
      <div className="flex items-center justify-center">
        <span className="text-lg font-semibold">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
