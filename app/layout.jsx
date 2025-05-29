import { Toaster } from "react-hot-toast";
import { CartProvider } from "./(root)/components/Cart/CartContext";
import "./globals.css";
import { Jost, Roboto } from "next/font/google";
import { OrderHistoryProvider } from "./(root)/components/ContextFile";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Client 2",
  description: "Hello, this is a client 2 app",
  icons: {
    icon: "/image.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className} ${roboto.className} antialiased`}>
        <OrderHistoryProvider>
          <CartProvider>
            <Toaster />
            {children}
          </CartProvider>
        </OrderHistoryProvider>
      </body>
    </html>
  );
}
