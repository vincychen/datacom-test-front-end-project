import axios from "axios";
import { ApplicationStatus } from "../JobApplicationTable/TableDataType";

export default function useButton() {
  const statusOptions = [
    { key: 1, value: "Mark as Interview", status: ApplicationStatus.INTERVIEW },
    { key: 2, value: "Mark as Offer", status: ApplicationStatus.OFFER },
    { key: 3, value: "Mark as Rejected", status: ApplicationStatus.REJECTED },
  ];

  const updateApplication = (id: number, status: ApplicationStatus) => {
    axios
      .put(`/api/Applications/${id}/Status`, { status })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error updating the application!", error);
      });
  };

  return { statusOptions, updateApplication };
}
