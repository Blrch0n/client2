import Footer from "./components/Footer";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <section className="text-black bg-[#f8f8f8] ">
      <Header />
      {children}
      <Footer />
    </section>
  );
}
