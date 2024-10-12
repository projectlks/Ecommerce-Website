import React from "react";
import { useNavigate } from "react-router";

export default function () {
  let navigate = useNavigate();
  return (
    <div>
      <i
        className="fa-regular fa-circle-left text-3xl  fixed top-3 left-3 cursor-pointer"
        onClick={() => navigate(-1)}
      ></i>
    </div>
  );
}
