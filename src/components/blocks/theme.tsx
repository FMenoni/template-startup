"use client";

import { IconMoon, IconSun } from "@intentui/icons";
import { useTheme } from "next-themes";

export default function Theme() {
    const { theme, setTheme } = useTheme();

    return (
      <div className="pointer-events-auto flex items-center">
        <button
          className="text-sm hover:cursor-pointer hover:bg-neutral-400/20 hover:text-neutral-950 rounded-full p-3"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? (
                <IconSun className="w-4 h-4 !text-neutral-200" />
            ) : (
                <IconMoon className="w-4 h-4 !text-neutral-800 dark:!text-neutral-100" />
            )}
        </button>
      </div>
    );
  }