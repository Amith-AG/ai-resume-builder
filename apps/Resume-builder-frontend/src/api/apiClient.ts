import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Ensure backend is running on this port

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Function to fetch a resume by ID using axios
export const fetchResumeById = async (resumeId: string) => {
  try {
    const response = await apiClient.get(`/resumes/${resumeId}`);
    console.log("Resume Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching resume:", error);
    throw error;
  }
};

// Example usage:
fetchResumeById("67bca799a5ae758427d2e1f4");
