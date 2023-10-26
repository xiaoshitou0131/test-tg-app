"use client";
import React, { useEffect, useRef, useState } from "react";
import VConsole from 'vconsole';

export default function Sign() {

  useEffect(() => {
    const vConsole = new VConsole({ theme: 'dark' });
    console.log(window.Telegram);
  }, [])

  return (
    <h1>TG SDK</h1>

  );
}
