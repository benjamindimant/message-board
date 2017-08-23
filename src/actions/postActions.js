import { database } from '../Firebase';

export const FETCH_POSTS = 'FETCH_POSTS';

export function getPosts() {
  return dispatch => {
    database.on('value', data => {
      dispatch({
        type: FETCH_POSTS,
        payload: data.val()
      })
    })
  };
};