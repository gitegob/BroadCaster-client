import React from 'react';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  return (
    <form>
      <input type="email" placeholder="E-mail" name="emal" required={true} />
      <input type="password" placeholder="Password" name="password" required={true} />
      <Link className="submit" to="/dashboard" button="true">
        Log in
      </Link>
    </form>
  );
};
