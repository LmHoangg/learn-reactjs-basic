import React from 'react';
import { useReducer, useRef } from 'react';
// useReducer
// 1:init state
const initState = {
  job: '',
  jobs: [],
};
// 2:Action:
const SET_JOB = 'setJob';
const ADD_JOBS = 'addJobs';
const Del_JOBS = 'delJobs';
const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOBS,
    payload,
  };
};
const delJobs = (payload) => {
  return {
    type: Del_JOBS,
    payload,
  };
};
// 3 reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOBS:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case Del_JOBS:
      // Tránh việc xóa mảng cu~ vì có thể dùng để xử lí một số dữ liệu khác trong hàm này
      const newJobs = state.jobs;
      newJobs.splice(action.payload, 1);

      return {
        ...state,
        jobs: newJobs,
      };
    default:
      throw new Error('Invalid action...');
  }
};
// 4 dispatch
export default function TodoAppReducer() {
  const [state, dispatch] = useReducer(reducer, initState);
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
          <span onClick={() => dispatch(delJobs(index))}> &times;</span>
        </li>
      ))}
    </div>
  );
}
