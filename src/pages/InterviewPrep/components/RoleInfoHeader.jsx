import React from "react";

const RoleInfoHeader = ({
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
}) => {
  return (
    <div className="relative bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] border-b border-cyan-900 shadow-[0_4px_20px_rgba(0,255,255,0.2)]">
      <div className="container mx-auto px-10 ml-10 md:px-0 relative z-10">
        <div className="h-[200px] flex flex-col justify-center relative">
          {/* Title & Topics */}
          <div className="flex items-start">
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500  animate-textShine">
                    {role}
                  </h2>
                  <p className="text-sm text-gray-300 mt-2">{topicsToFocus}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <div className="text-[12px] font-semibold text-black bg-white px-4 py-1.5 rounded-full shadow-md">
              Experience: {experience} {experience == 1 ? "Year" : "Years"}
            </div>

            <div className="text-[12px] font-semibold text-black bg-white px-4 py-1.5 rounded-full shadow-md">
              {questions} Q&A
            </div>

            <div className="text-[12px] font-semibold text-black bg-white px-4 py-1.5 rounded-full shadow-md">
              Last Updated: {lastUpdated}
            </div>
          </div>
        </div>
      </div>

      {/* Blobs (Background glow effect) */}
      
    </div>
  );
};

export default RoleInfoHeader;
