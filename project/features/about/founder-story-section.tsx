import { Badge } from "@/components/ui/badge"

/**
 * Section câu chuyện Founder
 * Giới thiệu về người sáng lập và động lực thành lập Nova Media
 */
export default function FounderStorySection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">
              Người sáng lập
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Khát vọng thay đổi ngành đào tạo giọng nói
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nova Media ra đời từ nhận thức sâu sắc về những thiếu sót trong cách đào tạo giọng nói hiện tại.
                Chúng tôi thấy quá nhiều người tham gia các khóa học MC nhưng vẫn không đạt được kết quả mong muốn.
              </p>
              <p>
                Với đội ngũ giảng viên giàu kinh nghiệm, đang công tác tại các đài truyền hình lớn như VTV,
                chúng tôi hiểu rõ những yêu cầu thực tế của nghề và biết cách truyền đạt kiến thức một cách hiệu quả nhất.
              </p>
              <p>
                Nova Media không chỉ dạy kỹ thuật MC đơn thuần, mà đào tạo toàn diện về giọng nói - giúp bạn trở thành
                "ngôi sao giọng nói" trong mọi lĩnh vực, không chỉ riêng nghề MC.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">NM</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">Đội ngũ Nova Media</div>
                <div className="text-sm text-muted-foreground">Chuyên gia đào tạo giọng nói</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <img
                src="/placeholder.svg?height=600&width=480"
                alt="Đội ngũ Nova Media hướng dẫn học viên luyện giọng"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
