import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}