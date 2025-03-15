import axios from "axios";
import { useState } from "react";

export default function useFormDialog() {
  const [formData, setFormData] = useState({
    CompanyName: "",
    Position: "",
    DateApplied: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (data: any) => {
    axios
      .post("/api/Applications", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const handleSubmit = async (onClose: () => void) => {
    await onSubmit(formData);
    onClose();
  };

  return { formData, handleChange, handleSubmit };
}
