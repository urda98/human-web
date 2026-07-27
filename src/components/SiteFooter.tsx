import Link from "next/link";
import { CONTACT_EMAIL, NAV_LINKS, SITE_NAME } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="footer-brand">{SITE_NAME}</p>
        <nav className="footer-nav" aria-label="Pie de página">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="footer-meta">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <span aria-hidden="true"> · </span>
          <span>© {year} {SITE_NAME}</span>
        </p>
      </div>
    </footer>
  );
}
