import Logo from "./Logo";
import Search from "./Search";
import Generations from "./Generations/Generations";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-6">
      <Logo />
      <Search />
      <Generations />
    </header>
  );
}