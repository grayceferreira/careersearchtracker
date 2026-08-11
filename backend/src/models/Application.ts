export interface Application {
  id: number;
  company: string;
  role: string;
  status: ApplicationStatus;
  appliedDate: string;
}

export type ApplicationStatus =
  | "Applied"
  | "Interview"
  | "Offer"
  | "Rejected";