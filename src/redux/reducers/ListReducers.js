import { GET_USER, GOT_USER, GOT_LIST, GET_LIST, ADD_TO_LIST, REMOVE_FROM_LIST, EDIT_LIST_ITEM } from "../actions/ActionTypes";
const mainAppState =
{
  user: null,
  userLoading: false,
  listLoading: false,
  list: null
};

const calendarViewReducer = (state = mainAppState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userLoading: true
      };
    case GOT_USER:
      return {
        ...state,
        user: action.user,
        userLoading: false
      };
    case GET_LIST:
      return {
        ...state,
        listLoading: true,

      };
    case GOT_LIST:
      return {
        ...state,
        listLoading: false,
        list: action.list
      };

    case ADD_TO_LIST:

      return {
        ...state,
        list: state.list.concat(action.item)
      };

    case EDIT_LIST_ITEM:



      return {
        ...state,
        list: state.list.map(
          (content, i) => content.id === action.item.id ? action.item
            : content
        )
      };


    case REMOVE_FROM_LIST:
      return {
        ...state,
        list: state.list.filter(item => item.id != action.item.id),
      };

    default:
      return state;
  }
};

export default calendarViewReducer;
