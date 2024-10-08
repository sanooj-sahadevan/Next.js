import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next js By Sanooj Sahadevan",
  description: " Heloo All, This Is Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>

        <header style={{backgroundColor:"green",padding:"10px"}}>

          <h1>Header</h1>
        </header>

        {children}

        <footer style={{backgroundColor:"yellow",padding:"10px"}} >

          <h1 >Footer</h1>
        </footer>
      </body>

    </html>
  );
}
