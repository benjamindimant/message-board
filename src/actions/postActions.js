import { database } from '../Firebase';

export const FETCH_POSTS = 'FETCH_POSTS';
export const POST_STATUS = 'POST_STATUS';

export function getPosts() {
  return dispatch => {
    dispatch({
      type: POST_STATUS,
      payload: true
    });
    database.on('value', data => {
      dispatch({
        type: POST_STATUS,
        payload: false
      });
      dispatch({
        type: FETCH_POSTS,
        payload: data.val()
      })
    }, () => {
      dispatch({
        type: POST_STATUS,
        payload: -1
      })
    })
  };
}

export function savePost(values) {
  return dispatch => database.push(values);
}

export function deletePost(id) {
  return dispatch => database.child(id).remove();
}
