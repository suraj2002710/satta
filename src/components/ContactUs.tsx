import React from 'react';
import { FaPhoneAlt, FaTelegram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { NavBar2 } from './NavBar2';

const ContactUs = () => {
  return (
    <div>
      <NavBar2 isContactUs={true} />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Mobile Number */}
          <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
            <FaPhoneAlt className="text-blue-500 mr-2" />
            <div>
              <p className="text-lg font-semibold">Mobile Number</p>
              <p className="text-gray-600">+1234567890</p>
            </div>
          </div>
          {/* Telegram */}
          <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
            <FaTelegram className="text-blue-500 mr-2" />
            <div>
              <p className="text-lg font-semibold">Telegram</p>
              <a href="#" className="text-gray-600">t.me/example</a>
            </div>
          </div>
          {/* WhatsApp */}
          <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
            <FaWhatsapp className="text-green-500 mr-2" />
            <div>
              <p className="text-lg font-semibold">WhatsApp</p>
              <p className="text-gray-600">+1234567890</p>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
            <FaEnvelope className="text-red-500 mr-2" />
            <div>
              <p className="text-lg font-semibold">Email</p>
              <a href="mailto:example@example.com" className="text-gray-600">example@example.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
