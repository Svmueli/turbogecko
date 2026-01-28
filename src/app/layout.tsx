import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "UnlinkedSEO | SEO & Web Development Agency",
  description: "Performance-Driven SEO & Web Development through AI-powered strategies.",
  // Next.js automatically detects favicon.ico in the /app folder, 
  // but you can still be explicit if you prefer:
  icons: {
    icon: "/favicon.ico",
  },
};

// This makes mobile browser bars match your brand green #6DBE45
export const viewport = {
  themeColor: "#6DBE45",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Bootstrap JS Bundle */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          async
        />
      </body>
    </html>
  );
}