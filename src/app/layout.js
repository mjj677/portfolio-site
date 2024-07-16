import { Inter } from "next/font/google";
import "./styles/globals.css";
import { ThemeProvider } from "./components/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matt Johnston's Portfolio Site",
  description: "Created with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
