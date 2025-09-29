import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

/**
 * Component FAQ để giải đáp các thắc mắc thường gặp của khách hàng
 * Giúp tăng độ tin cậy và giảm rào cản trong quyết định đăng ký
 */
export default function FAQSection() {
  const faqs = [
    {
      question: "Tôi có cần có kinh nghiệm trước đó không?",
      answer:
        "Không cần thiết. Chúng tôi có khóa học từ cơ bản đến nâng cao, phù hợp với mọi trình độ. Giảng viên sẽ đánh giá và tư vấn khóa học phù hợp nhất cho bạn.",
    },
    {
      question: "Lịch học có linh hoạt không?",
      answer:
        "Có, chúng tôi có nhiều khung giờ học khác nhau: sáng, chiều, tối và cuối tuần. Bạn có thể chọn lịch học phù hợp với công việc và cuộc sống của mình.",
    },
    {
      question: "Có hỗ trợ sau khi kết thúc khóa học không?",
      answer:
        "Có, chúng tôi hỗ trợ học viên trong 3 tháng sau khi kết thúc khóa học thông qua group chat và buổi review định kỳ. Bạn cũng có thể đăng ký các buổi luyện tập bổ sung.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Câu hỏi thường gặp</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
