import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/apiClient";

const fetchResumes = async () => {
  const response = await apiClient.get("/resumes");
  return response.data;
};

const ResumeList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["resumes"], // Correct v5 syntax
    queryFn: fetchResumes, // Fetch resumes
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((resume) => (
        <li key={resume._id}>
          {resume.name} - {resume.email}
        </li>
      ))}
    </ul>
  );
};

export default ResumeList;
