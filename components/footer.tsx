import React from 'react';

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; tuannha 2023. All right reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About my portfolio:</span> build with
        Next.js (App Router), Typescript, Framer Motion, Node Mailer, Tailwind
        CSS and Vercel hosting.
      </p>
    </footer>
  );
}
