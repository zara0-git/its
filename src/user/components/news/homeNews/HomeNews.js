import React from "react";

import AdviceCarousel from "user/components/adviceCarousel/AdviceCarousel";

export default function (props) {
  return (
    <div
      style={{
        borderBottom: "1px solid #1F77B4",
      }}
    >
      <div
        style={{
          backgroundColor: " rgba(51, 51, 51, 0.5)",
          width: " 100%",
          padding: "30px",
        }}
      >
        <AdviceCarousel />
      </div>
    </div>
  );
}
