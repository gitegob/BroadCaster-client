export const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload,
        loading: false,
      };
    case 'GET_USER_DATA':
      return {
        ...state,
        userData: action.payload,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return null;
  }
};
