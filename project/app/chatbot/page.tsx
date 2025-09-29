import { Metadata } from "next";
import { ChatWindow } from "@/components/chatbot";

export const metadata: Metadata = {
  title: "Chatbot - Nova Media",
  description: "Trò chuyện với chatbot AI của Nova Media để nhận hỗ trợ ngay lập tức",
};

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nova Media Chatbot
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trò chuyện với AI chatbot của chúng tôi để nhận được hỗ trợ ngay lập tức 
            về các dịch vụ và câu hỏi thường gặp.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-4xl h-[500px] md:h-[600px]">
            <ChatWindow />
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 p-6 rounded-xl shadow-lg border border-white/20">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                Hỗ trợ 24/7
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Chatbot của chúng tôi hoạt động 24/7 để trả lời các câu hỏi cơ bản của bạn
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 p-6 rounded-xl shadow-lg border border-white/20">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                Phản hồi nhanh
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Nhận câu trả lời ngay lập tức cho các câu hỏi về dịch vụ và thông tin liên hệ
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 p-6 rounded-xl shadow-lg border border-white/20">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m4 6V4a3 3 0 00-3-3H9v2.25" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                Dễ sử dụng
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Giao diện thân thiện, đơn giản và dễ sử dụng cho mọi người
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}