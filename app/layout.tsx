import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const instrument = localFont({
  src: "./fonts/InstrumentSans-Variable.woff2",
  weight: "400 700",
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MEPTOR — HR that cares. Systems that scale.",
  description:
    "Trusted HR consulting, recruitment, compliance and people-system services for organisations in India and the GCC.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.meptor.com"),
  openGraph: {
    title: "MEPTOR — HR solutions that care",
    description:
      "Build stronger teams, reduce hiring time and run compliant, scalable HR systems for your organisation in India and the GCC.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrument.variable}>
      <body>{children}</body>
    </html>
  );
}
