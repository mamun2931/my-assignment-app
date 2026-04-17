import { Geist } from "next/font/google";
import "./globals.css";
import NavBarPage from "./navbar/page";
import SocialPage from "./footer/page";
import ParsonProvider from "@/component/ParsonProvider";
import { ToastContainer } from "react-toastify";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "KeenKeeper by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme="light"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body>
        

          <NavBarPage></NavBarPage>
            <ParsonProvider>
              {children}
            </ParsonProvider>
          <SocialPage></SocialPage>
          <ToastContainer  position="top-center"/>

        

        </body>
    </html>
  );
}
