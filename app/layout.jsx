import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster"
import Head from 'next/head';
import Analytics from "./Analytics";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "Pushpak.",
  description: "Pushpak's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        {/* for user footprints i have used google analytics.*/}
        <Analytics/>
        <Header />
        {/* <StairTransition></StairTransition> */}
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  );
}
