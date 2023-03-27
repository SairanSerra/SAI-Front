import React from 'react';
import toast from 'react-hot-toast';

const Toast = (type, message) => {
  type === 'SUCCESS' && (
    toast.success(message, {
      position: 'top-center',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
  );
  type === 'ERROR' && (
    toast.error(message, {
      position: 'top-center',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
  );
  type === 'WARNING' && (
    toast.success(message, {
      position: 'top-center',
      duration: 2000,
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
      icon: '⚠️',
    })
  );
};

export default Toast;