import { useState } from 'react';

export const Login = ({ login }) => {
  const [state, setState] = useState({
    username: null,
    password: null,
    rememberMe: false,
  });

  const handlePhoneNumChange = (e) => {
    setState({ ...state, username: e.target.value });
  };

  const handlePinCodeChange = (e) => {
    setState({ ...state, password: e.target.value });
  };

  const handleRememberMeCheck = (e) => {
    setState({ ...state, rememberMe: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (state.password !== null && state.username !== null)
      login(state);
  };

  return (
    <main className="main-content">
      <div className="bg-white rounded shadow-7 w-400 mw-100 p-6">
        <h5 className="mb-7">Sign into your account</h5>

        <form id="login" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              onChange={handlePhoneNumChange}
              type="text"
              className="form-control"
              name="phone_number"
              placeholder="eg. +34645136228"
            />
          </div>

          <div className="form-group">
            <input
              onChange={handlePinCodeChange}
              type="password"
              className="form-control"
              name="customer_pin"
              placeholder="Enter your pin"
            />
          </div>

          <div className="form-group flexbox py-3">
            <div className="">
              <input
                type="checkbox"
                onChange={handleRememberMeCheck}
                className="remember"
              />
              <label className="remember">Remember me</label>
            </div>

            <a className="text-muted small-2" href="/reset">
              Forgot password?
            </a>
          </div>

          <div className="form-group">
            <button className="btn btn-block btn-primary" type="submit">
              Login
            </button>
          </div>
        </form>

        <hr className="w-30" />
        <p className="text-center text-muted small-2">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </main>
  );
};
