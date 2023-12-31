"use client";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../styles/LogoutContainer";
import { useState } from "react";
import Image from "next/image";
import { useDashboardContext } from "@/app/context/DashboardContext";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser }: any = useDashboardContext();

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        {user?.avatar !== "null" && user?.avatar ? (
          <Image
            src={user.avatar}
            alt="avatar"
            width={25}
            height={25}
            className="img"
          />
        ) : (
          <FaUserCircle />
        )}
        {user?.avatar}
        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
