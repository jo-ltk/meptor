import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEPTOR — HR that cares",
  description: "HR solutions that care. MEPTOR — Kochi · GCC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
