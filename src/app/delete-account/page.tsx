import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import {
  deleteAccountIntro,
  deleteAccountSections,
  deleteAccountUpdatedAt,
} from "@/content/delete-account";

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
      intro={deleteAccountIntro}
      sections={deleteAccountSections}
    />
  );
}
