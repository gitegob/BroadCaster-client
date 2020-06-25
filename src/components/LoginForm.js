import React from 'react';

export const LoginForm = () => {
  return (
    <form>
      <input type="email" placeholder="E-mail" name="emal" required="true" />
      <input type="password" placeholder="Password" name="password" required="true" />
      <a className="submit" href="#" button="true">
        Log in
      </a>
    </form>
  );
};
