import React from "react";
import Lottie from "lottie-react";
import loading from "../../assets/loading.json";

interface DefaultLoadingProps {
  width?: string;
  height?: string;
}
const DefaultLoading: React.FC<DefaultLoadingProps> = ({ width, height }) => {
  return (
    <Lottie
      animationData={loading}
      width={width || "42px"}
      height={height || "42px"}
      loop={true}
    />
  );
};

export default DefaultLoading;
