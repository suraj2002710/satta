import React from "react";
import { FaArrowLeft, FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface NavBar2Props {
  isFund?: boolean;
  isStarLine?: boolean;
  isGaliDeswar?: boolean;
  isBidHistory?: boolean;
  isWinHistory?: boolean;
  isHelp?: boolean;
  isMadhurNight?: boolean;
  isGameTime?: boolean;
  isEditProfile?: boolean;
  isWithdraw?: boolean;
  isChangePassword?: boolean;
  isDoublePanna?: boolean;
  isGameRates?: boolean;
  isContactUs?: boolean;
  isWallet?: boolean;
  isJodiPanna?: boolean;
  isFullPanna?: boolean;
  isSinglePanna?: boolean;
  isHalfPanna?: boolean;
  isTrippePanna?: boolean;
  isSingleDigit?: boolean;
  isHalfSangam?: boolean
  isFullSangam?: boolean;
  isTripplePanna?: boolean;
}

export const NavBar2: React.FC<NavBar2Props> = ({
  isFund,
  isGaliDeswar,
  isStarLine,
  isBidHistory,
  isWinHistory,
  isHelp,
  isMadhurNight,
  isGameTime,
  isEditProfile,
  isWithdraw,
  isChangePassword,
  isDoublePanna,
  isGameRates,
  isContactUs,
  isWallet,
  isJodiPanna,
  isSinglePanna,
  isSingleDigit,
  isHalfPanna,
  isFullPanna,
  isTripplePanna,
  isHalfSangam,
  isFullSangam }) => {
  const navigate = useNavigate()

  // console.log({isDoublePanna});


  return (
    <>
      {isBidHistory ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft onClick={() => (navigate(-1))} cursor="pointer" />
          <button className="ml-3 flex items-center font-bold"> Bid History</button>
        </div>
      ) : null}

      {isWinHistory ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft onClick={() => (navigate(-1))} cursor="pointer" />
          <button className="ml-3 flex items-center font-bold"> Win History</button>
        </div>
      ) : null}

      {isFund ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft onClick={() => (navigate(-1))} cursor="pointer" />
          <button className="ml-3 flex items-center font-bold"> Add Points</button>
        </div>
      ) : null}

      {isStarLine || isGaliDeswar ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft onClick={() => (navigate(-1))} cursor="pointer" />
          <button className="ml-3 flex items-center font-bold"> {isGaliDeswar ? "Gali Desawar" : "Star Line"}</button>
        </div>
      ) : null}

      {isHelp ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft onClick={() => (navigate(-1))} cursor="pointer" />
          <button className="ml-3 flex items-center font-bold"> How to Play</button>
        </div>
      ) : null}


      {isMadhurNight ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft onClick={() => (navigate(-1))} cursor="pointer" />
          <button className="ml-3 flex items-center font-bold"> Madhur Night</button>
        </div>
      ) : null}

      {isGameTime ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft onClick={() => (navigate(-1))} cursor="pointer" />
          <button className="ml-3 flex items-center font-bold">03:00 PM</button>
        </div>
      ) : null}



      {isEditProfile ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft onClick={() => (navigate(-1))} cursor="pointer" />
          <button className="ml-3 flex items-center font-bold">Edit Profile</button>
        </div>
      ) : null}


      {isWithdraw ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft onClick={() => (navigate(-1))} cursor="pointer" />
          <button className="ml-3 flex items-center font-bold">Withdraw</button>
          <button className="text-right w-100 flex justify-end align-center items-center"> <FaWallet size={30} /> 1000</button>
        </div>
      ) : null}


      {isChangePassword ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft onClick={() => (navigate(-1))} cursor="pointer" />
          <button className="ml-3 flex items-center font-bold">Change Password</button>
        </div>
      ) : null}


      {isDoublePanna
        || isSinglePanna
        || isHalfPanna
        || isFullPanna
        || isJodiPanna
        || isTripplePanna
        || isSingleDigit
        || isFullSangam
        || isHalfSangam
        ? (
          <div className="navbar-main p-3 mb-2 text-left flex items-center text-white">
            <FaArrowLeft onClick={() => (navigate(-1))} cursor="pointer" />
            <button className="ml-3 flex items-center font-bold">
              {isSinglePanna ? "Single Panna" : null}
              {isSingleDigit ? "Single Digit" : null}
              {isHalfPanna ? "Half Sangam" : null}
              {isDoublePanna ? "Double Panna" : null}
              {isFullSangam ? "Full Sangam" : null}
              {isJodiPanna ? "Jodi Panna" : null}
              {isTripplePanna ? "Tripple Panna" : null}
              {isHalfSangam ? "Half Sangam" : null}
            </button>
          </div>
        ) : null}



      {isGameRates ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft onClick={() => (navigate(-1))} cursor="pointer" />
          <button className="ml-3 flex items-center font-bold">Game Rates</button>
        </div>
      ) : null}


      {isContactUs ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft onClick={() => (navigate(-1))} cursor="pointer" />
          <button className="ml-3 flex items-center font-bold">ContactUs</button>
        </div>
      ) : null}


      {isWallet ? (
        <div className="navbar-main p-3 mb-6 text-left flex items-center text-white">
          <FaArrowLeft onClick={() => (navigate(-1))} cursor="pointer" />
          <button className="ml-3 flex items-center font-bold">Wallet</button>
        </div>
      ) : null}



    </>
  )
};



















