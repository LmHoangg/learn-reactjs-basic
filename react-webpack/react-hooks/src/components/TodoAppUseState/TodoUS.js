import { useState } from "react";

export default function TodoUS() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));

    return storageJobs ?? [];
  });

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
  };

  const handleDelete = (key) => {
    setJobs(() => {
      const newJobs = jobs.filter((item, index) => {
        return index !== key;
      });
      localStorage.setItem("jobs", JSON.stringify(newJobs));

      return newJobs;
    });
  };

  return (
    <div className="TodoUS">
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => {
          return (
            <div key={index}>
              <li>{job}</li>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
