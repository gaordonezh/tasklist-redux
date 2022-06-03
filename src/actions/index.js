export const addTask = (value) => {
  return {
    type: "@ADD_TASK",
    payload: value,
  };
};

export const changeTaskStatus = () => {
  return {
    type: "@TO_COMPLETE_TASK",
  };
};

export const deleteTask = () => {
  return {
    type: "@DELETE_TASK",
  };
};

export const openModal = (payload) => {
  return {
    type: "@OPEN_MODAL",
    payload,
  };
};

export const closeModal = (payload) => {
  return {
    type: "@CLOSE_MODAL",
    payload,
  };
};

export const updateTask = (payload) => {
  return {
    type: "@UPDATE_TASK",
    payload,
  };
};

export const setTasks = (payload) => {
  return {
    type: "@SET_TASKS",
    payload,
  };
};
