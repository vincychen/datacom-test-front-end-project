import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/notificationSlice";
import { AppDispatch } from "../../redux/store";
import { ApplicationStatus } from "../JobApplicationTable/jobApplicationDataType";
import JobApplicationService from "../../Service/jobApplicationService";

export default function useButton() {
  const dispatch = useDispatch<AppDispatch>();
  const statusOptions = [
    { key: 1, value: "Mark as Interview", status: ApplicationStatus.INTERVIEW },
    { key: 2, value: "Mark as Offer", status: ApplicationStatus.OFFER },
    { key: 3, value: "Mark as Rejected", status: ApplicationStatus.REJECTED },
  ];

  const updateApplication = (id: number, status: ApplicationStatus) => {
    JobApplicationService.updateJobApplication(id, { status })
      .then(() => {
        dispatch(
          showNotification({
            message: "Application updated successfully",
            type: "success",
            dismissible: true,
            dismissAfter: 3,
          })
        );
      })
      .catch((error: any) => {
        console.error("There was an error updating the application!", error);
        dispatch(
          showNotification({
            message: "There was an error updating the application!",
            type: "danger",
            dismissible: true,
          })
        );
      });
  };

  return { statusOptions, updateApplication };
}
