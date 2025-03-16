import api from "./api";

/**
 * Service to handle API calls related to job applications.
 */
const JobApplicationService = {
  /**
   * Fetches all job applications from the server.
   * @returns {Promise} - A promise that resolves to the list of job applications.
   */
  fetchJobApplications() {
    return api.get("/Applications");
  },

  /**
   * Adds a new job application to the server.
   * @param {any} data - The job application data to be added.
   * @returns {Promise} - A promise that resolves when the job application is added.
   */
  addJobApplication(data: any) {
    return api.post("/Applications", data);
  },

  /**
   * Updates the status of a job application on the server.
   * @param {number} id - The ID of the job application to be updated.
   * @param {any} data - The new status data for the job application.
   * @returns {Promise} - A promise that resolves when the job application status is updated.
   */
  updateJobApplication(id: number, data: any) {
    return api.put(`/Applications/${id}/Status`, data);
  },
};

export default JobApplicationService;
