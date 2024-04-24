import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NavBar2 } from "./NavBar2";

interface NavBar2Props {
  isFund?: boolean;
  isBidHistory?: boolean;
  isWinHistory?: boolean;
}

export const Funds: React.FC<NavBar2Props> = ({
  isFund,
  isBidHistory,
  isWinHistory,
}) => {
  const [selectedPoints, setSelectedPoints] = useState<number | null>(null);

  const handlePointSelection = (points: number) => {
    setSelectedPoints(points);
    const inputElement = document.getElementById(
      "pointsInput"
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = points.toString();
    }
  };

  return (
    <div>
      <NavBar2 isFund={true} />
      <div className="container">
        <input
          id="pointsInput"
          className="form-control p-4"
          placeholder="Points"
          name="myInput"
        />
        <h2 className="text-blue-900 text-left mt-4">Select Point Amount</h2>
        <ul className="flex ml-3 pb-3">
          <li>
            <button
              onClick={() => handlePointSelection(500)}
              className={`btn-funds rounded-full py-2 px-4 text-white text-left flex justify-left mt-4 ${
                selectedPoints === 500 ? 'bg-yellow-500' : 'bg-blue-900'
              }`}
            >
              500
            </button>
          </li>
          <li>
            <button
              onClick={() => handlePointSelection(1000)}
              className={`btn-funds rounded-full py-2 px-4 text-white text-left flex justify-left mt-4 ml-3 ${
                selectedPoints === 1000 ? 'bg-yellow-500' : 'bg-blue-900'
              }`}
            >
              1000
            </button>
          </li>
          <li>
            <button
              onClick={() => handlePointSelection(2000)}
              className={`btn-funds rounded-full py-2 px-4 text-white text-left flex justify-left mt-4 ml-3 ${
                selectedPoints === 2000 ? 'bg-yellow-500' : 'bg-blue-900'
              }`}
            >
              2000
            </button>
          </li>
        </ul>
        <ul className="flex ml-3 pb-3">
          <li>
            <button
              onClick={() => handlePointSelection(5000)}
              className={`btn-funds rounded-full py-2 px-4 text-white text-left flex justify-left mt-2 ${
                selectedPoints === 5000 ? 'bg-yellow-500' : 'bg-blue-900'
              }`}
            >
              5000
            </button>
          </li>
          <li>
            <button
              onClick={() => handlePointSelection(10000)}
              className={`btn-funds rounded-full py-2 px-4 text-white text-left flex justify-left mt-2 ml-3 ${
                selectedPoints === 10000 ? 'bg-yellow-500' : 'bg-blue-900'
              }`}
            >
              10000
            </button>
          </li>
        </ul>
        <ul className="ml-3 pb-3 text-left">
          <li className="mt-2 text-blue-900">
            {" "}
            <input type="radio" name="myRadio" value="option2" /> Google Pay
          </li>
          <li className="mt-2 text-blue-900">
            {" "}
            <input type="radio" name="myRadio" value="option2" /> Phone Pe
          </li>
          <li className="mt-2 text-blue-900">
            {" "}
            <input type="radio" name="myRadio" value="option2" /> Paytm
          </li>
          <li>
            {" "}
            <button className="btn-funds rounded-lg bg-blue-900 py-2 px-4 text-white text-left flex justify-left mt-4 ml-3 mx-auto">
              Submit Request
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
