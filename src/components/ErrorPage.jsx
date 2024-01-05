import React from "react";
import errorImg from "../assets/error.jpg";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center relative h-[70vh] font-bold text-xl text-white">
      <img src={errorImg} className="h-full " />

      <div className="absolute text-black/[0.5] bottom-10 text-center text-2xl ">
        <p>Something Went Wrong</p>
        <p>Please Check Your Internet Connection</p>
      </div>
    </div>
  );
}

export default ErrorPage;
