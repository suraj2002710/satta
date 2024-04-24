import React from 'react';
import { FaWallet, FaMoneyBill, FaExchangeAlt, FaMoneyCheckAlt } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { NavBar2 } from './NavBar2';

const Wallet = () => {
  return (
    <div>
      <NavBar2 isWallet={true} />
      <div className="container mx-auto relative">
        {/* Add Points Button */}
        <button className="bg-blue-800 add-points text-white py-3 px-6 rounded-lg absolute top-0 right-0 mt-4 mr-4 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 z-50">
          Add Points
        </button>
        {/* Total Balance Card */}
        <div className="bg-white rounded-lg shadow-md p-3 mb-3 relative">
          <div className="flex items-center justify-around mb-2">
            {/* <FaWallet className="text-blue-500 text-3xl mr-2" /> */}
            <p className="text-lg font-semibold">Total Balance</p>
          </div>
          <p className="text-2xl font-semibold text-gray-800">$1000</p>
        </div>
        {/* Withdraw and Bank Method Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <button className="bg-blue-800 text-white py-3 rounded-lg flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            <FaMoneyBill className="text-lg mr-2" />
            <span>Withdraw</span>
          </button>
          <button className="bg-blue-800 text-white py-3 rounded-lg flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            <FaExchangeAlt className="text-lg mr-2" />
            <span>Bank Method</span>
          </button>
        </div>
        {/* Transfer Button */}
        <button className="bg-blue-800 flex justify-center mb-10 text-white py-3 rounded-lg w-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          <FaExchangeAlt className="text-lg mr-2" />
          <span>Transfer</span>
        </button>
        {/* Welcome Bonus Card */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center justify-between mb-2">
            <FaMoneyCheckAlt className="text-green-500 text-3xl mr-2" />
            <p className="text-lg font-semibold">Welcome Bonus</p>
          </div>
          <p className="text-xl font-semibold text-gray-800">+5</p>
          <div className="flex items-center text-gray-600">
            <MdDateRange className="text-lg mr-1" />
            <p>2023-11-12 12:23:22</p>
          </div>
          <p className="text-sm text-gray-600">Successful</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
