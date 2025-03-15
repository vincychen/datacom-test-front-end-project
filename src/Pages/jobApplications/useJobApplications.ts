import axios from "axios";
import { useEffect, useState } from "react";

export function useJobApplications() {
  const [isOpen, setIsOpen] = useState(false);
  const [jobApplications, setJobApplications] = useState([]);

  const fetchJobApplications = () => {
    axios
      .get("/api/Applications")
      .then((response) => {
        setJobApplications(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the JobApplication!", error);
      });
  };

  useEffect(() => {
    fetchJobApplications();
  }, []);

  return { jobApplications, fetchJobApplications, isOpen, setIsOpen };
}
