import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Thomas Van der Molen",
  description: "Portfolio website of Thomas Van der Molen",
  icons: {
    icon: [
      { url: "/meta/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/meta/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/meta/apple-touch-icon.png",
    other: [
      { rel: "mask-icon", url: "meta/safari-pinned-tab.svg", color: "#333333" },
    ]
  },
  manifest: "/meta/site.webmanifest"
};

export const viewport: Viewport = {
  themeColor: "#09090b",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
