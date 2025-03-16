import { Table } from "react-bootstrap";
import { ApplicationStatus, JobApplication } from "./jobApplicationDataType";
import DropDownButton from "../Button/Button";
import s from "./styles.less";
import cx from 'classnames';

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
      <Table>
        <thead>
          <tr>
            <th className={s.tableColumn}>Company Name</th>
            <th className={s.tableColumn}>Position</th>
            <th className={s.tableColumn}>Status</th>
            <th className={s.tableColumn}>Date Applied</th>
            <th className={s.tableColumn}>Action</th>
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
                <td className={cx(s.tableColumn, s.firstColumn)}>{item.companyName}</td>
                <td className={s.tableColumn}>{item.position}</td>
                <td className={s.tableColumn}>{status}</td>
                <td className={s.tableColumn}>{formattedDate}</td>
                <td className={s.tableColumn}>
                  <DropDownButton applicationId={item.id} reload={reload} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default JobApplicationTable;
