import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaChartBar, FaHistory, FaHome, FaLock, FaMoneyBill, FaMoneyCheck, FaPhone, FaQuestionCircle, FaShareAlt, FaStar, FaTrophy, FaUser, FaWallet } from "react-icons/fa";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemIcon, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Navbar: React.FC = () => {
  const token = localStorage.getItem("token") || '';
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  const [walletValue, setWalletValue] = useState();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    walletData()
  }, [])


  const walletData = async () => {
    try {

      const response = await fetch("https://smapidev.co.in/api/Api/user_status", {
        method: "POST",
        headers: {
          token,
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cookie': 'ci_session=0b0000be09ab15b1746f67a94c05d0d6761be9f3'
        },
      });
      response.json().then((data: any) => {
        setWalletValue(data?.data?.available_points)
      }).catch((error: any) => {
        // console.log({ error });
        // alert(error)
      })
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };


  const items = [
    // { text: "test", icon: <FaWallet size={30} /> },
    { path: '/', text: "Home", icon: <FaHome /> },
    { path: '/editprofile', text: "See Full Profile", icon: <FaUser /> },
    { path: '/funds', text: "Add Funds", icon: <FaMoneyBill /> },
    { path: '/withdraw', text: "Withdraw", icon: <FaMoneyCheck /> },
    { path: '/wallet', text: "Wallet Statement", icon: <FaWallet /> },
    { path: '/winhistory', text: "Win History", icon: <FaTrophy /> },
    { path: '/bidhistory', text: "Bid History", icon: <FaHistory /> },
    { path: '/gamerates', text: "Game Rates", icon: <FaChartBar /> },
    { path: '/help', text: "How to Play", icon: <FaQuestionCircle /> },
    { path: '/contactus', text: "Contact Us", icon: <FaPhone /> },
    { path: '/share', text: "Share with Friends", icon: <FaShareAlt /> },
    { path: '/rateapp', text: "Rate App", icon: <FaStar /> },
    { path: '/ChangePassword', text: "Change Password", icon: <FaLock /> },
    { path: '/logout', text: "Logout", icon: <FaLock /> },
  ];


  const handleItemClick = (item: string) => {
    if (item === "/logout") {
      localStorage.removeItem("token");

      dispatch({ type: 'LOGIN_FAILURE', payload: { token: null, isLoggedIn: false } });


      navigate("login")
    }
    else {
      navigate(item)
    }
  };

  return (
    <div className="navbar-main p-3 bg-blue-800">


      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-sm font-medium flex items-center">
          <FaWallet size={30} /> {walletValue}
        </div>

        <div className="text-white text-md font-medium overflow-hidden">
          <div className="marquee font-bold">Welcome to Kalyan Satta Matka</div>
        </div>

        <div onClick={toggleSidebar} className="lg:flex items-center">
          <span className="text-white pr-2 flex items-center justify-between">
            <FaBars />
          </span>
        </div>
      </div>



      <div className="app-container overflow-7">
        {/* Your existing app content */}
        <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
          <div className="custom-color mx-auto w-500 text-white">
            <List>
              {items.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => handleItemClick(item.path)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </div>

    </div>
  );
};

export default Navbar;