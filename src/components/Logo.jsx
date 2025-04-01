import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div style={{ width }}>
      <img
        className="rounded-3xl"
        src="/public/pexels-pixabay-262508.jpg"
        alt=""
      />
    </div>
  );
}

export default Logo;
