import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "300", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Jasper Diongco - Portfolio",
  description: "Jasper D. Portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={montserrat.variable}
      >
        {children}
      </body>
    </html>
  );
}
