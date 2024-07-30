import Link from "next/link";
import ThemeButton from "@/components/theme/theme-button";

export default function Header() {
  return (
    <nav className="flex items-center justify-between gap-3 sm:container sm:px-0 py-4 px-3 sm:mt-10">
      <Link href={"/"}>Home</Link>

      <div className="flex items-center gap-2">
        <Link href={"/"}>Home</Link>
        <ThemeButton />
      </div>
    </nav>
  );
}
