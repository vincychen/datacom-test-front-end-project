import s from './styles.less';
import FormDialog from '../../Components/FormDialog/Form';
import { Button } from 'react-bootstrap';
import JobApplicationTable from '../../Components/JobApplicationTable/JobApplicationTable';
import { useJobApplications } from './useJobApplications';

function JobApplications() {
  const { isOpen, setIsOpen, jobApplications, fetchJobApplications } = useJobApplications();

  return (
    <div className = {s.App}>
      { isOpen && <FormDialog onClose={() => {
        setIsOpen(false)
        fetchJobApplications();
      }} />}
      <JobApplicationTable jobApplications={jobApplications} reload={fetchJobApplications}/>
      <div className={s.footer}>
        <Button onClick={() => setIsOpen(true)}>Add Application</Button>
      </div>
    </div>
  );
}

export default JobApplications;
