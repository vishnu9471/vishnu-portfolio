import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageShell({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28">{children}</main>
      <Footer />
    </>
  );
}
