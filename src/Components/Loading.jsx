import React from "react";
import ReactLoading from "react-loading";
function Loading({ type, color }) {
  return (
    <div className="flex items-center justify-center h-96 max-h-screen">
      <ReactLoading type={type} color={color} height={100} width={100} />
    </div>
  );
}

export default Loading;
