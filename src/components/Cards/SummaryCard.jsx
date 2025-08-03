import React from "react";
import { LuTrash2 } from "react-icons/lu";
import { getInitials } from "../../utils/helper";

const SummaryCard = ({
  colors,
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
  onSelect,
  onDelete,
}) => {
  return (
    <div
      className="bg-gray-900/80 border border-gray-700 rounded-2xl p-3 overflow-hidden cursor-pointer hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,147,36,0.4)] transition-all duration-300 relative group backdrop-blur"
      onClick={onSelect}
    >
      <div
        className="rounded-xl p-4 relative transition-colors duration-300"
        style={{
          background: colors.bgcolor || "rgba(255,255,255,0.05)",
        }}
      >
        <div className="flex items-start">
          {/* Initials Badge */}
          <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mr-4 shadow-md border border-gray-700">
            <span className="text-lg font-bold text-white">
              {getInitials(role)}
            </span>
          </div>

          {/* Role and Topics */}
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-[17px] font-semibold ">
                  {role}
                </h2>
                <p className="text-xs font-medium ">
                  {topicsToFocus}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Delete Button */}
        <button
          className="hidden group-hover:flex items-center gap-2 text-xs text-red-400 font-medium px-3 py-1 rounded-full border border-red-500/40 hover:bg-red-600/20 absolute top-3 right-3 shadow-sm transition"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <LuTrash2 />
          Delete
        </button>
      </div>

      {/* Bottom Section */}
      <div className="px-2 pb-2 pt-3">
        {/* Metadata badges */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-[10px] font-medium text-orange-300 px-3 py-1 bg-gray-800 rounded-full border border-gray-600">
            Experience: {experience} {experience == 1 ? "Year" : "Years"}
          </div>

          <div className="text-[10px] font-medium text-orange-300 px-3 py-1 bg-gray-800 rounded-full border border-gray-600">
            {questions} Q&A
          </div>

          <div className="text-[10px] font-medium text-orange-300 px-3 py-1 bg-gray-800 rounded-full border border-gray-600">
            Last Updated: {lastUpdated}
          </div>
        </div>

        {/* Description */}
        <p className="text-[12px] text-gray-400 font-medium line-clamp-2 mt-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
