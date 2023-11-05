import React from "react";
import preloader from "../../assets/preloader.gif";

export default function Preloader() {
  return (
    <div>
      <img src={preloader} alt="preloader" />
    </div>
  );
}
