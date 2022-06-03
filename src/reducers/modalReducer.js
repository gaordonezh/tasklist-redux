const initialState = {
  open: false,
  data: {},
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@OPEN_MODAL":
      state.open = true;
      state.data = action.payload;
      return { ...state };

    case "@CLOSE_MODAL":
      state.open = false;
      state.data = {};
      return { ...state };

    default:
      return state;
  }
};

export default modalReducer;
