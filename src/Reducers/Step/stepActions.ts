import { useDispatch } from 'react-redux';

export const UPDATE_STEP = 'UPDATE_STEP';

export const useUpdateStep = (): ((step: number) => void) => {
  const dispatch = useDispatch();
  return (step: number) => {
    localStorage.setItem('step', step.toString());

    dispatch({
      type: UPDATE_STEP,
      payload: step,
    });
  };
};
