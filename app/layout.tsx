import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Shawn Legend - Professional Hair Stylist",
  description: "Professional hair stylist with over 20 years of experience in cutting, styling, coloring, and more. View my portfolio and book your appointment today.",
  keywords: ["hair stylist", "hair cutting", "hair coloring", "salon", "beauty", "hair styling"],
  openGraph: {
    title: "Shawn Legend - Professional Hair Stylist",
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
      <body className={`${raleway.variable} font-sans antialiased`}>
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
