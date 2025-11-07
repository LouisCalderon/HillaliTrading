import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Hillali Trading Community",
  description: "Join the Hillali Trading Community for funding opportunities, trading indicators, and personalized mentorship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${dmSans.variable} font-sans antialiased min-h-screen flex flex-col scroll-smooth`}
        style={{
          scrollPaddingTop: '80px',
          background: 'linear-gradient(135deg, #C71585 0%, #32127A 35%, #6F00FF 100%)',
          backgroundAttachment: 'fixed'
        }}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
