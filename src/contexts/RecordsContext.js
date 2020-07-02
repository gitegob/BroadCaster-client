import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const initialState = {
  records: [],
};
export const RecordsContext = createContext(initialState);

export const RecordsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // const updateRecords = (recs) => {
  //   setRecords(recs);
  // };
  return (
    <RecordsContext.Provider value={{ records: state.records }}>{children}</RecordsContext.Provider>
  );
};

// {
//   id: 1,
//   createdOn: '7/1/2020, 4:40:52 PM',
//   authorId: 1,
//   authorName: 'Brian Gitego',
//   title: 'Corruption somewhere',
//   type: 'intervention',
//   location: '10.332, 9.3342',
//   status: 'pending',
//   media: [],
//   comment: "Corruption is a huge bane to africa's development,  it is up to us to stop it",
// },
// {
//   id: 2,
//   createdOn: '7/1/2020, 4:40:52 PM',
//   authorId: 2,
//   authorName: 'Ben Gisa',
//   title: 'Corruption somewhere',
//   type: 'intervention',
//   location: '10.332, 9.3342',
//   status: 'Resolved',
//   media: [],
//   comment: "Corruption is a huge bane to africa's development,  it is up to us to stop it",
// },
// {
//   id: 3,
//   createdOn: '7/1/2020, 4:40:52 PM',
//   authorId: 3,
//   authorName: 'Bruce Sangwa',
//   title: 'Corruption somewhere',
//   type: 'intervention',
//   location: '10.332, 9.3342',
//   status: 'Rejected',
//   media: [],
//   comment: "Corruption is a huge bane to africa's development,  it is up to us to stop it",
// },
// {
//   id: 4,
//   createdOn: '7/1/2020, 4:40:52 PM',
//   authorId: 4,
//   authorName: 'Brian Gitego',
//   title: 'Corruption somewhere',
//   type: 'intervention',
//   location: '10.332, 9.3342',
//   status: 'Resolved',
//   media: [],
//   comment: "Corruption is a huge bane to africa's development,  it is up to us to stop it",
// },
