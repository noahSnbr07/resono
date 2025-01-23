"uas client";

import { SideBarContext } from "@/context/side-bar-context";
import { useContext } from "react";

export default function useSideBar() {
   const context = useContext(SideBarContext);
   if (!context) throw Error("use hooks within their providers");
   return context;
}