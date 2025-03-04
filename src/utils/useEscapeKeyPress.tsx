import { useEffect } from "react";

const useEscapeKeyPress = (callback: () => void) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Esc" || event.keyCode === 27) {
        callback();
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("keydown", handleKeyPress);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [callback]); // Re-run the effect if the callback function changes
};

export default useEscapeKeyPress;
