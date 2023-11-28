import { useState, useEffect } from 'react';

const Alert = ({ type, text }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const alertClass = type === 'danger' ? 'bg-red-500' : 'bg-blue-500';
  const iconClass = type === 'danger' ? 'text-red-800' : 'text-blue-800';
  const title = type === 'danger' ? 'Failed' : 'Success';

  return (
    <>
      {visible && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2">
          <div
            className={`bg-gray-900 text-white rounded-lg shadow-lg p-4 flex items-center justify-between border-l-4 ${alertClass}`}
            role="alert"
          >
            <div className="flex items-center">
              <span className={`rounded-full ${iconClass} bg-white mr-3 p-2`}>
                {type === 'danger' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <p className="text-sm font-semibold">{title}</p>
            </div>
            <p className="text-sm">{text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
