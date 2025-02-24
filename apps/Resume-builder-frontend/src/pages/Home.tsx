import ResumeList from "../components/ResumeList";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Resumes</h1>
      <ResumeList />
    </div>
  );
};

export default Home;
