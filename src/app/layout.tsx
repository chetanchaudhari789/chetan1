import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Navbar from "@/components/Navbar";
import DarkModeProvider from "@/context/DarkModeContext";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import ConditionalFooter from "./ConditionalFooter";
import Provider from "@/context/Provider";

export const metadata: Metadata = {
  title: "Chetan",
  description:
    "Chetan Chaudhari is a Full Stack Developer specializing in building impactful web applications from scratch. Explore his portfolio to see my projects and skills.",
  keywords:
    "Chetan Chaudhari, Full Stack Developer, Web Developer, Portfolio, JavaScript, TypeScript, React, Node.js, software engineer",
  authors: [{ name: "Chetan Chaudhari" }],
  openGraph: {
    title: "Chetan",
    description:
      "Explore the portfolio of Chetan Chaudhari, showcasing innovative web applications and development skills.",
    url: "https://chetan-black.vercel.app/",
    siteName: "Chetan",
    images: [
      {
        url: "https://res.cloudinary.com/dmjhog62o/image/upload/v1744013188/success_baugfu.jpg",
        width: 400,
        height: 200,
        alt: "Chetan",
      },
    ],
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
      <Provider>
        <DarkModeProvider>
          <body className={`bg-white dark:bg-black`}>
            <Toaster position="bottom-right" />
            <Theme className="dark:!bg-black">
              <Navbar />
              {children}
              <Analytics />
              <ConditionalFooter />
            </Theme>
          </body>
        </DarkModeProvider>
      </Provider>
    </html>
  );
}
