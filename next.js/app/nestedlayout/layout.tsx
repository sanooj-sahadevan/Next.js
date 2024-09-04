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

        {/* <header style={{backgroundColor:"green",padding:"10px"}} >
          <h1>Header</h1>
        </header> */}

        {children}

        <h2>Nested Loyout</h2>
        <h3>Nested Loyout</h3>
        <h4>Nested Loyout</h4>
        <h5>Nested Loyout</h5>

        {/* <footer>

          <h1 className="bg-black-500 w-24 h-24" >Footer</h1>
        </footer> */}
      </body>

    </html>
  );
}
