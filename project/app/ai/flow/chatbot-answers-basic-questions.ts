'use server';

/**
 * @fileOverview A chatbot powered by Google Gemini AI that answers questions about Nova Media company.
 *
 * - chatbotAnswersBasicQuestions - A function that handles the chatbot answering questions process using Gemini AI.
 * - ChatbotAnswersBasicQuestionsInput - The input type for the chatbotAnswersBasicQuestions function.
 * - ChatbotAnswersBasicQuestionsOutput - The return type for the chatbotAnswersBasicQuestions function.
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import { z } from 'zod';

const ChatbotAnswersBasicQuestionsInputSchema = z.object({
  question: z.string().describe('The user\'s question.'),
  conversationHistory: z.array(z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string(),
  })).optional().describe('Previous conversation history for context.'),
});

export type ChatbotAnswersBasicQuestionsInput = z.infer<typeof ChatbotAnswersBasicQuestionsInputSchema>;

const ChatbotAnswersBasicQuestionsOutputSchema = z.object({
  answer: z.string().describe('The chatbot\'s answer to the question.'),
});

export type ChatbotAnswersBasicQuestionsOutput = z.infer<typeof ChatbotAnswersBasicQuestionsOutputSchema>;

// Company information for context
const novaMediaContext = `
-Khi khách hàng gửi lời chào hãy chỉ trả lời "Xin chào! 👋 Tôi là AI chatbot của Nova Media. Tôi có thể giúp bạn tìm hiểu về dịch vụ của chúng tôi. Hãy hỏi tôi bất cứ điều gì về Nova Media! 🚀"


-Bạn là chatbot chính thức của Nova Media, một công ty hàng đầu tại Việt Nam chuyên về:
THÔNG TIN CÔNG TY:
Khi khách hàng hỏi về cách liên hệ, thông tin liên lạc, hoặc muốn tư vấn trực tiếp, hãy cung cấp thông tin sau:
- Tên: Nova Media Vietnam
- Lĩnh vực: Thiết kế web, Phát triển app mobile, Digital Marketing, Tư vấn công nghệ
- Địa chỉ: 123 Đường Nguyễn Văn A, Quận 1, TP.HCM (có thể cập nhật địa chỉ thật)
📞 Hotline: 037.689.9568  
📧 Email: contact@novamedia.vn
🌐 Website: https://novamedia.vn
📍 Địa chỉ: 123 Đường Nguyễn Văn A, Quận 1, TP.HCM
💬 Hoặc chat Zalo: https://zalo.me/0376899568
📱 Facebook: facebook.com/novamedia.vn
- Giờ làm việc: 8:00 - 18:00 (Thứ 2 - Thứ 6), Thứ 7: 8:00 - 12:00
Chúng tôi sẽ tư vấn MIỄN PHÍ và báo giá chi tiết trong 30 phút! 🚀
Lưu ý: 
- Link Zalo phải được format dưới dạng clickable link
- Khuyến khích khách hàng liên hệ qua Zalo để được tư vấn nhanh nhất
- Thời gian phản hồi: Trong giờ hành chính (8:00 - 17:30, Thứ 2 - Thứ 6)

DỊCH VỤ CHÍNH:
1. 🌐 Thiết kế website chuyên nghiệp
   - Website doanh nghiệp, giới thiệu công ty
   - Website bán hàng trực tuyến (E-commerce)
   - Landing page marketing

2. 🚀 Digital Marketing & SEO
   - Quảng cáo Google Ads
   - Quảng cáo Facebook & Instagram Ads
   - Tối ưu SEO website lên TOP Google
   - Content Marketing
   - Email Marketing automation

3. 🏢 Chuyển đổi số doanh nghiệp
   - Tư vấn chiến lược công nghệ
   - Phần mềm quản lý bán hàng
   - Hệ thống CRM cho doanh nghiệp
   - Tích hợp thanh toán online

4. 📈 Quản lý mạng xã hội
   - Quản lý fanpage Facebook chuyên nghiệp
   - Thiết kế content sáng tạo
   - Tương tác và chăm sóc khách hàng
   - Báo cáo hiệu quả chi tiết

5. 🌍 Hosting & Domain
   - Đăng ký tên miền .com, .vn
   - Hosting tốc độ cao, bảo mật cao
   - SSL Certificate miễn phí
   - Backup dữ liệu tự động



GÓI DỊCH VỤ PHỔ BIẾN:
1. Liên quan đến dịch vụ thiết kế web
• Gói Startup (cho công ty mới): Website + SEO cơ bản từ 5-8 triệu
• Gói Business (cho doanh nghiệp): Website + Marketing từ 10-15 triệu  
• Gói Enterprise (giải pháp toàn diện): Tùy chỉnh theo yêu cầu từ 20 triệu+
2. Luyện giọng nói
• Gói cơ bản: 1 triệu/tháng
• Gói nâng cao: 2 triệu/tháng
• Gói kèm 1:1 : 3 triệu/tháng

ĐỐI TƯỢNG KHÁCH HÀNG:
1. Doanh nghiệp vừa và nhỏ cần hiện diện trực tuyến, Startup công nghệ cần phát triển sản phẩm số, Cửa hàng muốn bán hàng online....
2. Cá nhấn muốn luyện giọng nói để phát triển thương hiệu cá nhân , muốn làm mc , muốn phát triển kỹ năng nói trước công chúng....


  CAM KẾT CHẤT LƯỢNG với dịch vụ website:
✅ Thiết kế đẹp, hiện đại, responsive
✅ Tốc độ tải nhanh, SEO-friendly  
✅ Bảo hành 12 tháng, hỗ trợ kỹ thuật 24/7
✅ Đào tạo sử dụng miễn phí
✅ Tư vấn chiến lược marketing

CAM KẾT CHẤT LƯỢNG với dịch vụ luyện giọng nói:
✅ Cải thiện rõ rệt giọng nói chỉ sau 1 tháng
✅ Phát âm chuẩn, tự tin giao tiếp
✅ Kỹ năng nói trước đám đông, thuyết trình chuyên nghiệp
✅ Lộ trình cá nhân hóa theo mục tiêu học viên
✅ Hoàn thành khóa học vẫn có thể review lại sau 3 tháng.


HƯỚNG DẪN TRẢ LỜI:
- Luôn trả lời bằng tiếng Việt thân thiện, chuyên nghiệp
- Tập trung vào lợi ích khách hàng sẽ nhận được
- Đưa ra ví dụ cụ thể về dự án đã thực hiện
- Khuyến khích khách hàng đặt lịch tư vấn miễn phí
- Nếu không biết thông tin cụ thể, hướng dẫn liên hệ trực tiếp
- Luôn kết thúc bằng lời mời tư vấn hoặc báo giá
- Không trả lời câu hỏi không liên quan đến công nghệ/marketing

`;

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

export async function chatbotAnswersBasicQuestions(input: ChatbotAnswersBasicQuestionsInput): Promise<ChatbotAnswersBasicQuestionsOutput> {
  try {
    // Validate input
    const validatedInput = ChatbotAnswersBasicQuestionsInputSchema.parse(input);
    
    if (!process.env.GOOGLE_AI_API_KEY) {
      throw new Error('Google AI API key is not configured');
    }

    // Get Gemini model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

    // Build conversation context
    let conversationContext = novaMediaContext + '\n\n';
    
    if (validatedInput.conversationHistory && validatedInput.conversationHistory.length > 0) {
      conversationContext += 'LỊCH SỬ CUỘC TRÒ CHUYỆN:\n';
      validatedInput.conversationHistory.forEach((message, index) => {
        const role = message.role === 'user' ? 'Người dùng' : 'Bot';
        conversationContext += `${role}: ${message.content}\n`;
      });
      conversationContext += '\n';
    }

    conversationContext += `CÂUTHỎI HIỆN TẠI: ${validatedInput.question}\n\nTRẢ LỜI:`;

    // Generate response using Gemini
    const result = await model.generateContent(conversationContext);
    const response = await result.response;
    let answer = response.text();

    // Clean up the response
    answer = answer.trim();
    
    // If response is too generic, add Nova Media context
    if (answer.length < 20) {
      answer = 'Cảm ơn bạn đã liên hệ với Nova Media! Để tôi có thể hỗ trợ bạn tốt hơn, vui lòng liên hệ trực tiếp qua hotline: +84 123 456 789 hoặc email: info@novamedia.vn';
    }

    // Validate output
    const result_output = ChatbotAnswersBasicQuestionsOutputSchema.parse({ answer });
    
    return result_output;

  } catch (error) {
    console.error('Error in Gemini chatbot:', error);
    
    // Fallback response
    const fallbackResponse = {
      answer: `Xin lỗi, tôi đang gặp sự cố kỹ thuật. Để được hỗ trợ tốt nhất, vui lòng liên hệ trực tiếp với Nova Media:
      
📞 Hotline: 037.689.9568  
📧 Email: contact@novamedia.vn
🌐 Website: https://novamedia.vn
📍 Địa chỉ: 123 Đường Nguyễn Văn A, Quận 1, TP.HCM

💬 Hoặc chat Zalo: https://zalo.me/0376899568
📱 Facebook: facebook.com/novamedia.vn

Chúng tôi sẽ tư vấn MIỄN PHÍ và báo giá chi tiết trong 30 phút! 🚀`
    };

    return fallbackResponse;
  }
}
