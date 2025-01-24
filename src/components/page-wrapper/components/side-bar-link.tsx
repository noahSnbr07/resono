"use client";

import { icon } from "@/assets/assets";
import useSideBar from "@/hooks/use-side-bar";
import Image from "next/image";

export default function SideBarLink() {
   const { open } = useSideBar();

   return (
      <Image
         onClick={open}
         src={icon}
         alt="Sidebar toggle"
         title="Sidebar toggle"
         height={32}
         width={32}
         priority
         draggable={false}
      />
   );
}