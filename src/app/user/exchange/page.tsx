"use client";

const Exchange = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Left Side: Information about Onramp */}
      <div className="flex-1 bg-white p-6 shadow-xl rounded-lg max-w-md mx-auto  bg-gradient-to-r from-blue-400 to-purple-500 ">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          What is Onramp?
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Onramp allows you to easily convert fiat currency into cryptocurrency
          directly within the app. With Onramp, you can quickly buy popular
          digital assets and get started with your crypto journey seamlessly.
          Enjoy a smooth and secure onboarding process without the hassle.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Supported Assets
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Bitcoin (BTC)</li>
          <li>Ethereum (ETH)</li>
          <li>USD Coin (USDC)</li>
          <li>Other popular cryptocurrencies</li>
        </ul>
      </div>

      {/* Right Side: Onramp Widget and Swap Button */}
      <div className="flex-1 bg-white p-6 shadow-xl rounded-lg max-w-md mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">On Ramp</h1>
        <w3m-onramp-widget aria-label="Onramp Widget" />
        <span className="text-sm"> Powered By Coinbase</span>
      </div>
    </div>
  );
};

export default Exchange;
