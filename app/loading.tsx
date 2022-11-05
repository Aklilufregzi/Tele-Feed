import React from "react";
import Navbar from "./navbar";
import styles from "./spin.module.css";

function loading() {
  return [1, 2, 3].map((num) => (
    <div className="m-32">
      <div className="bg-white rounded w-full mx-auto rounded-2xl shadow-lg">
        <div className="bg-gray-200 h-48 p-3 overflow-hidden animate-pulse"></div>
        <div className="h- p-3">
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div className="h-8 bg-gray-400 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-400 rounded animate-pulse"></div>
            <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse"></div>
            <div className=" h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="..."></div>
            <div className="col-span-2 ..."></div>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default loading;
