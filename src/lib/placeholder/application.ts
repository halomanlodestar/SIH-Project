import { Application, ApplicationStatus, DocumentStatus } from "@/types.d";

export const sampleApplication: Application = {
  id: "123",
  status: ApplicationStatus.DOCS_UNDER_VERIFICATION,
  submitted_documents: [
    {
      id: "12",
      url: "aa",
      verified: DocumentStatus.PENDING,
    },
  ],
};
