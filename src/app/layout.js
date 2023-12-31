import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/UI/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Density",
  description: "Density intern task -23",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
