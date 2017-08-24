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

export function savePost(values) {
  return dispatch => database.push(values);
}

export function deletePost(id) {
  return dispatch => database.child(id).remove();
}
