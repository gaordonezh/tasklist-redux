import { postTasks } from "../requests/taks";

const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@ADD_TASK":
      postTasks({ name: action.payload, description: "─", user: "pingon" })
        .then((res) => {
          state.push({ ...res });
          console.log("1", [...state]);
        })
        .then(() => {
          return [...state];
        })
        .catch((err) => {
          console.log("2");
          return [...state];
        });

    case "@TO_COMPLETE_TASK":
      return [...state];

    case "@DELETE_TASK":
      return [...state];

    case "@UPDATE_TASK":
      return [...state];

    case "@SET_TASKS":
      return [...action.payload];

    default:
      return state;
  }
};

export default taskReducer;
