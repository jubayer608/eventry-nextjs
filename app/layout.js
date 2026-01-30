import { Inter } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";
import { dbConnect } from "@/services/mongo";
import AuthProvider from "./providers/AuthProvider";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Eventry - Home",
  description: "A single entry to connected to all the online events from the globe.",
}; 

export default async function RootLayout({ children }) {
  await dbConnect()
  return (
    <html lang="en" className={inter.className}>
      <body >
        <AuthProvider>
          <Navbar></Navbar>
          <main className="py-8">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
