import React from "react";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";
import {useTheme} from "next-themes";

export default function mdoscuro() {
    const { theme, setTheme } = useTheme()

  const handleThemeChange = (event) => {
    const newTheme = event.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
  
    
    <Switch
      checked={theme === 'dark'}
      onChange={handleThemeChange}
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        )
      }
    >
    </Switch>
  
  );
}
