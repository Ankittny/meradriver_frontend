"use client";

import React, { useEffect } from "react";
import Home from "@/components/Home";

const Page = () => {
  useEffect(() => {
    // Ensure this runs only in the browser (after the component is mounted)
    const element = document.querySelector("#my-element");
    if (element) {
      console.log("Document element:", element);
    }
  }, []); // Empty dependency array ensures this runs only once after mounting

  return (
    <div>
      <Home />
    </div>
  );
};

export default Page;
