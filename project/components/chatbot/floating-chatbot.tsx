"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Minimize2, Maximize2, Send } from "lucide-react";
import { ChatWindow } from "./chat-window";
import { cn } from "@/lib/utils";

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // Simulate welcome message notification
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setUnreadCount(1);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setUnreadCount(0);
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsAnimating(true);
    setIsOpen(!isOpen);
    setIsMinimized(false);
    setUnreadCount(0);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const minimizeChat = () => {
    setIsAnimating(true);
    setIsMinimized(!isMinimized);
    setTimeout(() => setIsAnimating(false), 200);
  };

  const closeChat = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsMinimized(false);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <>
      {/* Floating Button with Professional Animations */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 transition-all duration-300 group",
          isOpen && "scale-0 opacity-0 pointer-events-none"
        )}
      >
        {/* Ripple Effect Background */}
        <div className="absolute inset-0 rounded-full">
          <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20" />
          <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-10 animation-delay-200" />
        </div>
        
        {/* Main Button */}
        <Button
          onClick={toggleChat}
          className={cn(
            "relative w-16 h-16 rounded-full shadow-xl hover:shadow-2xl",
            "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
            "transition-all duration-300 transform hover:scale-110",
            "flex items-center justify-center"
          )}
          size="icon"
          aria-label="Mở Nova Media Chatbot"
        >
          <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
          
          {/* Notification Badge */}
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
              {unreadCount}
            </span>
          )}
        </Button>

        {/* Always Visible Mini Label - Positioned close to button */}
        <div className="absolute -top-1 -left-1 transform -translate-x-full -translate-y-1/2">
          <div className="bg-gradient-to-r from-blue-400 to-red-600 text-white text-sm font-medium px-2.5 py-1 rounded-full shadow-lg border-2 border-white whitespace-nowrap animate-pulse">
            Chat with Bot!!!
            <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-3 border-t-2 border-b-2 border-transparent border-l-blue-600" />
          </div>
        </div>

        {/* Enhanced Hover Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform group-hover:translate-y-0 translate-y-2">
          <div className="bg-gray-900/95 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-xl border border-gray-700">
            💬 Chat với Nova Media AI
            <div className="text-xs text-gray-300 mt-0.5">
              Hỗ trợ 24/7 • Trả lời tức thì
            </div>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-gray-900" />
          </div>
        </div>
      </div>

      {/* Professional Chat Window */}
      {isOpen && (
        <div
          className={cn(
            "fixed bottom-6 right-6 z-50",
            "transition-all duration-300 ease-in-out",
            isAnimating && "scale-95 opacity-90",
            !isAnimating && "scale-100 opacity-100"
          )}
          style={{
            width: isMinimized ? "320px" : "420px",
            height: isMinimized ? "70px" : "min(650px, 85vh)",
          }}
        >
          {isMinimized ? (
            /* Minimized State - Professional Bar */
            <Card 
              className={cn(
                "h-full cursor-pointer overflow-hidden",
                "bg-gradient-to-r from-white to-gray-50",
                "border-2 border-blue-200/50 hover:border-blue-300",
                "shadow-xl hover:shadow-2xl",
                "transition-all duration-200 transform hover:scale-[1.02]"
              )}
              onClick={() => minimizeChat()}
            >
              <div className="h-full px-4 flex items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center gap-3">
                  {/* Animated Logo */}
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    {/* Online Status */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                  </div>
                  
                  {/* Text Info */}
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-800 text-sm">
                      Nova Media AI
                    </span>
                    <div className="flex items-center gap-1.5">
                      {isTyping ? (
                        <span className="text-xs text-blue-600 italic">
                          Đang nhập...
                        </span>
                      ) : (
                        <span className="text-xs text-green-600 font-medium">
                          ● Trực tuyến
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Section - Action Buttons */}
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      minimizeChat();
                    }}
                    className="h-8 w-8 p-0 hover:bg-blue-100 rounded-full"
                    aria-label="Mở rộng"
                  >
                    <Maximize2 className="w-4 h-4 text-gray-600" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeChat();
                    }}
                    className="h-8 w-8 p-0 hover:bg-red-100 rounded-full group"
                    aria-label="Đóng"
                  >
                    <X className="w-4 h-4 text-gray-600 group-hover:text-red-600 transition-colors" />
                  </Button>
                </div>
              </div>
            </Card>
          ) : (
            /* Expanded State - Full Chat Window */
            <div className="relative h-full">
              {/* Window Controls - Professional Style */}
              <div className="absolute top-0 right-0 z-10 p-3 flex gap-1.5">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={minimizeChat}
                  className={cn(
                    "h-8 w-8 p-0 rounded-full",
                    "bg-white/90 backdrop-blur-sm hover:bg-gray-100",
                    "shadow-md hover:shadow-lg transition-all duration-200",
                    "group"
                  )}
                  aria-label="Thu nhỏ"
                >
                  <Minimize2 className="w-4 h-4 text-gray-700 group-hover:text-blue-600" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeChat}
                  className={cn(
                    "h-8 w-8 p-0 rounded-full",
                    "bg-white/90 backdrop-blur-sm hover:bg-red-50",
                    "shadow-md hover:shadow-lg transition-all duration-200",
                    "group"
                  )}
                  aria-label="Đóng"
                >
                  <X className="w-4 h-4 text-gray-700 group-hover:text-red-600" />
                </Button>
              </div>

              {/* Chat Window with Professional Styling */}
              <ChatWindow 
                className={cn(
                  "h-full rounded-2xl overflow-hidden",
                  "shadow-2xl border-0",
                  "bg-white/95 backdrop-blur-sm",
                  "animate-in slide-in-from-bottom-5 duration-300"
                )}
              />
              
              {/* Optional: Resize Handle (for desktop) */}
              <div className="absolute bottom-0 left-0 w-4 h-4 cursor-sw-resize opacity-0 hover:opacity-100 transition-opacity">
                <svg className="w-full h-full text-gray-400" viewBox="0 0 6 6">
                  <circle cx="1" cy="5" r="0.5" fill="currentColor" />
                  <circle cx="3" cy="5" r="0.5" fill="currentColor" />
                  <circle cx="5" cy="5" r="0.5" fill="currentColor" />
                  <circle cx="1" cy="3" r="0.5" fill="currentColor" />
                  <circle cx="3" cy="3" r="0.5" fill="currentColor" />
                  <circle cx="1" cy="1" r="0.5" fill="currentColor" />
                </svg>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
