import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AsideMenu from "@/components/AsideMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Beats JR",
  description: "music beats jr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section id="grid" className="p-2 relative h-screen gap-2">

          <aside className="[grid-area:aside] flex-col flex overflow-y-auto">
            <AsideMenu />
          </aside>

          <main className="[grid-area:main] bg-zinc-900 overflow-y-auto w-full rounded-md">
            {children}
          </main>

          <footer className="[grid-area:player] h-[80px]">
            {/* <Player client:load transition:name="media-player" transition:persist /> */}
          </footer>

        </section>
      </body>
    </html>
  );
}
