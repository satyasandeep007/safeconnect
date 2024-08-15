import React from "react";

const Exchange = () => {
  return (
    <div>
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-6">Crypto Exchange</h1>
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-md mx-auto">
          <w3m-onramp-widget />
        </div>
      </div>
    </div>
  );
};

export default Exchange;
