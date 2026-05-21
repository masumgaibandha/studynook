import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "StudyNook - Find Your Perfect Study Space",
  description:
    "Discover and book the ideal study space with StudyNook. Whether you need a quiet corner in a library, a cozy café, or a collaborative workspace, StudyNook connects you with the best options in your area. Find your perfect study spot today!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
        <body className="min-h-full flex flex-col [font-family:var(--font-inter)]">
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
