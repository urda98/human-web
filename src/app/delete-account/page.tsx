import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import {
  deleteAccountIntro,
  deleteAccountSections,
  deleteAccountUpdatedAt,
} from "@/content/delete-account";
import { LEGAL_VERSION } from "@/lib/site";

export const metadata: Metadata = {
  title: "Eliminar cuenta",
  description:
    "Cómo solicitar la eliminación de tu cuenta y datos en Human.",
};

export default function DeleteAccountPage() {
  return (
    <LegalDoc
      title="Eliminar cuenta"
      updatedAt={deleteAccountUpdatedAt}
      version={LEGAL_VERSION}
      intro={deleteAccountIntro}
      sections={deleteAccountSections}
    />
  );
}
