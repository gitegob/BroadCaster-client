export const RecordsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_RECORDS':
      return {
        ...state,
        records: action.payload,
        loading: false,
      };
    case 'GET_A_RECORD':
      return {
        ...state,
        record: action.payload,
        loading: false,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'CREATE_A_RECORD':
      return {
        ...state,
        record: action.payload,
        loading: false,
      };
    default:
      return null;
  }
};
