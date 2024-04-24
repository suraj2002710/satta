import React, { useState } from "react";
import { FaArrowLeft, FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import userCircle from "../images/user-circle 1.png";
import { NavBar2 } from "./NavBar2";

interface ProfileFormData {
  name: string;
  email: string;
  mobile: string;
}

interface NavBar2Props {
  isEditProfile?: boolean;
}

export const EditProfile: React.FC<NavBar2Props> = ({ isEditProfile }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>();
  const [profileImage, setProfileImage] = useState(userCircle);

  const onSubmit = async (data: ProfileFormData) => {
    try {
      const response = await fetch("your-api-url", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Profile updated successfully");
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setProfileImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <NavBar2 isEditProfile={true} />
      <div className="d-flex justify-content-center mt-6 position-relative">
        <img src={profileImage} alt="Profile Image" className="w-24 h-24 rounded-circle mb-4" />
        <label htmlFor="edit-profile" className="edit-profile-icon">
          <FaEdit />
          <input
            type="file"
            id="edit-profile"
            className="d-none"
            onChange={handleImageChange}
          />
        </label>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-100 text-left container">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            placeholder="Name"
            className={`form-control ${errors.name && "is-invalid"}`}
          />
          <div className="invalid-feedback">{errors.name?.message}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
            className={`form-control ${errors.email && "is-invalid"}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile</label>
          <input
            type="text"
            id="mobile"
            {...register("mobile", {
              required: "Mobile is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Invalid mobile number",
              },
            })}
            placeholder="Mobile"
            className={`form-control ${errors.mobile && "is-invalid"}`}
          />
          <div className="invalid-feedback">{errors.mobile?.message}</div>
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;
