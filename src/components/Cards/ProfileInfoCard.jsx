import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handelLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  return (
    user && (
      <div className="flex items-center p-2 rounded-lg hover:bg-gray-800/50 transition">
        <img
          src={user.profileImageUrl}
          alt=""
          className="w-11 h-11 rounded-full mr-3 border border-gray-600 shadow-md"
        />
        <div>
          <div className="text-[15px] text-white font-semibold leading-4">
            {user.name || ""}
          </div>
          <button
            className="text-[#FF9324] text-sm font-semibold cursor-pointer hover:text-orange-400 transition-colors"
            onClick={handelLogout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ProfileInfoCard;
