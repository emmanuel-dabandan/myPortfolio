"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SmoothToggleBtn from "@/components/SmoothToggleBtn";

const AppShell = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="grid md:grid-cols-[140px_auto] gap-3 h-screen animated-gradient">
      <SmoothToggleBtn {...{ toggle, setToggle }} />
      <Navbar toggle={toggle} setToggle={setToggle} />
      <main className="overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default AppShell;
