"use client";

import { useState } from "react";

export default function VoiceWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
      {/* Voice Panel */}
      {isOpen && (
        <div className="w-[300px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-[#233C6F] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Voice Assistant</h3>
                <span className="text-white/60 text-xs">Powered by AI</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors p-1"
              aria-label="Close voice assistant"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-[#EF5E33]/10 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-[#EF5E33]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#EF5E33]/10 text-[#EF5E33] font-semibold text-xs px-3 py-1.5 rounded-full mb-3">
              <span className="w-2 h-2 bg-[#EF5E33] rounded-full animate-pulse" />
              Coming Soon
            </div>

            <h4 className="text-[#233C6F] font-bold text-lg mb-2">
              Talk to Akwaaba AI
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Our voice assistant will let you interact with Akwaaba AI using natural speech. Speak in English or Twi!
            </p>

            <button
              disabled
              className="w-full py-3 bg-gray-100 text-gray-400 font-semibold rounded-xl cursor-not-allowed text-sm"
            >
              🎙️ Voice Coming Soon
            </button>

            <p className="text-xs text-gray-400 mt-3">
              Powered by ElevenLabs AI
            </p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-gray-600 hover:bg-gray-700"
            : "bg-[#233C6F] hover:bg-[#1B2F57] hover:scale-110"
        }`}
        aria-label={isOpen ? "Close voice assistant" : "Open voice assistant"}
      >
        {isOpen ? (
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        )}
      </button>
    </div>
  );
}
