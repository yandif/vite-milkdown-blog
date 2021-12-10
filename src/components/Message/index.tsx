import React, { ReactElement, FunctionComponent } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const MessageProvider: FunctionComponent = ({ children }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export const message = toast;
export default MessageProvider;
