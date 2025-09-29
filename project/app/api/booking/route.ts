import { NextRequest, NextResponse } from "next/server";
import { isValidEmail, isValidPhoneNumber, isRequired } from "@/utils";

declare module "next/server" {
  export const NextRequest: any;
  export const NextResponse: any;
}

// POST /api/booking - Xử lý đăng ký khóa học
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, course, message } = body;

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

    if (!isRequired(course)) {
      errors.course = "Vui lòng chọn khóa học";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // TODO: Implement actual booking logic
    // - Save to database
    // - Send confirmation email
    // - Send notification to admin

    console.log("Booking data:", { name, email, phone, course, message });

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: "Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.",
      data: {
        bookingId: `BK${Date.now()}`, // Generate booking ID
        name,
        email,
        course,
      },
    });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Có lỗi xảy ra khi xử lý đăng ký. Vui lòng thử lại sau.",
      },
      { status: 500 },
    );
  }
}

// GET /api/booking - Lấy thông tin booking (optional)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const bookingId = searchParams.get("id");

    if (!bookingId) {
      return NextResponse.json(
        { success: false, message: "Booking ID is required" },
        { status: 400 },
      );
    }

    // TODO: Implement get booking logic
    // - Get from database by ID

    return NextResponse.json({
      success: true,
      data: {
        bookingId,
        status: "pending",
        // ... other booking data
      },
    });
  } catch (error) {
    console.error("Get booking API error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
