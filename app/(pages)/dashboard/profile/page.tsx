"use client";
import { FormRow, SubmitBtn } from "@/app/components";
import Wrapper from "@/app/styles/DashboardFormPage";
import customFetch from "@/app/utils/fetchUtils";
import { toast } from "react-toastify";
import { useDashboardContext } from "@/app/context/DashboardContext";
import { useState } from "react";

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    location: "",
    avatar: null,
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        formDataToSend.append(key, value);
      }
    });

    const file = formDataToSend.get("avatar");
    if (file instanceof File && file?.size > 500000) {
      toast.error("Image size too large");
      return null;
    }
    try {
      await customFetch.patch("/users/update-user", formDataToSend);
      toast.success("Profile Updated successfully");
    } catch (error) {
      console.error(error);
      toast.error((error as any)?.response?.data?.message);
    }
  };

  const handleChange = (event: any) => {
    const { name, value, files } = event.target;

    // Check if the target element is a file input
    const newValue = name === "avatar" ? files[0] : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };
  const { user }: any = useDashboardContext();
  const { name, lastName, email, location } = user;

  return (
    <Wrapper>
      <form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">profile</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              Select an image file (max 0.5 MB)
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className="form-input"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <FormRow
            type="text"
            name="name"
            defaultValue={name}
            onChange={handleChange}
          />
          <FormRow
            type="text"
            name="lastName"
            labelText="last name"
            defaultValue={lastName}
            onChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            defaultValue={email}
            onChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            defaultValue={location}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className={"btn btn-block form-btn "}
          >
            Submit
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
