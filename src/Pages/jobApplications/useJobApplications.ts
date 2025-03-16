import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import JobApplicationService from "../../Service/jobApplicationService";
import { JobApplication } from "../../Components/JobApplicationTable/jobApplicationDataType";
import { showNotification } from "../../redux/notificationSlice";
import { AppDispatch } from "../../redux/store";

export function useJobApplications() {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [jobApplications, setJobApplications] = useState<JobApplication[]>([]);

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

  const onClickAddApplication = () => {
    setIsOpen(true);
  };

  const onCloseFormDialog = () => {
    setIsOpen(false);
    fetchJobApplications();
  };

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
