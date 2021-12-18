import { FunctionComponent } from 'react';
import toast, { Toaster } from 'react-hot-toast';

/**
 *  消息提示组件
 */
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
