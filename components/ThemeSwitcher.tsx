"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
// import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
// import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { FiSun ,} from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";


function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null; // avoid rehydration errors
  console.log('theme',theme)
  return (
    <>
    {theme === 'light' ? (
      <IoMoonOutline 
        className="h-[1.2rem] w-[1.2rem] cursor-pointer"
        onClick={() => setTheme("dark")}
      />
    ) : (
      <FiSun 

        className="h-[1.2rem] w-[1.2rem] cursor-pointer"
        onClick={() => setTheme("light")}
        />
        
      )}
    </>
  );
}

export default ThemeSwitcher;
