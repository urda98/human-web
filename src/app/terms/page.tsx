import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import { termsIntro, termsSections, termsUpdatedAt } from "@/content/terms";
import { LEGAL_VERSION } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos y condiciones de uso de la aplicación Human.",
};

export default function TermsPage() {
  return (
    <LegalDoc
      title="Términos y condiciones"
      updatedAt={termsUpdatedAt}
      version={LEGAL_VERSION}
      intro={termsIntro}
      sections={termsSections}
    />
  );
}
