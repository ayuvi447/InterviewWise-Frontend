import React, { useEffect, useRef, useState } from "react";
import { LuChevronDown, LuPin, LuPinOff, LuSparkles, LuMic } from "react-icons/lu";
import AIResponsePreview from "../../pages/InterviewPrep/components/AIResponsePreview";
import   uploadAudioForTranscription  from "../../utils/audio.js";

const QuestionCard = ({
  question,
  answer,
  onLearnMore,
  isPinned,
  onTogglePin,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const contentRef = useRef(null);
  const recorderRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight + 12);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Start recording
  const startRecording = async () => {
    setIsRecording(true);
    recorderRef.current = await startAudioRecording(async (audioBlob) => {
      // Upload after recording
      const text = await uploadAudioForTranscription(audioBlob);
      setTranscript(text);
      setIsRecording(false);
    });

    // Auto stop after 5 sec
    setTimeout(() => stopRecording(), 5000);
  };

  const stopRecording = () => {
    if (recorderRef.current) {
      recorderRef.current.stop();
      recorderRef.current = null;
    }
  };

  return (
    <div className="bg-[#111] border border-gray-800 hover:border-cyan-400/60 rounded-xl mb-5 overflow-hidden transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(0,255,255,0.08)]">
      {/* Question Header */}
      <div className="flex items-start justify-between p-5 cursor-pointer">
        <div className="flex items-start gap-3.5">
          <span className="text-sm md:text-base font-semibold text-cyan-400 leading-[18px]">
            Q
          </span>
          <h3
            className="text-sm md:text-[15px] font-medium text-gray-200 mr-0 md:mr-20"
            onClick={toggleExpand}
          >
            {question}
          </h3>
        </div>

        <div className="flex items-center justify-end ml-4 relative">
          <div className={`flex ${isExpanded ? "md:flex" : "md:hidden group-hover:flex"}`}>
            {/* Pin Button */}
            <button
              className="flex items-center gap-2 text-xs text-cyan-300 font-medium bg-[#1a1a1a] px-3 py-1 mr-2 rounded-full border border-cyan-900 hover:border-cyan-500 transition-all"
              onClick={onTogglePin}
            >
              {isPinned ? <LuPinOff className="text-xs" /> : <LuPin className="text-xs" />}
            </button>

            {/* Recording Button */}
            <div className="flex flex-col items-start">
              <button
                className="flex items-center gap-2 text-sm text-white bg-cyan-600 hover:bg-cyan-700 px-3 py-1 rounded-full shadow-md"
                onClick={startRecording}
                disabled={isRecording}
              >
                <LuMic /> {isRecording ? "Recording..." : "Answer"}
              </button>
              {isRecording && (
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
                  <span className="text-red-400 text-xs animate-pulse">Recording...</span>
                </div>
              )}
            </div>

            {/* Learn More */}
            <button
              className="flex items-center gap-2 text-xs text-purple-300 font-medium bg-[#1a1a1a] px-3 py-1 mr-2 rounded-full border border-purple-900 hover:border-purple-500 transition-all"
              onClick={() => {
                setIsExpanded(true);
                onLearnMore();
              }}
            >
              <LuSparkles />
              <span className="hidden md:block cursor-pointer">Learn More</span>
            </button>
          </div>

          {/* Chevron */}
          <button
            className="text-gray-500 hover:text-cyan-400 transition-transform"
            onClick={toggleExpand}
          >
            <LuChevronDown
              size={20}
              className={`transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Expandable Content */}
      <div className="overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: `${height}px` }}>
        <div ref={contentRef} className="mt-2 text-gray-300 bg-[#1b1b1b] px-6 py-4 rounded-b-xl border-t border-gray-800">
          <AIResponsePreview content={answer} />
          {transcript && (
            <div className="mt-3 text-xs text-green-400">
              <strong>Transcript:</strong> {transcript}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
