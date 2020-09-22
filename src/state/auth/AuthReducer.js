export const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.payload,
      };
    case 'SET_PROFILE':
      return {
        ...state,
        currentProfile: action.payload,
      };
    default:
      return state;
  }
};
