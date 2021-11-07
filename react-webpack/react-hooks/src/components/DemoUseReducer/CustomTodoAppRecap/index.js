import React from 'react';
import { useReducer, useRef } from 'react';
import reducer, { initState } from './reducer';
import { setJob, addJob, delJobs } from './action';
import logger from './logger';
export default function TodoAppRecap() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;
  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(''));
    inputRef.current.focus();
  };
  return (
    <div>
      <input
        ref={inputRef}
        value={job}
        type="text"
        placeholder="Enter todo..."
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
      {jobs.map((item, index) => (
        <li key={index}>
          {item}
          <span onClick={() => dispatch(delJobs(index))}> &#10005;</span>
        </li>
      ))}
    </div>
  );
}
