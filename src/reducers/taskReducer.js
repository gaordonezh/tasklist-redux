const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@ADD_TASK":
      state.push({ task: action.payload, success: false });
      return [...state];

    case "@TO_COMPLETE_TASK":
      return [...state];

    default:
      return state;
  }
};

export default taskReducer;
