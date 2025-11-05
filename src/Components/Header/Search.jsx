export default function Search() {
  return (
    <div className="flex justify-center mt-3">
      <input
        type="text"
        placeholder="Cari berita..."
        className="w-1/2 p-3 rounded-lg text-gray-900 bg-white border-2 border-red-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:border-yellow-400"
      />
    </div>
  );
}