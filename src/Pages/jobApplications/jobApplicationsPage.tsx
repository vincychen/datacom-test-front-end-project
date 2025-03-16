import s from "./styles.less";
import FormDialog from "../../Components/FormDialog/FormDialog";
import { Button } from "react-bootstrap";
import JobApplicationTable from "../../Components/JobApplicationTable/JobApplicationTable";
import { useJobApplications } from "./useJobApplications";

function JobApplications() {
  const { isOpen, onCloseFormDialog, jobApplications, fetchJobApplications, onClickAddApplication } =
    useJobApplications();

  return (
    <div className={s.App}>
      {isOpen && (
        <FormDialog onClose={onCloseFormDialog} />
      )}
      <h1>Your Job Applications</h1>
      {jobApplications.length === 0 && (
        <div>No applications found. Let's update your CV and apply for a new job!</div>
      )}
      {jobApplications.length > 0 && (
        <JobApplicationTable
          jobApplications={jobApplications}
          reload={fetchJobApplications}
        />
      )}
      <div className={s.footer}>
        <Button onClick={onClickAddApplication}>
          Add Application
        </Button>
      </div>
    </div>
  );
}

export default JobApplications;
