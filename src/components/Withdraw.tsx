import React from "react";
import { FaArrowLeft, FaUniversity, FaPhoneAlt, FaGooglePay, FaPaypal } from "react-icons/fa";
import { NavBar2 } from "./NavBar2";

const Withdraw = () => {
  const token =  localStorage.getItem("token") || ''

  const createPayment=async()=>{
    try {
      const response = await fetch("https://smapidev.co.in/api/Api/withdraw", {
        method: "POST",
        // body: formData,
        headers: {
          token,
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cookie': 'ci_session=0b0000be09ab15b1746f67a94c05d0d6761be9f3'
        },
      });
      response.json().then((data: any) => {
        alert(data.message)
        // navigate("/login")
      }).catch((error: any) => {
        console.log({ error });
        alert(error)
      })
    } catch (error) {
      
    }
  }

  return (
    <div className="px-15">
      <NavBar2 isWithdraw={true} />
      <div className="container py-1">
        <h2 className="Withdraw Open text-left mb-2">Withdraw Open Time : 06:00 AM</h2>
        <h2 className="Withdraw Open text-left mb-2">Withdraw Open Time : 12:00 PM</h2>
        <h2 className="font-bold text-left mb-2 text-blue-800">Payment Method</h2>
      </div>
      <div className="container flex justify-between">
        <button className="flex flex-col items-center space-y-1 border border-blue-500 text-blue-500 px-4 py-2 rounded-md">
          <FaUniversity className="text-3xl" /> <span>Bank</span>
        </button>
        <button className="flex flex-col items-center space-y-1 border border-green-500 text-green-500 px-4 py-2 rounded-md">
          <FaPhoneAlt className="text-3xl" /> <span>Phone Pay</span>
        </button>
        <button className="flex flex-col items-center space-y-1 border border-yellow-500 text-yellow-500 px-4 py-2 rounded-md">
          <FaGooglePay className="text-3xl" /> <span>Google Pay</span>
        </button>
        <button className="flex flex-col items-center space-y-1 border border-indigo-500 text-indigo-500 px-4 py-2 rounded-md">
          <FaPaypal className="text-3xl" /> <span>Paytm</span>
        </button>
      </div>
      <div className="container mt-4 text-left">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Withdraw Funds
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="Enter Amount"
          className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <h2 className="mt-2 text-sm text-gray-600">Minimum Withdraw Amount: 500</h2>
        <h2 className="font-bold text-blue-800 mt-4">Select Payment Method</h2>
      
        <div className="mt-4 flex justify-between inline mx-auto">
          <button className="add-payment-method hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
           ADD PAYMENT METHOD
          </button>
          <button className="custom-color hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
            SUBMIT REQUEST
          </button>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
