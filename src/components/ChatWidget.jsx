"use client";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const ChatWidget = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isChatVisible) {
      setMessages([]);
      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);
        setMessages([
          {
            text: "Hello! How can I help you? Mr whta do you do today",
            type: "received",
          },
        ]);
      }, 2000);
    }
  }, [isChatVisible]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChatVisible(true);
    }, 5000); // 5 सेकंड बाद true

    return () => clearTimeout(timer); // Cleanup timeout if component unmounts
  }, []);

  return (
    <>
      {/* Chatbox */}
      <div
        className={`fixed right-8 bottom-14 w-72 h-96 bg-[#e5ddd5] rounded-xl shadow-lg z-[10002] flex flex-col transition-all duration-2000 ${
          isChatVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-[#075e54] text-white p-2.5 flex items-center rounded-t-xl relative justify-between">
          <div className="flex items-center">
            <div className="relative w-10 h-10 mr-2.5">
              <img
                src="https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar"
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-[#25d366] rounded-full border-2 border-[#075e54]"></div>
            </div>
            <div>
              <h1 className="text-sm font-semibold">Marie Smith</h1>
              <span className="text-xs text-green-300">Online</span>
            </div>
          </div>

          {/* Close Button */}
          <button
            className="text-2xl text-white font-bold hover:text-gray-300 absolute top-2 right-2"
            onClick={() => setIsChatVisible(false)}
          >
            <IoClose />
          </button>
        </div>

        {/* Chat Messages */}
        <div
          className="max-h-72 flex-1 p-2.5 overflow-y-auto relative"
          style={{
            backgroundImage: `url(${assets.whatsapp_bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image
            src={assets.whatsapp_bg}
            alt="WhatsApp Background"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full"
          />
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[80%] p-2 mb-2.5 rounded-[7.5px] relative break-words ${
                msg.type === "received"
                  ? "bg-[#eee2e2] self-start"
                  : "bg-[#dcf8c6] self-end ml-auto"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="bg-[#e5ddd5] p-2 rounded-[15px] flex gap-[3px] w-14">
              <span className="w-2 h-2 bg-[#9e9ea1] rounded-full animate-blink"></span>
              <span className="w-2 h-2 bg-[#9e9ea1] rounded-full animate-blink delay-150"></span>
              <span className="w-2 h-2 bg-[#9e9ea1] rounded-full animate-blink delay-300"></span>
            </div>
          )}
        </div>

        {/* WhatsApp Button */}
        <div
          className="p-2.5 bg-[#f0f0f0] rounded-b-xl"
          onClick={() => window.open("https://wa.me/91895088691", "_blank")}
        >
          <button className="bg-[#25d366] text-white border-none p-2.5 text-sm rounded-xl w-full cursor-pointer transition duration-300 hover:bg-[#128c7e]">
            Chat in WhatsApp
          </button>
        </div>
      </div>

      {/* Floating Chat Icon */}
      <div
        className={`fixed bottom-5 right-5 w-16 h-16 bg-[#25d366] rounded-full flex items-center justify-center cursor-pointer shadow-lg z-[10001] transition-all duration-2000 
    ${
      isChatVisible
        ? "opacity-0 scale-0 pointer-events-none"
        : "opacity-100 scale-100"
    }`}
        onClick={() => setIsChatVisible(true)}
      >
        {/* Wave Animation */}
        <div className="absolute w-full h-full bg-[#25d366] rounded-full animate-ping opacity-75"></div>

        {/* WhatsApp Icon */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-9 h-9 relative"
        />
      </div>
    </>
  );
};

export default ChatWidget;
