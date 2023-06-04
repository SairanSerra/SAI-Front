import toast from 'react-hot-toast';

type ToastType = "SUCCESS" | "ERROR" | "WARNING"

const Toast = (type: ToastType, message: string) => {
    type === 'SUCCESS' && (
        toast.success(message, {
            position: 'bottom-right',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        })
    );
    type === 'ERROR' && (
        toast.error(message, {
            position: 'bottom-right',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        })
    );
    type === 'WARNING' && (
        toast.success(message, {
            position: 'bottom-right',
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