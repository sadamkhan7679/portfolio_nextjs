import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import {ThemeProvider} from "@/components/shared/Provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sadam's Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      </body>
      </html>
  );
}