'use client';
import { signOut } from 'next-auth/react';

export default function Logout() {
  return (
    <button
      onClick = {() => signOut()}
      className="border rounded-md border-black bg-slate-400"
    >
      Logout
    </button>
  );
}
