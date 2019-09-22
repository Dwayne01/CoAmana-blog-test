import constants from './constants';
import creator from './creators'

export function getBlogPost(page, number) {
  return (dispatch) => {
      creator.getBlogPost(page, number)
      .then((data) => {
        dispatch({ type: constants.blog.SET_DATA, data });
      })
      .catch((error) => {
        dispatch({ type: constants.blog.SET_ERROR, error });
      });
  };
}
