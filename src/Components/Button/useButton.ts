import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/notificationSlice";
import { AppDispatch } from "../../redux/store";
import { ApplicationStatus } from "../JobApplicationTable/jobApplicationDataType";
import JobApplicationService from "../../Service/jobApplicationService";

/**
 * Custom hook to manage button actions and status options.
 */
export default function useButton() {
  const dispatch = useDispatch<AppDispatch>();

  /**
   * Status options for updating job applications.
   */
  const statusOptions = [
    { key: 1, value: "Mark as Interview", status: ApplicationStatus.INTERVIEW },
    { key: 2, value: "Mark as Offer", status: ApplicationStatus.OFFER },
    { key: 3, value: "Mark as Rejected", status: ApplicationStatus.REJECTED },
  ];

  /**
   * Updates the status of a job application.
   * @param id - The ID of the job application to be updated.
   * @param status - The new status of the job application.
   */
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
