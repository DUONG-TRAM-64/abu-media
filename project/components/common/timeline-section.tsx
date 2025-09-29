/**
 * Section lộ trình học viên
 * Trình bày quy trình đào tạo chuẩn của Nova Media mà không đề cập tới thời gian thành lập
 */
export default function TimelineSection() {
  // Quy trình đồng hành cùng học viên qua từng giai đoạn
  const roadmap = [
    {
      title: "Khởi động & đánh giá giọng",
      description:
        "Buổi tư vấn 1:1 giúp xác định mục tiêu, kiểm tra âm sắc – nhịp thở và xây dựng kế hoạch luyện tập phù hợp.",
    },
    {
      title: "Lớp nền tảng",
      description:
        "Học viên tham gia các buổi luyện âm, phát âm, ngữ thanh căn bản với sự kèm cặp sát sao từ mentor.",
    },
    {
      title: "Workshop nâng cao",
      description:
        "Ứng dụng kỹ thuật sân khấu, biểu cảm, storytelling và luyện tập trong studio ghi hình chuyên nghiệp.",
    },
    {
      title: "Coaching & triển khai thực tế",
      description:
        "Mentor đồng hành trong các dự án cá nhân: dẫn chương trình, thuyết trình doanh nghiệp hoặc sản xuất nội dung.",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Lộ trình đồng hành</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Các bước học viên trải nghiệm từ lúc tư vấn đến khi tự tin áp dụng kỹ năng giọng nói vào thực tế
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {roadmap.map((item, index) => (
              <div key={index} className="relative flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                  {`B${index + 1}`}
                </div>
                <div className="space-y-2 pt-2">
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
