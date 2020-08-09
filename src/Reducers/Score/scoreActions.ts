import { useDispatch } from 'react-redux';

export const UPDATE_SCORE = 'UPDATE_SCORE';

export const useUpdateScore = (): ((score: number) => void) => {
  const dispatch = useDispatch();
  return (score: number) => {
    localStorage.setItem('score', score.toString());
    dispatch({
      type: UPDATE_SCORE,
      payload: score,
    });
  };
};
