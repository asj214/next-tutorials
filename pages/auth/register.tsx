import React from "react";

export default function Register() {
  const [state, setState] = React.useState({
    email: '',
    name: '',
    password: ''
  });

  function handleChange(e: any) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(state);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={state.email}
        />
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
          value={state.name}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={state.password}
        />
        <button type="submit">Register</button>
      </form>
    </>
  )
}