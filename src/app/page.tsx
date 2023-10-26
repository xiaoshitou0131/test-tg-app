"use client";
import React, { useEffect, useRef, useState } from "react";


// const vConsole = new VConsole();
export default function Sign() {

  const [tgData, setTgData] = useState({});

  useEffect(() => {
    
    console.log(window.Telegram);
    setTgData(window.Telegram);
  }, [])

  return (
    <div>
      <h1>TG SDK</h1>
      {JSON.stringify(tgData)}
    </div>
    
    
  );
}
