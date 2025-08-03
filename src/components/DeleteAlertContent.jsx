import React from 'react';

const DeleteAlertContent = ({ content, onDelete }) => {
  return (
    <div className="p-6">
      <p className="text-sm text-gray-800 leading-relaxed">
        {content}
      </p>

      <div className="flex justify-end mt-6 space-x-3">
        <button
          type="button"
          className="px-5 py-2.5 text-sm cursor-pointer font-semibold text-white bg-rose-500 rounded-full shadow-md hover:bg-rose-600 transition-all duration-300"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlertContent;
