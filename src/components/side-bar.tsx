"use client";

import { CSSProperties } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import useSideBar from "@/hooks/use-side-bar";
import Image from "next/image";
import { icon } from "@/assets/assets";

export default function Sidebar() {

   const { active, close } = useSideBar();

   const stylesheet: CSSProperties = {
      background: "rgba(0, 0, 0, .5)",
      position: "absolute",
      backdropFilter: `blur(${8}px)`,
   }

   return (
      <AnimatePresence mode="wait">
         {active && (
            <motion.div
               onClick={close}
               transition={{ type: "tween" }}
               initial={{ x: "-100%" }}
               animate={{ x: 0 }}
               className="size-full flex"
               style={stylesheet}>
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
                  <div className="flex-1 flex flex-col p-4 gap-4">

                  </div>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}