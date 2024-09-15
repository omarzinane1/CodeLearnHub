import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "",
  description: "Aluminium",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} font-SwmIcon bg-black text-slate-400 text-lg min-h-screen overflow-x-hidden`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
