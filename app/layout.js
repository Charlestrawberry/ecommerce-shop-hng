import { Montserrat } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterItems from "@/components/FooterItems";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header2 from "@/components/Header2";

const monts = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monts.variable}>
        <Header2 />
        {children}
        <Footer />

        <FooterItems />
      </body>
    </html>
  );
}
