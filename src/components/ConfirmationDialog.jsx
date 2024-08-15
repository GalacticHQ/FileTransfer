// src/components/ConfirmationDialog.js
import React from 'react';

const ConfirmationDialog = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-gray-700 mb-4">Do you want to share this file?</p>
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className="mr-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
