'use client';

import { signOut } from 'next-auth/react';

export default function Logout() {
  return (
    <button
      onClick = {() => signOut()}
      className="border border-black text-black"
    >
      Logout
    </button>
  );
}
