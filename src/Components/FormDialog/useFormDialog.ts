import { useDispatch } from "react-redux";
import { useState } from "react";
import JobApplicationService from "../../Service/jobApplicationService";
import { AppDispatch } from "../../redux/store";
import { showNotification } from "../../redux/notificationSlice";

interface FormData {
  CompanyName: string;
  Position: string;
  DateApplied: string;
}

export default function useFormDialog() {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<FormData>({
    CompanyName: "",
    Position: "",
    DateApplied: "",
  });

  const [validationError, setValidationError] = useState<string | undefined>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (data: any) => {
    await JobApplicationService.addJobApplication(data)
      .then(() => {
        dispatch(
          showNotification({
            message: "Job application added successfully",
            type: "success",
            dismissible: true,
            dismissAfter: 3,
          })
        );
      })
      .catch((error) => {
        console.error("There was an error adding job application!", error);
        dispatch(
          showNotification({
            message: "There was an error adding job application!",
            type: "danger",
            dismissible: true,
          })
        );
      });
  };

  const validate = (data: any) => {
    let errorMessage = undefined;
    if (data.CompanyName.trim() === "") {
      errorMessage = "Please enter a Company Name!";
    } else if (data.Position.trim() === "") {
      errorMessage = "Please enter a Position!";
    } else if (data.DateApplied.trim() === "") {
      errorMessage = "Please select a Date!";
    } else if (data.CompanyName.length > 50) {
      errorMessage = "Company Name must be less than 50 characters!";
    } else if (data.Position.length > 50) {
      errorMessage = "Position must be less than 50 characters!";
    }
    return errorMessage;
  };

  const handleSubmit = async (onClose: () => void) => {
    const errorMessage = validate(formData);
    if (errorMessage) {
      setValidationError(errorMessage);
      return;
    } else if (validationError) {
      setValidationError(undefined);
    }

    await onSubmit(formData);
    onClose();
  };

  return { formData, handleChange, handleSubmit, validationError };
}
