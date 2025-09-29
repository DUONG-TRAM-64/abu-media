"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Trash2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Message {
  role: "user" | "bot";
  content: string;
  timestamp?: Date;
}

interface ChatWindowProps {
  className?: string;
}

// Quick suggestion buttons data
const quickSuggestions = [
  { id: 'phone', text: 'Sđt liên hệ', icon: '📞' },
  { id: 'address', text: 'Địa chỉ', icon: '📍' },
  { id: 'services', text: 'Các dịch vụ của Nova Media', icon: '💼' },
  { id: 'pricing', text: 'Bảng giá dịch vụ', icon: '💰' },
  { id: 'contact-time', text: 'Thời gian làm việc', icon: '⏰' },
];

export function ChatWindow({ className }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Xin chào! 👋 Tôi là AI chatbot của Nova Media. Tôi có thể giúp bạn tìm hiểu về dịch vụ của chúng tôi. Hãy hỏi tôi bất cứ điều gì về Nova Media! 🚀",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Auto scroll when loading state changes
    if (isLoading) {
      setTimeout(scrollToBottom, 100);
    }
  }, [isLoading]);

  // Handle suggestion button clicks
  const handleSuggestionClick = (suggestion: typeof quickSuggestions[0]) => {
    setInputValue(suggestion.text);
    setShowSuggestions(false);
    // Auto send the message
    setTimeout(() => {
      sendMessageWithText(suggestion.text);
    }, 100);
  };

  // Clear chat history
  const clearChat = () => {
    setMessages([
      {
        role: "bot",
        content: "Xin chào! 👋 Tôi là AI chatbot của Nova Media. Tôi có thể giúp bạn tìm hiểu về dịch vụ của chúng tôi. Hãy hỏi tôi bất cứ điều gì về Nova Media! 🚀",
      },
    ]);
    setShowSuggestions(true);
    setInputValue("");
  };

  // Send message with specific text
  const sendMessageWithText = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setShowSuggestions(false);

    try {
      // Prepare conversation history for context (last 10 messages to avoid token limits)
      const conversationHistory = messages.slice(-10).map(msg => ({
        role: msg.role === "user" ? "user" as const : "assistant" as const,
        content: msg.content
      }));

      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          question: text,
          conversationHistory: conversationHistory
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const botMessage: Message = {
          role: "bot",
          content: data.answer,
          timestamp: new Date(data.timestamp),
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        role: "bot",
        content: "Xin lỗi, tôi đang gặp sự cố kỹ thuật. Vui lòng thử lại sau hoặc liên hệ trực tiếp với Nova Media qua hotline: +84 123 456 789",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      // Show suggestions again after bot response for continued conversation
      setTimeout(() => {
        setShowSuggestions(true);
      }, 1000);
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;
    await sendMessageWithText(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <Card className={cn("flex flex-col shadow-2xl", className)} style={{ height: 'inherit' }}>
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <Bot className="h-8 w-8 text-blue-600"/>
          <div>
            <CardTitle className="font-semibold">Nova Media Chatbot</CardTitle>
            <CardDescription>Hỏi tôi bất cứ điều gì!</CardDescription>
          </div>
        </div>
        {messages.length > 1 && (
          <Button
            onClick={clearChat}
            variant="ghost"
            size="sm"
            className="text-gray-500 hover:text-red-500 p-1.5 h-auto"
            title="Xóa lịch sử chat"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        )}
      </CardHeader>

      {/* Messages */}
      <CardContent className="flex-grow overflow-hidden p-0 h-full">
        <div className="h-full overflow-y-auto chat-scrollbar">
          <div className="p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex gap-3 text-sm animate-fadeIn",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.role === "bot" && <Bot className="h-6 w-6 shrink-0 text-blue-600" />}
                <div
                  className={cn(
                    "rounded-lg px-4 py-2 max-w-[80%]",
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-900"
                  )}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  {message.timestamp && (
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString("vi-VN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  )}
                </div>
                {message.role === "user" && <User className="h-6 w-6 shrink-0 text-gray-600" />}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 text-sm justify-start">
                <Bot className="h-6 w-6 shrink-0 text-blue-600" />
                <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                  <Loader2 className="h-5 w-5 animate-spin"/>
                </div>
              </div>
            )}
            {/* Auto scroll anchor */}
            <div ref={scrollAreaRef} />
          </div>
        </div>
      </CardContent>

      {/* Quick Suggestions */}
      {showSuggestions && !isLoading && (
        <div className="px-4 pb-2">
          <div className="mb-2">
            <span className="text-xs text-gray-500 font-medium">💡 Gợi ý câu hỏi:</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {quickSuggestions.map((suggestion) => (
              <button
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion)}
                className="flex items-center gap-2 p-2 text-xs bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors text-blue-700 hover:text-blue-800 text-left"
                disabled={isLoading}
              >
                <span className="text-sm">{suggestion.icon}</span>
                <span className="truncate">{suggestion.text}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Nhập câu hỏi của bạn..."
            onFocus={() => setShowSuggestions(false)}
            disabled={isLoading}
            className="flex-1 text-sm border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          <Button
            onClick={() => setShowSuggestions(!showSuggestions)}
            variant="outline"
            size="sm"
            className="px-2 text-blue-600 border-blue-300 hover:bg-blue-50"
            title={showSuggestions ? "Ẩn gợi ý" : "Hiển thị gợi ý"}
            type="button"
          >
            {showSuggestions ? "💡" : "🔍"}
          </Button>
          <Button type="submit" size="sm" disabled={!inputValue.trim() || isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}