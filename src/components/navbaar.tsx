"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./modeToggle";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-2xl mx-5 md:mx-auto z-50 flex items-center justify-center gap-4", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://studycompanion-nu.vercel.app">AI Study Companion</HoveredLink>
            <HoveredLink href="https://content-broadcast-teal.vercel.app/">EduBroadcast</HoveredLink>
            <HoveredLink href="https://gymwebsite-0jz3.onrender.com/">Gym Website</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Socials">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://github.com/veerrai007" target="_blank">Github</HoveredLink>
            <HoveredLink href="https://www.instagram.com/veerrai007/" target="_blank">Instagram</HoveredLink>
            <HoveredLink href="https://www.linkedin.com/in/veer-singh-6bb56224a/" target="_blank">Linkedin</HoveredLink>
            <HoveredLink href="https://x.com/veerrai007" target="_blank">Twitter</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
      <ModeToggle />
    </div>
  );
}
