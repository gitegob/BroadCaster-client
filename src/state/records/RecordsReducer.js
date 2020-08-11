export const RecordsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_RECORDS':
      return {
        ...state,
        records: action.payload,
      };
    case 'GET_USER_RECORDS':
      return {
        ...state,
        userRecords: action.payload,
      };
    case 'GET_A_RECORD':
      return {
        ...state,
        record: action.payload,
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
      };
    case 'UPDATE_A_RECORD':
      return {
        ...state,
        record: action.payload,
      };
    default:
      return null;
  }
};
