import React from "react";
import { RingLoader } from "react-spinners";

const Overlay = () => {
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    color: "white",
  };

  return (
    <div style={overlayStyle}>
      <RingLoader color="blue" />
    </div>
  );
};

export default Overlay;
