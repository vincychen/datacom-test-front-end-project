import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import JobApplicationService from "../../Service/jobApplicationService";
import { JobApplication } from "../../Components/JobApplicationTable/jobApplicationDataType";
import { showNotification } from "../../redux/notificationSlice";
import { AppDispatch } from "../../redux/store";

/**
 * Custom hook to manage job applications state and handle related actions.
 */
export function useJobApplications() {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [jobApplications, setJobApplications] = useState<JobApplication[]>([]);

  /**
   * Fetches job applications from the server.
   */
  const fetchJobApplications = () => {
    JobApplicationService.fetchJobApplications()
      .then((response) => {
        setJobApplications(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching job application!", error);
        dispatch(
          showNotification({
            message: "There was an error fetching job applications!",
            type: "danger",
            dismissible: true,
          })
        );
      });
  };

  /**
   * Opens the form dialog for adding a new job application.
   */
  const onClickAddApplication = () => {
    setIsOpen(true);
  };

  /**
   * Closes the form dialog and fetches the updated list of job applications.
   */
  const onCloseFormDialog = () => {
    setIsOpen(false);
    fetchJobApplications();
  };

  /**
   * Fetches job applications when the component mounts.
   */
  useEffect(() => {
    fetchJobApplications();
  }, []);

  return {
    jobApplications,
    fetchJobApplications,
    isOpen,
    onCloseFormDialog,
    onClickAddApplication,
  };
}
