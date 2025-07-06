import React from "react";

const Success = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-white bg-opacity-50 flex justify-center items-center w-screen h-screen">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Order Successful!</h2>
        <p className="text-gray-700 mb-4">Your order has been placed successfully.</p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Success;