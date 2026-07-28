import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

type BrandMarkProps = {
  /** `null` = sin link (p. ej. dentro de un h1). */
  href?: string | null;
  size?: "sm" | "md" | "lg";
  /** Si false, solo muestra el wordmark tipográfico. */
  showMark?: boolean;
  className?: string;
};

const SIZES = {
  sm: { mark: 28, className: "brand-mark--sm" },
  md: { mark: 36, className: "brand-mark--md" },
  lg: { mark: 72, className: "brand-mark--lg" },
} as const;

export function BrandMark({
  href = "/",
  size = "md",
  showMark = true,
  className = "",
}: BrandMarkProps) {
  const config = SIZES[size];
  const classes = `brand brand-mark ${config.className} ${className}`.trim();
  const content = (
    <>
      {showMark ? (
        <Image
          src="/brand/human-h.png"
          alt=""
          width={config.mark}
          height={config.mark}
          className="brand-mark-icon"
          priority={size === "lg"}
        />
      ) : null}
      <span className="brand-wordmark">{SITE_NAME.toUpperCase()}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={SITE_NAME}>
        {content}
      </Link>
    );
  }

  return (
    <span className={classes} aria-label={SITE_NAME}>
      {content}
    </span>
  );
}
