"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import React, { CSSProperties, ReactNode } from "react";

interface PageWrapperProps {
   children?: ReactNode;
   header?: ReactNode;
   stylesheet?: CSSProperties;
}

export default function PageWrapper({ children, header, stylesheet }: PageWrapperProps) {

   const path = usePathname();

   return (
      <motion.div className="flex flex-col size-full">
         <header className="bg-stack flex p-4 gap-4">{header}</header>

         <AnimatePresence mode="wait">
            <motion.div
               style={stylesheet}
               key={path}
               initial={{ x: "-100%" }}
               animate={{ x: 0, transition: { type: "tween" } }}
               exit={{ x: "100%" }}
               transition={{ duration: 0.1 }}
               className="flex-1"
            >
               {children}
            </motion.div>
         </AnimatePresence>

         <footer className="bg-stack p-4 gap-4 flex justify-evenly">footer</footer>
      </motion.div>
   );
}