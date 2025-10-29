import "../(root)/globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "My Projects",
  description: "You can find here all my projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
