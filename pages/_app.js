import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
