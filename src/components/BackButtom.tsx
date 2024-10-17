import React from "react";
import { useNavigate } from "react-router";

export default function () {
  let navigate = useNavigate();
  return (
    <div className="absolute top-3 left-3">
      <i
        className="fa-regular fa-circle-left text-3xl   cursor-pointer"
        onClick={() => navigate(-1)}
      ></i>
    </div>
  );
}
