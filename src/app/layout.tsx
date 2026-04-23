import "./globals.css";

import type { Metadata } from "next";

import { pretendard } from "../styles/fonts";

export const metadata: Metadata = {
  title: "basekite",
  description: "KBO Baseball Stadium Information Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} h-full`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col font-sans antialiased">{children}</body>
    </html>
  );
}
