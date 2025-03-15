import React from "react";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import useButton from "./useButton";

interface ButtonProps {
    applicationId: number;
    reload?: () => void;
}
const DropDownButton = (props: ButtonProps) => {

    const { applicationId, reload } = props;

    const { statusOptions, updateApplication } = useButton();
    
    const handleUpdateApplication = (status: number) => {
        updateApplication(applicationId, status);
        reload && reload();
    }
      return (
        <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle id="dropdown-custom-1">Edit</Dropdown.Toggle>
        <Dropdown.Menu className="super-colors">
        {statusOptions.map((option) => (
            <Dropdown.Item key={option.key} eventKey={option.key} onClick={() => handleUpdateApplication(option.status)}>{option.value}</Dropdown.Item>
        ))}
        </Dropdown.Menu>
      </Dropdown>
      );
}

export default DropDownButton;