"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const quickResponses = [
  { label: "What is Akwaaba AI?", response: "Akwaaba AI is an AI-powered business communication platform built for Ghana. We help businesses manage customer conversations across WhatsApp, SMS, Web Chat, and more — all from one dashboard." },
  { label: "How much does it cost?", response: "We offer a free plan to get started! Our paid plans start from GHS 99/month. Visit our pricing page for full details, or contact our sales team for enterprise pricing." },
  { label: "What channels do you support?", response: "We support WhatsApp Business API, SMS, Web Chat, Facebook Messenger, and Instagram DMs. All channels are managed from a single unified inbox." },
  { label: "Do you support Twi?", response: "Yes! Our AI chatbots support English, Twi, Ga, Ewe, and other Ghanaian languages. We're built specifically for the Ghanaian market." },
  { label: "How do I get started?", response: "Getting started is easy! Sign up for a free account at app.akwaabaai.com, connect your channels, and you're ready to go. No credit card required." },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Akwaaba! 👋 Welcome to Akwaaba AI. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addBotResponse = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text,
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickResponse = (qr: typeof quickResponses[0]) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: qr.label,
        sender: "user",
        timestamp: new Date(),
      },
    ]);
    addBotResponse(qr.response);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const userMsg = inputValue.trim();
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: userMsg,
        sender: "user",
        timestamp: new Date(),
      },
    ]);
    setInputValue("");

    // Simple keyword matching for demo
    const lower = userMsg.toLowerCase();
    let response = "Thanks for your message! For detailed assistance, please contact us at support@akwaabaai.com or sign up for a free account at app.akwaabaai.com.";
    
    if (lower.includes("price") || lower.includes("cost") || lower.includes("plan")) {
      response = "We offer flexible plans starting from Free! Our Starter plan is GHS 99/month, Growth is GHS 249/month, and we have Enterprise options too. Visit akwaabaai.com/pricing for details.";
    } else if (lower.includes("whatsapp")) {
      response = "We fully support WhatsApp Business API! You can send and receive WhatsApp messages, create broadcast campaigns, and deploy AI chatbots — all from our platform.";
    } else if (lower.includes("demo")) {
      response = "We'd love to show you a demo! Please visit akwaabaai.com/contact to schedule one, or sign up for a free account to explore the platform yourself.";
    } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
      response = "Akwaaba! 😊 Welcome! How can I help you today? Feel free to ask about our features, pricing, or anything else.";
    }

    addBotResponse(response);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Panel */}
      {isOpen && (
        <div 
          className="w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-slide-up" 
          style={{ maxHeight: "500px" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#233C6F] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#EF5E33] rounded-full flex items-center justify-center text-white font-bold text-sm">
                AI
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Akwaaba AI</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-white/70 text-xs">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors p-1"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50" style={{ minHeight: "240px", maxHeight: "300px" }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#233C6F] text-white rounded-br-md"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-md shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-500 px-4 py-2.5 rounded-2xl rounded-bl-md text-sm border border-gray-200 shadow-sm">
                  <span className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Responses */}
          {messages.length <= 1 && (
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-1.5">
                {quickResponses.map((qr) => (
                  <button
                    key={qr.label}
                    onClick={() => handleQuickResponse(qr)}
                    className="text-xs bg-white border border-gray-200 text-[#233C6F] px-3 py-1.5 rounded-full hover:bg-[#EF5E33] hover:text-white hover:border-[#EF5E33] transition-colors"
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="px-4 py-3 border-t border-gray-200 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#EF5E33]/50 border-0"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="w-10 h-10 bg-[#EF5E33] text-white rounded-xl flex items-center justify-center hover:bg-[#d44a20] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                aria-label="Send message"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-gray-600 hover:bg-gray-700 rotate-0"
            : "bg-[#EF5E33] hover:bg-[#d44a20] hover:scale-110"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
}
