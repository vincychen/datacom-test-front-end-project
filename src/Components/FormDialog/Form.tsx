import { Modal, Button, Form } from 'react-bootstrap';
import s from './styles.less';
import useFormDialog from './useFormDialog';

interface FormDialogProps {
    onClose: () => void;
}

const FormDialog = ({ onClose }: FormDialogProps) => {
    const { formData, handleChange, handleSubmit } = useFormDialog();

    return (
        <Modal show={true} onHide={onClose} centered className={s.modal}>
            <Form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(onClose);
                }}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            
            </Modal.Header>
            <Modal.Body className={s.modalContent}>
            
                <Form.Group className={s.formRow} controlId="companyName">
                    <Form.Label className={s.label}>Company Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="CompanyName"
                        value={formData.CompanyName}
                        onChange={handleChange}
                        placeholder="Company Name"
                        autoFocus
                        required
                        className={s.textInput}
                    />
                </Form.Group>
                <Form.Group className={s.formRow} controlId="position">
                    <Form.Label className={s.label}>Position</Form.Label>
                    <Form.Control
                        type="text"
                        name="Position"
                        value={formData.Position}
                        onChange={handleChange}
                        placeholder="Position"
                        required
                        className={s.textInput}
                    />
                </Form.Group>
                <Form.Group className={s.formRow} controlId="dateApplied">
                    <Form.Label className={s.label}>Date Applied</Form.Label>
                    <Form.Control
                        type="date"
                        name="DateApplied"
                        value={formData.DateApplied}
                        onChange={handleChange}
                        placeholder="Date Applied"
                        required
                        className={s.textInput}
                    />
                </Form.Group>
            
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit">
                        Save Changes
                </Button>
            </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default FormDialog;