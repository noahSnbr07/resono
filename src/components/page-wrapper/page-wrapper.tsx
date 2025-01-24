"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import React, { CSSProperties, ReactNode } from "react";
import SideBarLink from "./components/side-bar-link";
import Navbar from "./components/navbar";

interface PageWrapperProps {
   children?: ReactNode;
   header?: ReactNode;
   stylesheet?: CSSProperties;
   title?: string;
}

export default function PageWrapper({ children, header, stylesheet, title }: PageWrapperProps) {

   const path = usePathname();

   return (
      <motion.div className="flex flex-col size-full">
         <header className="bg-stack flex p-4 gap-4 items-center">
            <SideBarLink />
            {title && <p className="font-bold text-md text-brighten"> {title} </p>}
            {header}
         </header>

         <AnimatePresence mode="wait">
            <motion.div
               style={stylesheet}
               key={path}
               initial={{ x: "-100%" }}
               animate={{ x: 0, opacity: 1, transition: { type: "tween" } }}
               exit={{ x: "100%" }}
               transition={{ duration: 1 }}
               className="flex-1"
            >
               {children}
            </motion.div>
         </AnimatePresence>

         <Navbar />
      </motion.div>
   );
}