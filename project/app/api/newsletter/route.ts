import { NextRequest, NextResponse } from "next/server";
import { isValidEmail, isRequired } from "@/utils";

// POST /api/newsletter - Đăng ký newsletter
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    // Validation
    const errors: Record<string, string> = {};

    if (!isRequired(email)) {
      errors.email = "Vui lòng nhập email";
    } else if (!isValidEmail(email)) {
      errors.email = "Email không hợp lệ";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // TODO: Implement actual newsletter logic
    // - Check if email already exists
    // - Save to database/mailing list
    // - Send welcome email

    console.log("Newsletter subscription:", { email, name });

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message:
        "Đăng ký newsletter thành công! Cảm ơn bạn đã quan tâm đến Nova Media.",
      data: {
        email,
        subscriptionId: `NL${Date.now()}`,
      },
    });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Có lỗi xảy ra khi đăng ký newsletter. Vui lòng thử lại sau.",
      },
      { status: 500 },
    );
  }
}

// DELETE /api/newsletter - Hủy đăng ký newsletter
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Email không hợp lệ" },
        { status: 400 },
      );
    }

    // TODO: Implement unsubscribe logic
    // - Remove from database/mailing list
    // - Send confirmation email

    console.log("Newsletter unsubscribe:", { email });

    return NextResponse.json({
      success: true,
      message: "Hủy đăng ký newsletter thành công.",
      data: { email },
    });
  } catch (error) {
    console.error("Newsletter unsubscribe API error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
