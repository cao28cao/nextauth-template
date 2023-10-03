'use client';
import { signOut } from 'next-auth/react';

export default function Logout() {
  return (
    <button
      onClick = {() => signOut()}
      className="px-8 py-4 border rounded-md border-black bg-slate-400 hover:bg-slate-600"
    >
      Logout
    </button>
  );
}
