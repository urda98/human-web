import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { NAV_LINKS } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <BrandMark size="md" />
        <nav className="site-nav" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
