export const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loading: false,
      };
    case 'SET_USER_DATA':
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
    case 'LOGOUT':
      return {
        ...state,
        userData: '',
        loading: false,
      };
    default:
      return null;
  }
};
