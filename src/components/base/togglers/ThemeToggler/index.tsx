"use client"

import * as React from "react"
import { Moon, Sun, Monitor, Palette, Zap, Sunset } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const themes = [
    { value: "light", label: "Light", icon: Sun, description: "Clean and bright" },
    { value: "dark", label: "Dark", icon: Moon, description: "Easy on the eyes" },
    { value: "blue", label: "Blue", icon: Palette, description: "Professional blue" },
    { value: "purple", label: "Purple", icon: Zap, description: "Creative purple" },
    { value: "sunset", label: "Sunset", icon: Sunset, description: "Warm sunset" },
    { value: "system", label: "System", icon: Monitor, description: "Follow system" },
  ];

  const currentTheme = themes.find(t => t.value === theme) || themes[1];

  if (!mounted) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <currentTheme.icon className="h-[1.2rem] w-[1.2rem] transition-all duration-200" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="text-xs text-muted-foreground">
            Choose Theme
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {themes.map((themeOption) => (
            <DropdownMenuItem
              key={themeOption.value}
              onClick={() => setTheme(themeOption.value)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <themeOption.icon className="h-4 w-4" />
              <div className="flex flex-col">
                <span className="font-medium">{themeOption.label}</span>
                <span className="text-xs text-muted-foreground">{themeOption.description}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
