import Footer from "../components/Footer";
import Header from "../components/Header";

export default function RootLayout({ children }) {
  return (
    <section className="text-black">
      <Header />
      {children}
      <Footer />
    </section>
  );
}
