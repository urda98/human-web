import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import {
  privacyIntro,
  privacySections,
  privacyUpdatedAt,
} from "@/content/privacy";

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
      intro={privacyIntro}
      sections={privacySections}
    />
  );
}
