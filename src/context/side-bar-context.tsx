"use client";

import React, { ReactNode, useState } from "react";

interface SideBarContextInterface {
   active: boolean;
   toggle: () => void;
   open: () => void;
   close: () => void;
}

export const SideBarContext = React.createContext<SideBarContextInterface | null>(null);

export default function SideBarContextProvider({ children }: { children: ReactNode }) {

   const [active, setActive] = useState<boolean>(false);

   const initialState = {
      toggle: () => setActive(prev => !prev),
      open: () => setActive(true),
      close: () => setActive(false),
   }

   return (
      <SideBarContext.Provider value={{ ...initialState, active }}>
         {children}
      </SideBarContext.Provider>
   );
}