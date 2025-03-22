"use client";
import { useState } from "react";

const Player = () => {
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("9:10");

  return (
    <div className="h-20 bg-pink-600 flex items-center px-4 text-white">
      {/* Song info */}
      <div className="flex items-center w-1/4">
        <div className="w-12 h-12 bg-pink-700 rounded-full flex items-center justify-center mr-3">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <h4 className="font-bold">Mind-Blowing</h4>
          <p className="text-sm opacity-80">Various Artists</p>
        </div>
      </div>

      {/* Player controls */}
      <div className="flex-1 flex flex-col items-center mr-6">
        <div className="flex items-center space-x-6">
          <button className="opacity-70 hover:opacity-100">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
            </svg>
          </button>
          <button className="opacity-70 hover:opacity-100">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" />
            </svg>
          </button>
          <button className="bg-white text-pink-600 rounded-full w-10 h-10 flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="opacity-70 hover:opacity-100">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798L4.555 5.168z" />
            </svg>
          </button>
          <button className="opacity-70 hover:opacity-100">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full flex items-center mt-2">
        <span className="text-xs mr-2">{currentTime}</span>
        <div className="flex-1 h-1 bg-pink-700 rounded-full">
          <div className="h-full w-1/3 bg-white rounded-full"></div>
        </div>
        <span className="text-xs ml-2">{duration}</span>
      </div>

      {/* Volume controls */}
      <div className="w-1/4 flex justify-end items-center space-x-4">
        <button className="opacity-70 hover:opacity-100">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="w-24 h-1 bg-pink-700 rounded-full">
          <div className="h-full w-2/3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Player;
