// 2:Action:
import { SET_JOB, ADD_JOBS, Del_JOBS } from './constant';
export const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
export const addJob = (payload) => {
  return {
    type: ADD_JOBS,
    payload,
  };
};
export const delJobs = (payload) => {
  return {
    type: Del_JOBS,
    payload,
  };
};
