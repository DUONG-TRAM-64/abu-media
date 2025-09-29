import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

/**
 * Section testimonials cho trang About
 * Hiển thị phản hồi từ học viên về Nova Media
 */
export default function AboutTestimonialsSection() {
  const testimonials = [
    {
      name: "Học viên MC",
      role: "Chia sẻ tổng hợp",
      content:
        "Lộ trình nâng cao giúp học viên định hình phong cách dẫn dắt riêng và tự tin xuất hiện trên sân khấu lớn.",
      initial: "NM",
    },
    {
      name: "Học viên doanh nghiệp",
      role: "Kết quả nội bộ",
      content:
        "Chương trình giao tiếp doanh nghiệp ghi nhận mức độ hài lòng cao nhờ phương pháp luyện tập bám sát tình huống thực tế.",
      initial: "NM",
    },
    {
      name: "Học viên giáo dục",
      role: "Tổng hợp phản hồi",
      content: "Các buổi coaching cá nhân giúp giáo viên cải thiện phát âm và duy trì năng lượng giọng nói khi đứng lớp.",
      initial: "NM",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Học viên nói về chúng tôi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                  <p className="text-muted-foreground">{testimonial.content}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">{testimonial.initial}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-12">
          Review chính thức sẽ được bổ sung sau khi Nova Media hoàn thiện nội dung với khách hàng.
        </p>
      </div>
    </section>
  )
}
