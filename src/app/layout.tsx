import type { Metadata } from "next";

import "./globals.css";
export const metadata: Metadata = {
  title: "Resono",
  description: "Listen to community-driven media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}