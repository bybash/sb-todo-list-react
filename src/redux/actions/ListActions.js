import { GET_USER, GOT_USER, GOT_LIST, GET_LIST, ADD_TO_LIST, REMOVE_FROM_LIST, EDIT_LIST_ITEM } from "./ActionTypes";

export function getUser(username) {
  return { type: GET_USER, username };
}
export function gotUser(user) {
  return { type: GOT_USER, user };
}

export function getList(listid) {
  return { type: GET_LIST, listid };
}
export function gotList(list) {
  return { type: GOT_LIST, list };
}

export function addToList(item) {
  return { type: ADD_TO_LIST, item };
}

export function deleteFromList(item) {
  return { type: REMOVE_FROM_LIST, item };
}
export function editItem(item) {
  return { type: EDIT_LIST_ITEM, item };
}