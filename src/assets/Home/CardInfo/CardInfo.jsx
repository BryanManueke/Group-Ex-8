import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo";

export default function CardInfo() {
  return (
    <div className="bg-white rounded shadow-lg w-11/12 md:w-9/12 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">
        Berita Terkini
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Informasi terbaru dari berbagai kategori berita.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <Evolution />
        <TypeEffect />
        <Logo />
      </div>
    </div>
  );
}
