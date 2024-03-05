
import "./globals.css";
import Navbar from "@/components/Navbar";
// import { Great_Vibes } from 'next/font/google'
// const dancing_script = Great_Vibes({
//     weight: '400',
//     subsets: ['latin'],
//   })


export const metadata = {
  title: "Rareplanetluxe",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}</body>
    </html>
  );
}
