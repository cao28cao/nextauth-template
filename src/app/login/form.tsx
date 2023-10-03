'use client'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function Form() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    console.log({ response });
    if (!response?.error) {
      router.push('/dashboard');
      router.refresh();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const form = e.currentTarget.form;
      if (form) {
        form.dispatchEvent(new Event('submit', { cancelable: true }));
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-auto max-w-md mt-10"
    >
      <input
        name="email"
        className="px-2 py-4 rounded-md border border-black text-black"
        type="email"
        placeholder="Email"
      />
      <input
        name="password"
        className="px-2 py-4 rounded-md border border-black text-black"
        type="password"
        placeholder="Password"
        onKeyDown={handleKeyDown}
      />
      <button
        type="submit"
        className="border border-black text-black bg-slate-400 px-2 py-4 hover:bg-slate-700 rounded-md"
      >
        Login
      </button>
    </form>
  );
}