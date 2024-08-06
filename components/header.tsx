import Link from "next/link";
import ThemeButton from "@/components/theme/theme-button";

export default function Header() {
  return (
    <nav className="max-w-6xl 3xl:max-w-7xl mx-auto flex items-center justify-between gap-3 p-4">
      <Link href={"/"}>Home</Link>

      <div className="flex items-center gap-2">
        <Link href={"/about"}>About</Link>
        <ThemeButton />
      </div>
    </nav>
  );
}
