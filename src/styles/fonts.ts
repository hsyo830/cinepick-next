import localFont from "next/font/local";

export const pretendard = localFont({
  src: "../assets/fonts/pretendard/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "100 900",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});
