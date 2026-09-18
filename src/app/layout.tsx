import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const marigny = localFont({
  variable: "--font-heading",
  src: [
    { path: "../../public/font marigny/Marigny-Thin.woff2", weight: "100", style: "normal" },
    { path: "../../public/font marigny/Marigny-ThinItalic.woff2", weight: "100", style: "italic" },
    { path: "../../public/font marigny/Marigny-Book.woff2", weight: "400", style: "normal" },
    { path: "../../public/font marigny/Marigny-BookItalic.woff2", weight: "400", style: "italic" },
    { path: "../../public/font marigny/Marigny-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/font marigny/Marigny-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../../public/font marigny/Marigny-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/font marigny/Marigny-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../../public/font marigny/Marigny-Black.woff2", weight: "900", style: "normal" },
    { path: "../../public/font marigny/Marigny-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
});

const skPayidar = localFont({
  variable: "--font-body",
  src: [
    { path: "../../public/font payidar/SKPayidar-Thin.woff2", weight: "100", style: "normal" },
    { path: "../../public/font payidar/SKPayidar-ThinItalic.woff2", weight: "100", style: "italic" },
    { path: "../../public/font payidar/SKPayidar-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/font payidar/SKPayidar-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../../public/font payidar/SKPayidar-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/font payidar/SKPayidar-Italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/font payidar/SKPayidar-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/font payidar/SKPayidar-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../../public/font payidar/SKPayidar-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/font payidar/SKPayidar-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Ameeco | NYC Style Cookies & Italian Gelato in Gurgaon",
    template: "%s | Ameeco",
  },
  description:
    "Gooey NYC-style cookies and creamy Italian gelato, made fresh daily. Ameeco opens at The Galleria, Gurgaon on September 25, 2026 - join the list.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${marigny.variable} ${skPayidar.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
