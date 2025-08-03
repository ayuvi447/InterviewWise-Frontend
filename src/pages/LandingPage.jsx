import React, { useState, useContext } from "react";
import HERO_IMG from "../assets/hero-img.png";
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";
import Modal from "../components/Modal";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import { UserContext } from "../context/userContext";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      {/* Hero Section with New Background */}
      <div className="w-full min-h-full bg-[#050505] relative overflow-hidden bg-grid ">
        {/* Cyan Glow */}
        <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] flex justfify-between bg-cyan-500/20 blur-[120px] rounded-full"></div>

        <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10 m-5 ">
          {/* Header */}
          <header className="flex justify-between items-center mb-16">
            <div className="text-xl font-bold text-cyan-400">
              Interview Wise
            </div>
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="bg-gradient-to-r bg-cyan-400 border-none hover:bg-rose-200 text-sm font-semibold text-white px-7 py-2.5 rounded-full  hover:text-white border border-white transition-colors cursor-pointer"
                onClick={() => setOpenAuthModal(true)}
              >
                Login / Sign Up
              </button>
            )}
          </header>

          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-center ml-10">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0 ml-10">
              <div className="flex items-center justify-left mb-2 ">
                <div className="flex items-center gap-2 text-[13px] text-cyan-400 font-semibold bg-cyan-100/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  <LuSparkles /> Driven by AI
                </div>
              </div>

              <h1 className="text-5xl text-white font-bold mb-6 leading-tight">
                Ace Any Job Interview
                <br />
                With <span className="text-cyan-400">Interview Wise AI™</span>
              </h1>

              <p className="text-lg text-gray-300 mb-6">
                #1 AI-powered copilot that{" "}
                <span className="font-semibold text-white">
                  empowers every job seeker
                </span>
              </p>
            </div>

            <div className="w-full md:w-1/2">
              <p className="text-[17px] text-gray-200 md:mr-20 mb-6 leading-relaxed tracking-wide md:max-w-xl">
                Access{" "}
                <span className="text-cyan-400 font-semibold hover:underline cursor-pointer">
                  targeted questions
                </span>{" "}
                tailored to your role, enhance your answers with{" "}
                <span className="text-cyan-400 font-semibold hover:underline cursor-pointer">
                  intelligent AI guidance
                </span>
                , and master every concept with ease. From{" "}
                <span className="text-cyan-400 font-semibold hover:underline cursor-pointer">
                  prep to perfection
                </span>
                , your{" "}
                <span className="text-cyan-400 font-semibold hover:underline cursor-pointer">
                  ultimate interview companion
                </span>{" "}
                is here smart, structured, and built for success.
              </p>

              <button
                className="bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rest Content (unchanged) */}
      <div className="w-full min-h-full relative z-10">
        <div>
          <section className="flex items-center justify-center -mt-36">
            <img
              src={HERO_IMG}
              alt="Hero Image"
              className="w-[80vw] rounded-lg"
            />
          </section>
        </div>

        <div className="w-full min-h-full bg-[] mt-10">
          <div className="container mx-auto px-4 pt-10 pb-20">
            <section className="mt-5">
              <h2 className="text-4xl font-extrabold text-center  bg-clip-text bg-gradient-to-r text-white animate-textShine mb-12">
                Features That Make You{" "}
                <span className="relative text-cyan-400 inline-block">
                  Shine
                  <span className="block h-[3px] w-full mt-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-shineLine"></span>
                </span>
              </h2>

              <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col items-center gap-8">
                  {/* First 3 cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {APP_FEATURES.slice(0, 3).map((feature) => (
                      <div
                        key={feature.id}
                        className="bg-[#0E0E0E] p-6 rounded-xl border border-cyan-500 hover:border-cyan-400 hover:shadow-[0_0_15px_2px_rgba(0,255,255,0.4)] transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          {feature.icon && (
                            <div className="text-cyan-400 text-2xl">
                              {feature.icon}
                            </div>
                          )}
                          <h3 className="text-lg font-semibold text-white">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Remaining 2 cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {APP_FEATURES.slice(3).map((feature) => (
                      <div
                        key={feature.id}
                        className="bg-[#0E0E0E] p-6 rounded-xl border border-cyan-500 hover:border-cyan-400 hover:shadow-[0_0_15px_2px_rgba(0,255,255,0.4)] transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          {feature.icon && (
                            <div className="text-cyan-400 text-2xl">
                              {feature.icon}
                            </div>
                          )}
                          <h3 className="text-lg font-semibold text-white">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="text-sm bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-gray-300 text-center p-5 mt-5 rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.2)] border border-cyan-800">
          Made with <span className="text-red-500 animate-pulse">❤️</span> by{" "}
          <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer">
            Vicky
          </span>{" "}
          — All the best for your journey!{" "}
          <span className="animate-bounce inline-block">🚀</span>
        </div>
      </div>

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
