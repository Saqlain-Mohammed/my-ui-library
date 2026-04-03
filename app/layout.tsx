import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// This automatically fetches the Inter font for us
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My UI Library",
  description: "A custom UI component library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}