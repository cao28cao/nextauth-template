'use client';

import { FormEvent } from 'react';

export default function Form() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/auth/register`, {
      method: 'POST',
      body: JSON.stringify({
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    });
    console.log({ response });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-auto max-w-md mt-10"
    >
      <input
        name='username'
        className="px-2 py-4 rounded-md border border-black text-black"
        type="text"
        placeholder='Username'
      />
      <input
        name="email"
        className="px-2 py-4 rounded-md border border-black text-black"
        type="email"
        placeholder='Email'
      />
      <input
        name="password"
        className="px-2 py-4 rounded-md border border-black text-black"
        type="password"
        placeholder='Password'
      />
      <button 
        type="submit"
        className='border border-black text-black bg-slate-400 px-2 py-4 hover:bg-slate-700 rounded-md'
      >
        Register
      </button>
    </form>
  );
}
