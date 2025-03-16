export interface JobApplication {
  id: number;
  companyName: string;
  position: string;
  dateApplied: string;
  status: ApplicationStatus;
}

export enum ApplicationStatus {
  INITIAL = 0,
  INTERVIEW = 1,
  OFFER = 2,
  REJECTED = 3,
}
