'use client';

import React from 'react';
import { MdDarkMode } from 'react-icons/md';
import './_sidebar.scoped.scss';

export default function Navbar() {
  return (
    <nav className='nav-sign-in absolute top-0 flex w-full justify-between p-5'>
      <h2>Golobe</h2>
      <button
        onClick={() => {
          document.body.classList.toggle('dark-mode');
        }}
      >
        <MdDarkMode />
      </button>
    </nav>
  );
}
