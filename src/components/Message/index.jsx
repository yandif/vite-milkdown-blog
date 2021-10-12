import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const message = toast;

export default function MessageProvider({ children }) {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
