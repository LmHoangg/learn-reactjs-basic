import { SET_JOB, ADD_JOBS, Del_JOBS } from './constant';
export const initState = {
  job: '',
  jobs: [],
};
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
      // Tránh việc xóa mảng củ vì có thể dùng để xử lí một số dữ liệu khác trong hàm này
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
export default reducer;
