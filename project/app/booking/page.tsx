"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { BookingFormSection, BookingSidebar, BookingSuccess } from "@/features/booking"

/**
 * Trang Booking - Form đăng ký khóa học
 * Cho phép người dùng chọn khóa học và điền thông tin liên hệ
 * Không bao gồm tính năng thanh toán
 */
export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (isSubmitted) {
    return <BookingSuccess />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="mx-auto">
            Đăng ký khóa học
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Bắt đầu hành trình phát triển giọng nói
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Điền thông tin bên dưới để đăng ký khóa học. Chúng tôi sẽ liên hệ tư vấn chi tiết và sắp xếp lịch học phù
            hợp với bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form chính */}
          <div className="lg:col-span-2">
            <BookingFormSection onSubmitSuccess={() => setIsSubmitted(true)} />
          </div>

          {/* Sidebar thông tin */}
          <BookingSidebar />
        </div>
      </div>
    </div>
  )
}
