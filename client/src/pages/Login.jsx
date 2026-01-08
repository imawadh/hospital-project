import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-100 rounded-2xl">
      <div className="bg-white w-full max-w-md rounded-xl shadow-md p-8 m-3">
        {state === 'Sign Up' ? (
          <SignUp setState={setState} />
        ) : (
          <SignIn setState={setState} />
        )}
      </div>
    </div>
  );
};

const SignUp = ({ setState }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };
  
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Create Account
      </h2>
      <p className='text-center'>Please Create your Account to Book Appointments</p>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-600"
        required
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-600"
        required
      />

      {/* Password */}
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full pr-16 focus:outline-none focus:border-gray-600"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-600 cursor-pointer hover:text-gray-800"
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded-md cursor-pointer"
      >
        Sign Up
      </button>

      <p className="text-sm text-center text-gray-600">
        Already have an account?{' '}
        <span
          onClick={() => setState('Sign In')}
          className="text-gray-800 font-medium cursor-pointer hover:underline"
        >
          Sign In
        </span>
      </p>
    </form>
  );
};

const SignIn = ({ setState }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Welcome Back
      </h2>
      <p className='text-center'>Please Sign In to Book Appointments</p>

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-600"
        required
      />

      {/* Password */}
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full pr-16 focus:outline-none focus:border-gray-600"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-600 cursor-pointer hover:text-gray-800"
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded-md transition cursor-pointer"
      >
        Sign In
      </button>

      <p className="text-sm text-center text-gray-600">
        Don’t have an account?{' '}
        <span
          onClick={() => setState('Sign Up')}
          className="text-gray-800 font-medium cursor-pointer hover:underline"
        >
          Sign Up
        </span>
      </p>
    </form>
  );
};

export default Login;
