"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Clock, User, Calendar, Target, MessageSquare, ArrowRight } from "lucide-react"

/**
 * Component form đăng ký khóa học chính
 * Bao gồm tất cả các trường thông tin cần thiết
 */
interface BookingFormSectionProps {
  onSubmitSuccess: () => void
}

export default function BookingFormSection({ onSubmitSuccess }: BookingFormSectionProps) {
  // STATE MANAGEMENT:
  // - formData: Object chứa tất cả dữ liệu form
  // - isSubmitting: Boolean để hiển thị trạng thái loading
  const [formData, setFormData] = useState({
    course: "",
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    goals: "",
    schedule: "",
    notes: "",
    agreeTerms: false,
    agreeMarketing: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  // DỮ LIỆU KHÓA HỌC:
  // - Mỗi course có đầy đủ thông tin: id, title, price, duration, sessions
  // - popular: boolean để hiển thị badge "Phổ biến"
  // - Dữ liệu này có thể được move ra file constants hoặc fetch từ API
  const courses = [
    {
      id: "co-ban",
      title: "Luyện giọng cơ bản",
      price: "2.500.000đ",
      duration: "3 tháng",
      sessions: "12 buổi",
      popular: true, // Hiển thị badge "Phổ biến"
    },
    {
      id: "giao-tiep",
      title: "Giao tiếp thuyết trình",
      price: "3.500.000đ",
      duration: "4 tháng",
      sessions: "16 buổi",
      popular: false,
    },
    {
      id: "chuyen-nghiep",
      title: "Luyện giọng chuyên nghiệp",
      price: "5.500.000đ",
      duration: "6 tháng",
      sessions: "24 buổi",
      popular: false,
    },
  ]

  // DANH SÁCH OPTION CHO SELECT COMPONENTS:
  // - scheduleOptions: Các khung giờ học có thể chọn
  // - experienceOptions: Các mức độ kinh nghiệm
  // - Có thể mở rộng thêm các options khác khi cần
  const scheduleOptions = [
    { value: "sang", label: "Buổi sáng (8:00 - 11:00)" },
    { value: "chieu", label: "Buổi chiều (14:00 - 17:00)" },
    { value: "toi", label: "Buổi tối (18:30 - 21:30)" },
    { value: "cuoi-tuan", label: "Cuối tuần (9:00 - 12:00)" },
  ]

  const experienceOptions = [
    { value: "moi-bat-dau", label: "Mới bắt đầu" },
    { value: "co-ban", label: "Có kinh nghiệm cơ bản" },
    { value: "trung-binh", label: "Trung bình" },
    { value: "kha-gioi", label: "Khá giỏi" },
  ]

  // GENERIC INPUT HANDLER:
  // - Xử lý tất cả các loại input: string, boolean
  // - Sử dụng functional update để tránh stale closure
  // - Type-safe với TypeScript
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  // FORM SUBMIT HANDLER:
  // - Prevent default form submission
  // - Set loading state để disable form
  // - Simulate API call (2 giây)
  // - Call success callback to chuyển trang
  //
  // TODO: Thay thế simulation bằng real API call
  // TODO: Thêm error handling cho API failures
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call - thay thế bằng real API endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // TODO: Gửi dữ liệu lên server
      // const response = await fetch('/api/bookings', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      onSubmitSuccess() // Chuyển sang trang success
    } catch (error) {
      // TODO: Xử lý lỗi và hiển thị thông báo
      console.error("Booking submission failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="lg:col-span-2 space-y-8">
        {/* SECTION: CHỌN KHÓA HỌC
          - Sử dụng RadioGroup để chỉ chọn được 1 khóa học
          - Hiển thị thông tin đầy đủ: tên, giá, thời gian, số buổi
          - Badge "Phổ biến" cho khóa học được recommend
        */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Chọn khóa học
            </CardTitle>
            <CardDescription>Chọn khóa học phù hợp với nhu cầu và trình độ của bạn</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="relative">
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value={course.id} id={course.id} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Label htmlFor={course.id} className="font-semibold cursor-pointer">
                            {course.title}
                          </Label>
                          {course.popular && (
                            <Badge variant="secondary" className="text-xs">
                              Phổ biến
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="font-semibold text-primary">{course.price}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {course.sessions}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Thông tin cá nhân */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Thông tin cá nhân
            </CardTitle>
            <CardDescription>Vui lòng điền đầy đủ thông tin để chúng tôi có thể liên hệ với bạn</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">
                  Họ và tên <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="fullName"
                  placeholder="Nguyễn Văn A"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Số điện thoại <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="0123 456 789"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Thông tin bổ sung */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Thông tin bổ sung
            </CardTitle>
            <CardDescription>Giúp chúng tôi hiểu rõ hơn về nhu cầu và mục tiêu của bạn</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="experience">Trình độ hiện tại</Label>
              <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn trình độ của bạn" />
                </SelectTrigger>
                <SelectContent>
                  {experienceOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="goals">Mục tiêu học tập</Label>
              <Textarea
                id="goals"
                placeholder="Ví dụ: Cải thiện kỹ năng thuyết trình tại công ty, tự tin giao tiếp hàng ngày..."
                value={formData.goals}
                onChange={(e) => handleInputChange("goals", e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="schedule">Lịch học mong muốn</Label>
              <Select value={formData.schedule} onValueChange={(value) => handleInputChange("schedule", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn khung giờ phù hợp" />
                </SelectTrigger>
                <SelectContent>
                  {scheduleOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Ghi chú thêm</Label>
              <Textarea
                id="notes"
                placeholder="Có điều gì đặc biệt chúng tôi cần biết không?"
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                rows={2}
              />
            </div>
          </CardContent>
        </Card>

        {/* Điều khoản */}
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="agreeTerms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                required
              />
              <div className="space-y-1">
                <Label htmlFor="agreeTerms" className="text-sm cursor-pointer">
                  Tôi đồng ý với{" "}
                  <a href="#" className="text-primary hover:underline">
                    điều khoản sử dụng
                  </a>{" "}
                  và{" "}
                  <a href="#" className="text-primary hover:underline">
                    chính sách bảo mật
                  </a>{" "}
                  của Nova Media <span className="text-destructive">*</span>
                </Label>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="agreeMarketing"
                checked={formData.agreeMarketing}
                onCheckedChange={(checked) => handleInputChange("agreeMarketing", checked as boolean)}
              />
              <div className="space-y-1">
                <Label htmlFor="agreeMarketing" className="text-sm cursor-pointer">
                  Tôi muốn nhận thông tin về các khóa học mới và ưu đãi đặc biệt từ Nova Media
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SUBMIT BUTTON:
          - Disabled khi đang submit hoặc thiếu thông tin bắt buộc
          - Hiển thị loading state với text "Đang xử lý..."
          - Validation: course, fullName, email, phone, agreeTerms là bắt buộc
        */}
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={
            isSubmitting ||
            !formData.course ||
            !formData.fullName ||
            !formData.email ||
            !formData.phone ||
            !formData.agreeTerms
          }
        >
          {isSubmitting ? (
            "Đang xử lý..."
          ) : (
            <>
              Đăng ký khóa học
              <ArrowRight className="ml-2 w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
