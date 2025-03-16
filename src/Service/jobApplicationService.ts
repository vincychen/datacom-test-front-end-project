import api from "./api";

const JobApplicationService = {
  fetchJobApplications() {
    return api.get("/Applications");
  },

  addJobApplication(data: any) {
    return api.post("/Applications", data);
  },

  updateJobApplication(id: number, data: any) {
    return api.put(`/Applications/${id}/Status`, data);
  },
};

export default JobApplicationService;
