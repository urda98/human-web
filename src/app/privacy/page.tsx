import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import {
  privacyIntro,
  privacySections,
  privacyUpdatedAt,
} from "@/content/privacy";
import { LEGAL_VERSION } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de Human: datos de cuenta, entrenamiento y servicios Firebase.",
};

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Política de privacidad"
      updatedAt={privacyUpdatedAt}
      version={LEGAL_VERSION}
      intro={privacyIntro}
      sections={privacySections}
    />
  );
}
