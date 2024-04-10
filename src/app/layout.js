import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/compnents/Footer/Footer";
import Navbar from "@/app/compnents/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"next app Home Page",
    template:"%s | Next js 14"
  },
  description: "blog | next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <div className="min-h-[100vh] flex flex-col justify-between bg-[#0d0c22]">

        <div>
        <Navbar/>
        </div>
        <div>

        {children}
        </div>
        <div className="bg-red-800">

        <Footer/>
        </div>
        </div>
        </body>
    </html>
  );
}
