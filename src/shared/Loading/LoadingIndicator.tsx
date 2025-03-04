import React from "react";
import Lottie from "lottie-react";
import loading from "../../assets/loading.json";

interface LoadingIndicatorProps {
  height?: string;
}

const LoadingIndicator = (props: LoadingIndicatorProps) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        minHeight: props.height ? props.height : "250px",
      }}
    >
      <Lottie
        animationData={loading}
        style={{ alignSelf: "center", width: "50px" }}
        size={5}
      />
    </div>
  );
};

export default LoadingIndicator;
