import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Cases from "@/pages/Cases";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import Appointment from "@/pages/Appointment";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { SubscribeButton } from "@/components/SubscribeButton";
import { useTheme } from "@/hooks/useTheme";

export default function App() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen min-w-[1024px] flex flex-col ${theme === 'dark' ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
      <SubscribeButton />
    </div>
  );
}
