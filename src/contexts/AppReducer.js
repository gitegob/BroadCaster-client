export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log('payload', action.payload);

      return {
        ...state,
        user: action.payload,
      };
    default:
      return null;
  }
};
