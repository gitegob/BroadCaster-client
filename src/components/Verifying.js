/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Loader } from './Loader';
import { pusher } from '../lib/utils';
import { AuthContext } from '../contexts/auth/AuthContext';

export default ({ match }) => {
  const [error, setError] = useState('');
  const { verifyEmail } = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    verifyEmail(match.params.verificationToken)
      .then((res) => {
        if (res.status === 201) pusher(history, '/login');
        else setError('Couldn\'t verify your email. Please try to sign up again');
      });
  }, []);
  return (
    <div>
      {error ? (
        <div>
          <h2>{error}</h2>
          <Link to="/signup">Go to sign up</Link>
        </div>
      ) : <h2>Verifying...</h2>}
      <Loader />
    </div>
  );
};
