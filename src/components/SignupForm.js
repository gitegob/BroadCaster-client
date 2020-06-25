import React from 'react';

export const SignupForm = () => {
  return (
    <form action="">
      <input type="text" placeholder="First Name" name="fname" required="true" />
      <input type="text" placeholder="Last Name" name="lname" required="true" />
      <input type="email" placeholder="E-mail" name="emal" required="true" />
      <input type="password" placeholder="Password" name="password" required="true" />
      <input type="text" placeholder="Username" name="username" required="true" />
      <input type="tel" name="phone" placeholder="Phone Number" required="true" />
      <a className="submit" href="#" button="true">
        Create Account
      </a>
    </form>
  );
};
