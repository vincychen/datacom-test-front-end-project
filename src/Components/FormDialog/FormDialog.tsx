import { Modal, Button, Form } from "react-bootstrap";
import s from "./styles.less";
import useFormDialog from "./useFormDialog";

interface FormDialogProps {
  onClose: () => void;
}

const FormDialog = ({ onClose }: FormDialogProps) => {
  const { formData, handleChange, handleSubmit, validationError } = useFormDialog();

  const maxDate = new Date().toISOString().split("T")[0];
  return (
    <Modal show={true} onHide={onClose} centered>
        <Form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(onClose);
            }}>
        <Modal.Header closeButton>
            <Modal.Title>Add new application</Modal.Title>
        </Modal.Header>
        <Modal.Body className={s.modalContent}>
            <Form.Group className={s.formRow} controlId="companyName">
                <Form.Label className={s.label}>Company Name *</Form.Label>
                <Form.Control
                    type="text"
                    name="CompanyName"
                    value={formData.CompanyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    autoFocus
                    className={s.textInput}
                />
            </Form.Group>
            <Form.Group className={s.formRow} controlId="position">
                <Form.Label className={s.label}>Position *</Form.Label>
                <Form.Control
                    type="text"
                    name="Position"
                    value={formData.Position}
                    onChange={handleChange}
                    placeholder="Position"
                    className={s.textInput}
                />
            </Form.Group>
            <Form.Group className={s.formRow} controlId="dateApplied">
                <Form.Label className={s.label}>Date Applied *</Form.Label>
                <Form.Control
                    type="date"
                    name="DateApplied"
                    value={formData.DateApplied}
                    onChange={handleChange}
                    placeholder="Date Applied"
                    className={s.textInput}
                    max={maxDate}
                />
            </Form.Group>
            {validationError && (
                <div className={s.error}>{validationError}</div>
            )}
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
