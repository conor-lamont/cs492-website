import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WaterlooWorks Survey",
  description: "Prajval and Conor's CS492 Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="full">{children}</body>
    </html>
  );
}
