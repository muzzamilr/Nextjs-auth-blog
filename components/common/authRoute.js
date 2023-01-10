import React from 'react';
import jwt from "jsonwebtoken";
import cookies from 'next-cookies';

export const RequireAuthentication = ({ isAuthenticated, WrappedComponent }) => {
  return (props) => {
    return (
      <WrappedComponent {...props} />
    )
  }
};

RequireAuthentication.getInitialProps = async (ctx) => {
  const cookie = cookies(ctx).token;

  if (!cookie) return { props: { isAuthenticated: "hello" } };

  const isAuthenticated = await jwt.verify(cookie, "abcdefg");
  return { props: { isAuthenticated: isAuthenticated, } };
}


export default RequireAuthentication;
