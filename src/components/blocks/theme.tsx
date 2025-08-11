"use client";

import { IconMoon, IconSun } from "@intentui/icons";
import { useTheme } from "next-themes";

export default function Theme() {
    const { theme, setTheme } = useTheme();

    return (
      <div className="fixed bottom-6 right-8 z-50 flex items-center">
        <div className="text-sm hover:cursor-pointer hover:bg-neutral-400/20 hover:text-neutral-950 rounded-full">
            <button
              className="p-3 rounded-full"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {theme === "dark" ? (
                    <IconSun className="w-4 h-4 !text-neutral-200" />
                ) : (
                    <IconMoon className="w-4 h-4 !text-neutral-800 dark:!text-neutral-100" />
                )}
            </button>
        </div>
      </div>
    );
  }