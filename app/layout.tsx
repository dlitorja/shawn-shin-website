import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shawn Shin - Professional Hair Stylist",
  description: "Professional hair stylist with over 20 years of experience in cutting, styling, coloring, and more. View my portfolio and book your appointment today.",
  keywords: ["hair stylist", "hair cutting", "hair coloring", "salon", "beauty", "hair styling"],
  openGraph: {
    title: "Shawn Shin - Professional Hair Stylist",
    description: "Professional hair stylist with over 20 years of experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
