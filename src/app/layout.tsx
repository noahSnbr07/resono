import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/side-bar";
import SideBarContextProvider from "@/context/side-bar-context";

export const metadata: Metadata = {
  title: "Resono",
  description: "Listen to community-driven media",
  creator: "noahsnbr07",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html translate="no" lang="en">
      <body>
        <SideBarContextProvider>
          <>
            <Sidebar />
            {children}
          </>
        </SideBarContextProvider>
      </body>
    </html>
  );
}