"use client";

import { CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSideBar from "@/hooks/use-side-bar";
import Image from "next/image";
import { icon } from "@/assets/assets";
import sideBarLinks from "@/constants/side-bar-links";
import SideBarLinkEntry from "./side-bar-link-entry";
import { usePathname } from "next/navigation";

export default function Sidebar() {
   const { active, close } = useSideBar();

   const stylesheet: CSSProperties = {
      background: "rgba(0, 0, 0, .5)",
      position: "absolute",
      backdropFilter: `blur(${8}px)`,
   };

   const pathname = usePathname();

   return (
      <AnimatePresence mode="wait">
         {active && (
            <motion.div
               key={pathname}
               onClick={close}
               transition={{ type: "tween", duration: 0.25 }}
               initial={{ x: "-100%", opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               exit={{ x: "-100%", opacity: 0 }}
               className="size-full flex z-50"
               style={stylesheet}
            >
               <div className="w-2/3 bg-darken flex flex-col">
                  <div className="flex p-4 gap-4 items-center">
                     <Image
                        src={icon}
                        height={32}
                        width={32}
                        title="app logo"
                        alt="app logo"
                     />
                     <p className="font-bold text-lg opacity-50"> Sidebar </p>
                  </div>
                  <div className="flex-1 flex flex-col p-4">
                     {/* list all links */}
                     {sideBarLinks.map((link) => (
                        <SideBarLinkEntry
                           active={pathname === link.href}
                           key={link.id}
                           icon={link.icon}
                           href={link.href}
                           id={link.id}
                           title={link.title}
                        />
                     ))}
                  </div>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
