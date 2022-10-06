import React from "react";
import Lottie from "react-lottie";
import animation from "./notfound.json";

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie style={{ height: "100vh" }} options={defaultOptions} />
    </div>
  );
};

export default NotFound;
