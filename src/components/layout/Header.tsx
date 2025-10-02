import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--background)/0.8] backdrop-blur supports-[backdrop-filter]:bg-[color:var(--background)/0.6]">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex py-4 items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          <NavMenu />

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="btn btn--primary py-3 px-5 hover-primary-raise"
            >
              Try Free with AWS <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
