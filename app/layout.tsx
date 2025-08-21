import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
//NEXT_PUBLIC_
//Prefix appended to environment variables that are available on the client side. eg. `NEXT_PUBLIC_` or `VITE_PUBLIC_`. Defaults to `NEXT_PUBLIC_`.
