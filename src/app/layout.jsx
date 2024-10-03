import RootLayout from "@/components/RootLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: {
    template: "triangle",
    default: "triangle",
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
