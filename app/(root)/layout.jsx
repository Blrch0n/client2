import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <section className="text-black bg-[#f8f8f8] ">
      <Toaster
        position="top-left"
        toastOptions={{
          style: {
            fontFamily: "Roboto,sans-serif",
            fontSize: "13px",
            background: "#333",
            color: "#fff",
            borderRadius: "8px",
          },
        }}
      />
      <Header />
      {children}
      <Footer />
    </section>
  );
}
