import React, { useState } from "react";
import { FaArrowLeft, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { NavBar2 } from "./NavBar2";

interface ChangePasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface NavBar2Props {
  isChangePassword?: boolean;
}

const ChangePassword: React.FC<NavBar2Props> = ({ isChangePassword }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ChangePasswordFormData>();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (data: ChangePasswordFormData) => {
    try {
      const response = await fetch("your-api-url", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Password changed successfully");
      } else {
        console.error("Failed to change password");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleToggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleToggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      <NavBar2 isChangePassword={true} />
      <div className="container mx-auto p-4 max-w-md rounded-5 shadow-md login-primary text-white">
        <h2 className="text-2xl font-bold mb-4">Change Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 relative">
            <label htmlFor="currentPassword" className="block text-left text-sm font-medium mb-1">
              Current Password
            </label>
            <div className="input-group">
              <span className="input-group-text"><FaLock /></span>
              <input
                type={showCurrentPassword ? "text" : "password"}
                id="currentPassword"
                {...register("currentPassword", { required: true })}
                className="form-control"
              />
              <button className="show-hide absolute top-3 right-2 text-black" type="button" onClick={handleToggleCurrentPasswordVisibility} style={{ zIndex: 1 }}>
                {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.currentPassword && <span className="text-sm text-red-500">Current Password is required</span>}
          </div>
          <div className="mb-4 relative">
            <label htmlFor="newPassword" className="block text-left text-sm font-medium mb-1">
              New Password
            </label>
            <div className="input-group">
              <span className="input-group-text"><FaLock /></span>
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                {...register("newPassword", { required: true })}
                className="form-control"
              />
              <button className="show-hide absolute top-3 right-2 text-black" type="button" onClick={handleToggleNewPasswordVisibility} style={{ zIndex: 1 }}>
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.newPassword && <span className="text-sm text-red-500">New Password is required</span>}
          </div>
          <div className="mb-4 relative">
            <label htmlFor="confirmPassword" className="block text-left text-sm font-medium mb-1">
              Confirm Password
            </label>
            <div className="input-group">
              <span className="input-group-text"><FaLock /></span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                {...register("confirmPassword", { required: true })}
                className="form-control"
              />
              <button className="show-hide absolute top-3 right-2 text-black" type="button" onClick={handleToggleConfirmPasswordVisibility} style={{ zIndex: 1 }}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.confirmPassword && <span className="text-sm text-red-500">Confirm Password is required</span>}
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-blue-800 text-white py-2 rounded-5 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
