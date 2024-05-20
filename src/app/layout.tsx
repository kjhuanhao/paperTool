import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI论文降重",
  description: "AI论文辅助工具",
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
