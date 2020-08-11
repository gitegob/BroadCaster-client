/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Redirect } from 'react-router-dom';

export const Public = (WrappedComp) => class extends React.Component {
  render() {
    const tkn = localStorage.getItem('accessToken');
    const rest = this.props;
    return !tkn ? <WrappedComp {...rest} /> : <Redirect to="/" />;
  }
};
