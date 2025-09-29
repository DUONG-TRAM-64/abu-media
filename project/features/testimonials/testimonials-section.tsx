import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

/**
 * Section hiển thị testimonials từ học viên
 * Xây dựng lòng tin thông qua feedback thực tế
 */
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Học viên cá nhân",
      role: "Chia sẻ tổng hợp",
      content:
        "Sau lộ trình luyện giọng nền tảng, phần lớn học viên phản hồi tự tin hơn khi giao tiếp và thuyết trình trước đám đông.",
      avatar: "NM",
    },
    {
      name: "Doanh nghiệp đối tác",
      role: "Ghi nhận nội bộ",
      content:
        "Các lớp học nhóm được đánh giá cao nhờ phương pháp thực hành liên tục và dễ áp dụng vào bối cảnh nghề nghiệp.",
      avatar: "NM",
    },
    {
      name: "Học viên nâng cao",
      role: "Tổng hợp phản hồi",
      content:
        "Các workshop chuyên sâu giúp học viên phát triển phong thái dẫn dắt sân khấu và làm chủ cảm xúc giọng nói.",
      avatar: "NM",
    },
  ]

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Học viên nói gì về chúng tôi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-12">
          Feedback chi tiết từ học viên sẽ được cập nhật khi khách hàng cung cấp nội dung chính thức.
        </p>
      </div>
    </section>
  )
}
