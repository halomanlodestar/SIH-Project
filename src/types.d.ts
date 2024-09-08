export interface Application {
  id: string;
  submitted_documents: Doc[];
  status: ApplicationStatus;
}

// 1xx Initiation WHITE
// 2xx Success GREEN
// 3xx Processing BLUE
// 4xx Error ORANGE

export enum DocumentStatus {
  PENDING = 300,
  VERIFIED = 200,
  REJECTED = 400,
}

export interface Doc {
  id: string;
  url: string;
  verified: DocumentStatus;
}

export enum ApplicationStatus {
  DOCS_SUBMITTED = 100,

  DOCS_UNDER_VERIFICATION = 301,
  DOCS_VERIFIED = 200,
  DOCS_REJECTED = 401,

  SCHOLARSHIP_EVALUATION = 302,
  SCHOLARSHIP_CONFIRMED = 201,
  SCHOLARSHIP_RECEIVED = 202,
}
