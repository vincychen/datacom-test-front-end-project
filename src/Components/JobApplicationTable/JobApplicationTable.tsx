import { Table } from "react-bootstrap";
import { ApplicationStatus, JobApplication } from "./TableDataType";
import DropDownButton from "../Button/Button";

interface JobApplicationTableProps {
  jobApplications: JobApplication[];
  reload?: () => void;
}

const StatusMap = {
  [ApplicationStatus.INITIAL]: "Applied",
  [ApplicationStatus.INTERVIEW]: "Interview",
  [ApplicationStatus.OFFER]: "Offer",
  [ApplicationStatus.REJECTED]: "Rejected",
};

const JobApplicationTable = ({
  jobApplications,
  reload,
}: JobApplicationTableProps) => {
  return (
    <div>
      <h1>Job Application</h1>
      {jobApplications && jobApplications.length > 0 && (
        <Table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Position</th>
              <th>Status</th>
              <th>Date Applied</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobApplications.map((item: JobApplication) => {
              const date = new Date(item.dateApplied);
              const formattedDate = `${date.toDateString()}`;
              const status =
                StatusMap[item.status as unknown as ApplicationStatus];
              return (
                <tr key={item.id}>
                  <td>{item.companyName}</td>
                  <td>{item.position}</td>
                  <td>{status}</td>
                  <td>{formattedDate}</td>
                  <td>
                    <DropDownButton applicationId={item.id} reload={reload} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default JobApplicationTable;
