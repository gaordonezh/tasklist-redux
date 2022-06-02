export const addTask = (value) => {
  return {
    type: "@ADD_TASK",
    payload: value,
  };
};

export const toCompleteTask = () => {
  return {
    type: "@TO_COMPLETE_TASK",
  };
};
