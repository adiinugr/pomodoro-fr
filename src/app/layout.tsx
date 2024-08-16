import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss"
import Script from "next/script";
// ** Context
import { SidebarProvider } from "@/context/SidebarContext"
import { TimerSettingProvider } from "@/context/TimerSettingContext"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Aesthetic Timer Online",
  description: "Enjoy our online timer with an aesthetic visual countdown, it has beautiful and minimalis UI for progress bar and timer circle. Set time intervals on the screen and click start.",
   alternates: {
      canonical: `https://aesthetictimer.com/`,
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SidebarProvider>
        <TimerSettingProvider>
          <body className={poppins.className}>
            <main className={`overflow-hidden`}>
              {children}
            </main>
          </body>
        </TimerSettingProvider>
      </SidebarProvider>
    </html>
  );
}
