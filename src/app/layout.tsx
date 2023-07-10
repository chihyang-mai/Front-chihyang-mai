import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "../theme";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";
import Theme from "@/components/Theme";
import ReactQuery from "@/components/ReactQuery";
import Recoil from "@/components/Recoil";
import { Box, Button } from "@mui/material";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReactQuery>
        <Recoil>
          <Theme>
            {/* <Box sx={{ minWidth: "1920px" }}> */}

            <body>
              <Header />
              {children}
            </body>
            {/* </Box> */}
          </Theme>
        </Recoil>
      </ReactQuery>
    </html>
  );
}
