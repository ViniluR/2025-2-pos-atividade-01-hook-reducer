import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infoweb-Atividade",
  description: "Atividade 1 do 2o bimestre com hook reducer e shadcnui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        style={{backgroundColor: '#001326ff', color: '#EEE'}}
      >
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '1em' }}>
          <header style={{ marginBottom: '2em', padding: '1.5em', background: '#0e315cff', color: 'white', borderRadius: '.5em', boxShadow: '0 6px 18px #0004' }}>
            <h1 style={{ fontSize: '30px', textAlign: 'center', margin: 0 }}>Infoweb - Atividade 1 do 2o bimestre</h1>
          </header>
          <main style={{ flex: 1, padding: '1.5em', borderRadius: '.5em'}}>{children}</main>
          <footer style={{ marginTop: '2em', padding: '1.5em', background: '#00040aff', color: '#ddd', borderRadius: '.5em', fontSize: '14px', boxShadow: '0 6px 18px #0004' }}>
            <p>GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007</p>
            <p><a href="https://fsf.org/" style={{ color: '#ddd' }}>Copyright (C) 2007 Free Software Foundation, Inc.</a></p>
          </footer>
        </div>
      </body>
    </html>
  );
}
