import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tauri PW Manager",
  description: "password manager tool created by Tauri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
