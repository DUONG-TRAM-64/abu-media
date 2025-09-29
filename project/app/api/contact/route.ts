import { NextRequest, NextResponse } from "next/server";
import {
  isValidEmail,
  isValidPhoneNumber,
  isRequired,
  hasMinLength,
} from "@/utils";

// POST /api/contact - Xử lý form liên hệ
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    const errors: Record<string, string> = {};

    if (!isRequired(name)) {
      errors.name = "Vui lòng nhập họ tên";
    }

    if (!isRequired(email)) {
      errors.email = "Vui lòng nhập email";
    } else if (!isValidEmail(email)) {
      errors.email = "Email không hợp lệ";
    }

    if (!isRequired(phone)) {
      errors.phone = "Vui lòng nhập số điện thoại";
    } else if (!isValidPhoneNumber(phone)) {
      errors.phone = "Số điện thoại không hợp lệ";
    }

    if (!isRequired(subject)) {
      errors.subject = "Vui lòng nhập chủ đề";
    }

    if (!isRequired(message)) {
      errors.message = "Vui lòng nhập nội dung tin nhắn";
    } else if (!hasMinLength(message, 10)) {
      errors.message = "Nội dung tin nhắn quá ngắn (tối thiểu 10 ký tự)";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // TODO: Implement actual contact logic
    // - Save to database
    // - Send email to admin
    // - Send auto-reply to customer

    console.log("Contact data:", { name, email, phone, subject, message });

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message:
        "Tin nhắn đã được gửi thành công! Chúng tôi sẽ phản hồi trong vòng 24 giờ.",
      data: {
        contactId: `CT${Date.now()}`, // Generate contact ID
        name,
        email,
        subject,
      },
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.",
      },
      { status: 500 },
    );
  }
}
